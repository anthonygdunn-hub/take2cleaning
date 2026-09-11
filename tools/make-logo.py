#!/usr/bin/env python3
"""Build every logo and icon asset from the supplied artwork.

The artwork arrives drawn on white. Keying the white out leaves anti-aliased
edge pixels as a blend of ink and white, which reads as a halo on a dark
background. So instead of keying, coverage is recovered from each pixel's
distance from white and the white is un-premultiplied out of the colour.

White areas fully enclosed by the mark are ambiguous: the counters of a, e, g
and 2 are paper showing through and must stay transparent, while the cores of
the sparkles are artwork and must stay opaque. They are told apart by how pure
the white is, because paper is 255 and the sparkle cores are a very light cyan.
"""
import sys, os
from PIL import Image
import numpy as np
from scipy import ndimage

SRC = sys.argv[1] if len(sys.argv) > 1 else 'brand/logo-source.png'
OUT = 'src/assets/img'

a = np.array(Image.open(SRC).convert('RGBA')).astype(np.float32)
rgb = a[..., :3]
mn = rgb.min(axis=2)

alpha = np.clip((255.0 - mn) / 255.0 * 1.28, 0, 1)
alpha[alpha < 0.08] = 0.0

solid = alpha > 0.55
holes = ndimage.binary_fill_holes(solid) & ~solid
lab, n = ndimage.label(holes)
keep = np.zeros_like(holes)
for i in range(1, n + 1):
    m = lab == i
    if (mn[m] >= 250).mean() < 0.55 or m.sum() < 400:
        keep |= m                      # artwork, not paper
alpha[keep] = 1.0

aa = np.clip(alpha, 1e-4, 1)[..., None]
out = np.empty_like(a)
out[..., :3] = np.clip((rgb - 255.0 * (1 - aa)) / aa, 0, 255)
out[..., 3] = alpha * 255
full = Image.fromarray(out.astype(np.uint8), 'RGBA')
full = full.crop(full.getbbox())

def save(img, name, width, colors=192):
    o = img.copy()
    o.thumbnail((width, 99999), Image.LANCZOS)
    o.quantize(colors=colors, method=Image.FASTOCTREE).save(os.path.join(OUT, name), optimize=True)
    print(f'{name:24} {o.size[0]}x{o.size[1]}  {os.path.getsize(os.path.join(OUT, name))//1024} KB')

# header and drawer: the wordmark with its sparkles, cropped short enough to sit
# in a header without forcing it taller
save(full.crop((40, 168, 1095, 608)), 'logo-lockup.png', 520)
# footer and social image: the whole lockup including the swoosh
save(full, 'logo.png', 420)

# app icons: the large sparkle on the brand gradient, so it still reads at 32px
spark = full.crop((880, 58, 1152, 330))
def ground(size):
    from PIL import ImageDraw
    g = Image.new('RGB', (size, size)); d = ImageDraw.Draw(g)
    for y in range(size):
        t = y / max(1, size - 1)
        d.line([(0, y), (size, y)], fill=(int(0x35 + (0x0A - 0x35) * t),
                                          int(0xB8 + (0x62 - 0xB8) * t),
                                          int(0xF2 + (0x91 - 0xF2) * t)))
    return g.convert('RGBA')

for size in (512, 192, 180):
    base = ground(size)
    m = spark.copy(); m.thumbnail((int(size * .82), int(size * .82)), Image.LANCZOS)
    base.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
    p = os.path.join(OUT, f'icon-{size}.png')
    base.convert('RGB').save(p, optimize=True)
    print(f'icon-{size}.png{"":11} {size}x{size}  {os.path.getsize(p)//1024} KB')
