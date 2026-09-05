# RESTRA Blog — Supabase setup

The blog supports two content sources:

1. **Static seeds** — `src/lib/blog-content.ts` ships with a few English posts so the
   site always builds, even with no backend configured.
2. **Supabase** (optional, read-only at build time) — when the env vars below are set,
   blog posts are fetched from a `posts` table during `next build`/SSG. Static seeds are
   used only when Supabase is not configured or the fetch fails.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
```

Never use the service-role key in this app — the anon key with **read-only** policies
(`select` on `posts`, `select` on `storage.objects`) is enough.

## Table schema

Run this in the Supabase SQL editor (or apply it as a migration):

```sql
create table if not exists public.posts (
  slug          text primary key,
  title         text not null,
  description   text not null,
  category      text,
  author_name   text,
  published_at  timestamptz not null default now(),
  updated_at    timestamptz,
  read_minutes  int,
  tags          text[] default '{}',
  content       jsonb not null,   -- array of content blocks, see below
  image_url     text,             -- public storage URL or any https image
  video_url     text,             -- optional mp4 hosted on Supabase storage
  related_slugs text[] default '{}' -- slugs of other posts/features
);

alter table public.posts enable row level security;

create policy "public can read posts"
  on public.posts for select
  using (true);
```

### Content blocks (`content` jsonb)

Mirrors the `Block` union in `src/lib/blog-content.ts`:

```json
[
  { "type": "paragraph", "text": "…" },
  { "type": "heading", "text": "…", "level": 2 },
  { "type": "list", "items": ["…", "…"], "ordered": false },
  { "type": "quote", "text": "…" }
]
```

### SEO fields

`title` and `description` are used verbatim as the `<title>` (via the
`%s - RESTRA` template) and meta description. Blog posts also get a generated
`BlogPosting` + breadcrumb JSON-LD block, and `image_url` (when set) becomes the
Open Graph image. Supabase storage URLs look like:

```
https://<project-ref>.supabase.co/storage/v1/object/public/blog-images/my-post-cover.jpg
```

If you prefer a cleaner public URL, create a **public bucket** named `blog-images` and
paste the object URL straight into `image_url`. Public buckets are fine for marketing
images/videos; do not put anything sensitive in them.

### Related links

`related_slugs` is rendered as "Keep reading" cards. You may also point slugs at feature
pages (e.g. `/features/qr-ordering`) for internal linking — the router resolves
`/blog/<slug>` first and falls back to feature SEO pages, which are already crawlable.

## Verification

After configuring env vars, run:

```bash
npm run build
```

The build logs which source was used (seeds vs Supabase) when `NEXT_PUBLIC_SUPABASE_URL`
is present. If Supabase is unreachable the build falls back to seeds and prints a warning
rather than failing.
