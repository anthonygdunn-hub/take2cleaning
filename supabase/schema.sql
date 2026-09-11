-- Take2Cleaning — Supabase schema.
-- Run this once in the SQL editor of the new project.

create extension if not exists "pgcrypto";

-- ------------------------------------------------------------- enquiries
create table if not exists public.take2_enquiries (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null check (char_length(name) between 2 and 120),
  email         text check (email is null or char_length(email) <= 200),
  phone         text check (phone is null or char_length(phone) <= 40),
  postcode      text check (postcode is null or char_length(postcode) <= 12),
  property      text,
  frequency     text,
  services      text[] not null default '{}',
  message       text check (message is null or char_length(message) <= 4000),
  source_page   text,
  source_label  text,
  status        text not null default 'new'
                check (status in ('new','contacted','quoted','won','lost','spam')),
  notes         text,
  constraint enquiry_has_contact check (email is not null or phone is not null)
);

create index if not exists take2_enquiries_created_idx on public.take2_enquiries (created_at desc);
create index if not exists take2_enquiries_status_idx  on public.take2_enquiries (status);

alter table public.take2_enquiries enable row level security;

-- The website posts with the anon key. It may insert, and nothing else.
drop policy if exists "anon can submit an enquiry" on public.take2_enquiries;
create policy "anon can submit an enquiry"
  on public.take2_enquiries for insert to anon with check (true);

-- Reading enquiries requires a signed-in account or the service role.
drop policy if exists "authenticated can read enquiries" on public.take2_enquiries;
create policy "authenticated can read enquiries"
  on public.take2_enquiries for select to authenticated using (true);

drop policy if exists "authenticated can update enquiries" on public.take2_enquiries;
create policy "authenticated can update enquiries"
  on public.take2_enquiries for update to authenticated using (true) with check (true);

-- ---------------------------------------------------------- testimonials
create table if not exists public.take2_testimonials (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  author      text not null,
  town        text,
  service     text,
  body        text not null check (char_length(body) between 10 and 1200),
  rating      int  not null default 5 check (rating between 1 and 5),
  published   boolean not null default false,
  sort_order  int not null default 100
);

create index if not exists take2_testimonials_pub_idx
  on public.take2_testimonials (published, sort_order);

alter table public.take2_testimonials enable row level security;

-- Only published reviews are readable by the public site.
drop policy if exists "anyone can read published testimonials" on public.take2_testimonials;
create policy "anyone can read published testimonials"
  on public.take2_testimonials for select to anon using (published = true);

drop policy if exists "authenticated manage testimonials" on public.take2_testimonials;
create policy "authenticated manage testimonials"
  on public.take2_testimonials for all to authenticated using (true) with check (true);

-- --------------------------------------------------------------- gallery
-- For before/after photographs once there are any. Files live in the
-- storage bucket "gallery"; this table holds the captions and the ordering.
create table if not exists public.take2_gallery (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  service     text,
  area        text,
  caption     text,
  alt_text    text not null,
  before_path text,
  after_path  text not null,
  published   boolean not null default false,
  sort_order  int not null default 100
);

alter table public.take2_gallery enable row level security;

drop policy if exists "anyone can read published gallery" on public.take2_gallery;
create policy "anyone can read published gallery"
  on public.take2_gallery for select to anon using (published = true);

drop policy if exists "authenticated manage gallery" on public.take2_gallery;
create policy "authenticated manage gallery"
  on public.take2_gallery for all to authenticated using (true) with check (true);

-- ------------------------------------------------------------------ note
-- Storage: create a PUBLIC bucket called "gallery" in the dashboard.
-- Notifications: add an edge function "notify-enquiry" and a database
-- webhook on insert to take2_enquiries, the same pattern as tcooper.
