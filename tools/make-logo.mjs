/*
 * make-logo.mjs — notes only; the work is done by tools/make-logo.py because
 * it needs Pillow and SciPy. Kept here so the command is discoverable.
 *
 *   python3 tools/make-logo.py brand/logo-source.png
 *
 * The supplied artwork is drawn on a white background. Simply keying the white
 * out leaves every anti-aliased edge pixel as a blend of ink and white, which
 * shows as a halo on any dark background. This recovers the coverage from how
 * far each pixel sits from white and un-premultiplies it, so the mark is clean
 * on light and dark alike.
 */
