# The Soul Flys — Website

Static band site for [theSoulFlys.com](https://thesoulflys.com). Built with [Astro](https://astro.build) and meant to deploy free on **Cloudflare Pages**.

## Pages

| Path | Content |
|------|---------|
| `/` | Home — hero, journey, award, CTAs |
| `/about` | Band story + member bios |
| `/gallery` | Photos + embedded videos |
| `/shows` | Embedded Google Calendar |
| `/contact` | Booking phone + social links |

## Local development

Requires Node.js 20+ (LTS recommended).

```bash
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

```bash
npm run build    # output in dist/
npm run preview  # preview the production build
```

## Easy updates (no redesign needed)

### Show schedule (Google Calendar)

1. In Google Calendar, create or open the band calendar.
2. Make it public (or use a public embed).
3. **Settings → Integrate calendar → Embed code** — copy the iframe `src` URL.
4. Paste it into [`src/data/calendar.ts`](src/data/calendar.ts) as `embedUrl`.
5. Set `isPlaceholder: false`.
6. Redeploy (or push to GitHub if Cloudflare is connected).

Add and edit shows in Google Calendar; the site updates automatically.

### Gallery

Edit [`src/data/gallery.ts`](src/data/gallery.ts):

- **Images:** put files in `public/gallery/`, then add `{ type: 'image', src: '/gallery/your-photo.jpg', alt: '...' }`.
- **Videos:** add `{ type: 'video', provider: 'youtube', id: 'YOUTUBE_ID', title: '...' }` (or `vimeo`).

### Band copy / bios / phone

Edit [`src/data/band.ts`](src/data/band.ts).

### Hero photo

Replace `public/images/hero-placeholder.svg` with a real photo (e.g. `hero.jpg`) and update the path in `src/pages/index.astro`.

## Deploy to Cloudflare Pages (free)

1. Push this repo to GitHub (or GitLab).
2. Log in at [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → connect the repo.
3. Build settings:
   - **Framework preset:** Astro (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. You’ll get a `*.pages.dev` URL.

### Visit logging (band validation)

Page visits are logged once per HTML navigation:

- Pages: [`functions/_middleware.js`](functions/_middleware.js) + [`public/_routes.json`](public/_routes.json) so Functions only run on real pages (not `/_astro`, images, etc.)
- Workers: [`worker/index.js`](worker/index.js) with `run_worker_first` limited to the same page paths in `wrangler.toml`

Each `site_visit` log includes path, `X-User`, Access email (when Access is on), country, and user-agent.

After deploy, open the project in Cloudflare → **Observability** / **Logs** and ask a member to open the site — you should see one `site_visit` line per page they open.

Local production-style check:

```bash
npm run build
npx wrangler dev
```

### Attach theSoulFlys.com

1. In the Pages project → **Custom domains** → add `thesoulflys.com` and `www.thesoulflys.com`.
2. Follow Cloudflare’s DNS instructions at your domain registrar (often Wix Domains if the domain was bought with Wix).
3. Keep the Wix site live until DNS finishes propagating, then cancel Wix hosting.
4. You keep paying only for the domain (~$10–15/year), not Wix site hosting.

## Cost summary

| Item | Typical cost |
|------|----------------|
| Cloudflare Pages hosting | $0 |
| SSL | $0 (included) |
| Domain `theSoulFlys.com` | ~$10–15 / year |
| Google Calendar | $0 |
| YouTube embeds | $0 |

## Stack notes

- `output: 'static'` in `astro.config.mjs` — no server required.
- Design tokens live in `src/styles/global.css` (dark stage + amber accent).
