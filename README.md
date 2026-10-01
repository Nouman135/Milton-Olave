# Milton Olave Website

Next.js port of [miltonolave.com](https://www.miltonolave.com/), previously built in Webflow. Every page, colour,
CTA and interaction of the original was carried over; the site no longer depends on Webflow hosting, its CDN or
its JavaScript runtime.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Static pages; one route handler (`/api/lead`) for form submissions
- The original Webflow stylesheet (`app/webflow.css`) plus a small `app/globals.css` that replaces the Webflow
  runtime: scroll-in reveals, navbar/dropdown transitions and the logo marquee
- Images self-hosted in `public/images` with the same responsive variants Webflow served

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy (Vercel)

1. Import the GitHub repository in Vercel; keep the Next.js defaults.
2. Add the environment variables below.
3. Deploy, then point the domain at the project.

## Environment variables

| Variable                  | Required          | Purpose                                                                                                                                                     |
| ------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`    | Yes               | Canonical URL for metadata, `sitemap.xml` and `robots.txt`. Must match the live domain.                                                                     |
| `GHL_WEBHOOK_URL`         | Before launch     | GoHighLevel inbound-webhook URL that receives the Contact form and the Pre-Order Questionnaire. Server-side only. Until set, the forms show their error state. |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Optional          | Meta Pixel ID. Defaults to the pixel installed on the original site; set empty to disable.                                                                   |

## Where things live

| What                                 | Where                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| Pages                                | `app/<route>/page.tsx` (one per original Webflow page)                                |
| Blog posts                           | `content/posts.ts`: title, summary, images, rich-text body and hand-picked related posts |
| Blog post template                   | `app/post/[slug]/page.tsx`                                                            |
| Navbar / footer                      | `components/Header.tsx`, `components/Footer.tsx`                                      |
| Contact + questionnaire forms        | `components/LeadForm.tsx` → `app/api/lead/route.ts` → GoHighLevel webhook             |
| Newsletter form (footer)             | GoHighLevel hosted form iframe, unchanged from the original                           |
| Scroll-in animations                 | `components/ScrollReveal.tsx` (elements tagged `data-anim` in the pages)              |
| Photo lightbox                       | `components/LightboxLink.tsx`                                                         |

### Adding a blog post

Add an entry to `content/posts.ts` (newest first). `body` is HTML; drop its images in `public/images/blog`.
The post appears on `/blog`, in the sitemap, and on any post that lists its slug under `related`.

## Differences from the Webflow site

- Form submissions go to a GoHighLevel webhook instead of Webflow's form inbox.
- Blog post pages use the article title as the page title (Webflow published them all as "Milton Website").
- The Pre-Order Questionnaire's duplicate field ids were made unique so each label focuses its own field.
- The message box's `0/300` counter is live.
- `sitemap.xml` and `robots.txt` are generated (the original site had none).
