# RESTRA website — run doc

Next.js 15 (App Router) + Tailwind CSS v4 + Turbopack marketing site.

## 1. Reproduce artifacts

A fresh checkout needs:

1. **Install dependencies** (npm is the package manager — `package-lock.json` is committed):
   ```bash
   npm install
   ```
2. **Environment variables** — copy `.env.example` to `.env.local` from the main checkout if one exists there. All vars are optional:
   - `NEXT_PUBLIC_SITE_URL` — canonical site URL (only affects metadata/SEO tags)
   - `NEXT_PUBLIC_VLY_*` — optional error monitoring
   - `NEXT_PUBLIC_SUPABASE_*` — optional; when empty, blog posts serve from the static TypeScript seeds in `src/lib/blog-content` (fine for preview)

## 2. Run the server

```bash
npm run dev -- -p 3001
```

- Default dev port is **3000**; use **3001** when 3000 is occupied (it commonly is on this machine — check with `netstat -ano | findstr :3000`).
- Turbopack is enabled by default via the `dev` script. A benign warning about "Webpack configured while Turbopack is not" may appear in stderr — harmless for dev.
- Production build (not needed for preview): `npm run build && npm start -- -p 3001`.

For a detached/background start on Windows:

```powershell
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev','--','-p','3001' -RedirectStandardOutput '<log>' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru).Id"
```

(stdout and stderr must point at different files; confirm with `Get-Process -Id <pid>`.)
