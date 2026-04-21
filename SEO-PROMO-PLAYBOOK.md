# SEO + Promo Package Playbook

A reusable playbook for funneling organic traffic from a static site into a single **promo/packages** money page.

> **Context (this site):** static HTML site for a Malaysian gearbox repair brand. Money page = `https://www.onextransmission.com/ms/packages`. The same pattern applies to any site: replace the topic + money URL.

---

## 1. Promo Modal (sitewide CTA)

**Goal:** force a single, persistent path to the money page from every entry URL without hurting bounce rate.

**Files involved:**
- `script.js` → IIFE that injects modal HTML, handles open/close, fires analytics
- `styles.css` → `.onex-modal-backdrop` / `.onex-modal` rules (lines ~3518–3829 here)
- Each entry HTML (`index.html`, brand pages, etc.) → just include `<script src="script.js" defer></script>`

**Behavior rules (important — these are what make it not annoying):**
- Delay open by ~3000ms after page load (let user read first)
- Save dismissal in `localStorage` with a 3-day cooldown key (e.g. `onex_promo_dismissed`)
- Single CTA button → opens money page in a new tab (`target="_blank" rel="noopener"`)
- Fire analytics on CTA click: Meta Pixel `fbq('track','InitiateCheckout')` + GTM custom event (`promo_modal_cta_click`)
- Respect `prefers-reduced-motion`

**Responsive:**
- Desktop ≥769px: centered card, 2-col grid (image left, copy right), max-width ~780px
- Tablet/mobile: single column, max-width 360px
- ≤480px: full-width bottom sheet that slides up (`align-items: flex-end`), max-height 85vh

**Replication checklist:**
1. Copy the IIFE block from `script.js` (search for `onex-modal-backdrop`)
2. Copy the modal CSS block from `styles.css`
3. Swap the hero image, headline, subheadline, CTA label, and money URL
4. Rename the localStorage key so it doesn't collide with other sites
5. Update Pixel ID + GTM container ID

---

## 2. Blog Strategy (topical SEO that links back to the money page)

**Goal:** rank for long-tail buyer-intent queries in the local language, then route that traffic to the money page.

**Topic mix (apply to any niche):**
- **Price queries** — "harga X", "berapa kos Y", "X vs Y harga" (high commercial intent)
- **Symptom / problem queries** — "tanda X rosak", "masalah X", "kenapa X..." (mid-funnel)
- **How-to / maintenance** — "cara jaga X", "bila tukar X" (top-funnel + trust building)
- **Comparison** — "X vs Y", "perbezaan A dan B" (decision stage)
- **Brand/model specific** — "X untuk [brand]", "[brand] [problem]" (captures branded long-tail)

**Per-post structure that worked:**
1. **H1** matches the search query exactly (in target language, e.g. Bahasa Malaysia)
2. **Hero image** — topically relevant photo (not a stock office/laptop shot). Use 1 unique image per post.
3. **Meta:** `<title>`, `meta description`, `og:image`, `og:title`, canonical
4. **JSON-LD** `BlogPosting` schema with `image`, `datePublished`, `author`, `publisher`
5. **Body:** intro → comparison/price table → bulletted symptoms or steps → FAQ section → CTA
6. **Tables** — must have visible borders (`border-collapse: collapse; border: 1px solid #ddd` on cells). Bare tables look broken on mobile.
7. **No emojis** — they hurt perceived professionalism and sometimes break SERP snippets. Only typographic ✓ / ✗ are OK.
8. **Inline CTA links** scattered in the body (see section 3)
9. **Bottom CTA card/button** linking to money page

**Central index file:**
- Keep a single JSON (`blog/blog-data.json`) listing every post: `{slug, title, excerpt, image, date, category}`
- The blog index page renders cards from this JSON
- Whenever you add/update a post HTML, update the JSON entry too (slug, image URL must match)

**Sitemap:** add every new post URL to `sitemap.xml` with `<lastmod>` so Google re-crawls.

---

## 3. Inline Hyperlinks to the Money Page

**Goal:** every blog post has multiple natural in-context links to the money page — not just one CTA box at the bottom. Internal linking with commercial anchor text is a strong signal.

**Rules:**
- **Minimum 2 links per post:** ≥1 inline within prose + 1 final CTA button/card
- **High-traffic posts:** 3–4 links (intro paragraph + mid-article + comparison table + bottom CTA)
- **Anchor text varies** — don't use the same phrase every time. Mix: "tengok pakej kami", "lihat harga pakej servis", "dapatkan sebut harga", "bandingkan pakej di sini", etc. Anchor text diversity matters.
- **Anchor text is descriptive**, not "click here". Include keywords related to the money page topic.
- **Style consistently** so they're visually obvious as links:
  ```html
  <a href="MONEY_URL"
     style="color:#00A86B; font-weight:600; text-decoration:underline;"
     target="_blank" rel="noopener">anchor text</a>
  ```
- Replace older "panel box" CTAs in mid-article with these inline links — they convert better and read naturally
- Keep the bottom CTA card (button styling) — it catches readers who scrolled past

**Where to place inline links inside a post:**
1. **Intro paragraph** (within the first 100 words) — captures skimmers
2. **After the price/comparison table** — natural "see our package" moment
3. **Inside the FAQ answer** for a price/booking question
4. **Bottom CTA** — large button card

---

## Quick Replication Checklist (for a new site)

- [ ] Decide the **single money URL** (one canonical destination)
- [ ] Port `script.js` modal IIFE + `styles.css` modal block; rename localStorage key
- [ ] Set up `blog/` folder + `blog-data.json` + index page
- [ ] Plan 8–12 posts across the 5 topic types (price / problem / how-to / comparison / brand)
- [ ] For each post: unique relevant hero image, JSON-LD, bordered tables, no emojis, ≥2 inline links to money URL with varied anchor text
- [ ] Update `sitemap.xml` and `robots.txt`
- [ ] Add Pixel + GTM events on modal CTA and on inline link clicks (optional but useful)
- [ ] Test mobile modal as bottom sheet, test all images return HTTP 200, test no broken links to money URL

---

## Anti-Patterns to Avoid

- One sitewide CTA only at the bottom of posts → low CTR
- Same anchor text (e.g. "click here") across every link → dilutes SEO signal
- Stock photos that don't match the post topic → looks spammy/AI-generated
- Modal that opens immediately on load with no cooldown → kills bounce rate
- Reusing the same hero image across multiple posts → looks like content farm to Google
- Emojis in headlines → can break rich SERP snippets, looks unprofessional
- Tables without borders → reads as broken layout on mobile
