# Technical SEO Rulebook — One X Transmision BMW

> **Scope:** Every blog post, landing page, and content asset produced for the One X Transmision BMW SEO hub MUST comply with ALL rules below. No exceptions.
>
> **Target Geo:** Klang Valley — Klang, Shah Alam, Banting (Malaysia)
> **Target Niche:** BMW gearbox/transmission specialist workshop
> **Content Pillars:** BMW diagnostic problems, gearbox expertise, trusted workshop authority

---

## 1. Site Speed & Performance

### Rules for Every Page/Post

| Rule | Requirement |
|---|---|
| **Image format** | Use WebP as primary format; AVIF where supported. Never serve uncompressed PNG/BMP. JPEG fallback only via `<picture>` element. |
| **Image sizing** | All images must be served at exact display dimensions. No oversized source files. Maximum width: 1200px for hero, 800px for inline. |
| **Image compression** | Target < 80 KB per inline image, < 150 KB per hero image. Use lossy compression at quality 75-85. |
| **Lazy loading** | All images below the fold MUST use `loading="lazy"` and `decoding="async"`. First viewport image must NOT be lazy-loaded. |
| **CSS** | Critical CSS inlined in `<head>` (< 14 KB). All non-critical CSS loaded asynchronously via `media="print" onload="this.media='all'"` or equivalent. |
| **JavaScript** | All non-essential JS deferred with `defer` or `async`. No render-blocking scripts. Bundle size target < 100 KB gzipped. |
| **HTTP requests** | Target < 30 total requests per page. Combine CSS files. Use CSS sprites or inline SVG for icons. |
| **Browser caching** | Set `Cache-Control: max-age=31536000` for static assets (images, CSS, JS, fonts). HTML pages: `max-age=3600`. |
| **CDN** | All static assets served via CDN with edge locations in Southeast Asia. |
| **Server response** | TTFB target < 200ms. Use server-side caching (Redis/Varnish). Enable Gzip/Brotli compression. |
| **Core Web Vitals** | LCP < 2.5s · FID/INP < 100ms · CLS < 0.1 — These are hard targets, not suggestions. |
| **Fonts** | Use `font-display: swap`. Preload primary font file. Limit to 2 font families max. Self-host fonts (no Google Fonts CDN calls). |

---

## 2. Mobile Optimisation

### Rules for Every Page/Post

- **Responsive design** is mandatory. All layouts must use CSS Grid or Flexbox. No fixed-width containers.
- **Viewport meta** tag required: `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- **Minimum tap target size:** 48×48 px with 8px spacing between adjacent targets.
- **Font sizes:** Minimum 16px base font. No text requiring pinch-to-zoom. Line height ≥ 1.5.
- **No Flash.** No Silverlight. No Java applets. Ever.
- **No intrusive interstitials** on mobile. Sticky banners must occupy < 30% of viewport. No full-screen popups on page load.
- **Forms:** Use appropriate `inputmode` and `type` attributes (e.g., `type="tel"` for phone fields).
- **Images:** Must scale correctly on all viewports. Use `max-width: 100%; height: auto;`.
- **Tables:** Must be horizontally scrollable or reformatted as stacked cards on mobile.

---

## 3. Crawlability

### Rules for Every Page/Post

- **XML Sitemap:** Every published page MUST be included in `sitemap.xml` within 24 hours of publication.
- **robots.txt:** Must allow crawling of all public content. Block only admin, staging, and duplicate filter URLs.
- **URL structure rules:**
  - Lowercase only
  - Hyphens as separators (no underscores, no spaces)
  - Max 3 directory levels deep: `domain.com/category/subcategory/slug`
  - No session IDs, tracking parameters, or query strings in canonical URLs
  - Max URL length: 75 characters (path portion)
- **Broken links:** Zero tolerance. Run automated checks weekly. Fix within 48 hours of detection.
- **Crawl budget:** No orphan pages. Every page reachable within 3 clicks from homepage.
- **Internal linking:** Every blog post must link to ≥ 3 other internal pages. Every landing page must link to ≥ 5 related blog posts.
- **Pagination:** Use `rel="next"` and `rel="prev"` where applicable. Paginated pages must have self-referencing canonicals.

---

## 4. HTTPS & Security

### Rules for the Entire Site

- **HTTPS everywhere.** No mixed content. All resources (images, scripts, styles, iframes) loaded over HTTPS.
- **SSL certificate:** Must be valid, not expired, and issued by a trusted CA. Auto-renewal configured.
- **HSTS header:** `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`.
- **HTTP → HTTPS redirect:** All HTTP URLs must 301 redirect to HTTPS equivalents.
- **Security headers required:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy` — configured appropriately
- **CMS/plugins:** Keep all software updated within 7 days of security patches.
- **Admin access:** Strong passwords (16+ chars), 2FA enabled, non-default admin URLs.

---

## 5. Mobile-First Indexing

### Rules for Every Page/Post

- **Content parity:** Mobile version must contain 100% of the content present on desktop. No hiding content behind tabs/accordions that Google cannot see.
- **Structured data:** Must be present on mobile version, not just desktop.
- **Meta tags:** `title`, `meta description`, `robots` — identical on mobile and desktop.
- **Images & videos:** Same assets served on mobile (can be responsive/smaller, but must exist).
- **Internal links:** Mobile version must have the same internal linking structure as desktop.
- **Lazy-loaded content:** Must be accessible to Googlebot. Use Intersection Observer, not scroll-event triggers that bots can't fire.
- **Test with:** Google's Mobile-Friendly Test and URL Inspection Tool before every publish.

---

## 6. Schema Markup (Structured Data)

### Required Schema Per Content Type

| Content Type | Required Schema |
|---|---|
| **Blog Post** | `Article` or `BlogPosting` with `headline`, `author`, `datePublished`, `dateModified`, `image`, `publisher` |
| **Landing Page** | `LocalBusiness` + `AutoRepair` with `name`, `address`, `geo`, `telephone`, `openingHours`, `areaServed`, `priceRange` |
| **FAQ Section** | `FAQPage` with `Question` + `acceptedAnswer` pairs |
| **How-To Content** | `HowTo` with `step`, `tool`, `supply` where applicable |
| **Breadcrumbs** | `BreadcrumbList` on every page |
| **Service Pages** | `Service` with `serviceType`, `provider`, `areaServed` |

### Schema Rules

- Use **JSON-LD** format only. No Microdata, no RDFa.
- Place in `<head>` or end of `<body>`.
- Validate with Google Rich Results Test before publishing — zero errors, zero warnings.
- `areaServed` must always include: `Klang`, `Shah Alam`, `Banting`, `Klang Valley`.
- `AutoRepair` schema must specify BMW as the vehicle brand serviced.
- Every schema must include `url` pointing to the canonical URL.

---

## 7. Canonicalization

### Rules for Every Page/Post

- **Every page** must have a self-referencing `<link rel="canonical" href="...">` tag.
- Canonical URL must:
  - Use HTTPS
  - Use the preferred domain (www or non-www — pick one, enforce globally)
  - Exclude query parameters, trailing slashes (unless defined as standard)
  - Match the URL in the XML sitemap exactly
- **Duplicate content prevention:**
  - Parameter-based duplicates: canonical to the clean URL
  - Print pages: canonical to the main page
  - AMP pages: canonical to the main page with `rel="amphtml"` on the main page
- **Cross-domain:** If content is syndicated, the canonical must point back to the original on our domain.

---

## 8. 404 Error Handling

### Rules for the Entire Site

- **Custom 404 page** required with:
  - Clear message: "Page not found"
  - Search bar
  - Links to: Homepage, Blog Hub, Top 5 most-visited pages, Contact page
  - Consistent site header/footer navigation
  - No `200` status code on 404 pages (soft 404 = critical SEO bug)
- **404 monitoring:** Automated weekly scan. New 404s triaged within 48 hours.
- **High-value 404s** (pages with backlinks or historical traffic) → 301 redirect to most relevant existing page.

---

## 9. HTML Markup Standards

### Rules for Every Page/Post

#### Heading Hierarchy
- **One `<h1>` per page.** No exceptions. Must contain the primary target keyword.
- Headings follow strict hierarchy: `<h1>` → `<h2>` → `<h3>` → `<h4>`. No skipping levels.
- Every `<h2>` should target a secondary keyword or semantic variation.
- Use `<h2>` for major sections, `<h3>` for subsections within those.

#### Title Tag
- Format: `{Primary Keyword} — {Secondary Keyword} | One X Transmision BMW`
- Length: 50–60 characters (absolute max 65).
- Must include geo-modifier (`Klang`, `Shah Alam`, or `Klang Valley`) where naturally possible.
- Must be unique across the entire site. No two pages share a title tag.

#### Meta Description
- Length: 140–155 characters.
- Must include: primary keyword + geo-modifier + call-to-action.
- Must be unique per page.
- Written to maximise CTR — use power words, numbers, or questions.

#### Image ALT Attributes
- **Every `<img>` must have a descriptive `alt` attribute.** No empty alts except for purely decorative images (which should use `alt=""` and `role="presentation"`).
- ALT text must describe the image content AND include relevant keywords naturally.
- Format: `"BMW [model] [component] [action/state] at One X Transmision workshop"` where applicable.
- Max ALT text length: 125 characters.

#### Semantic HTML
- Use `<article>` for blog posts.
- Use `<section>` for distinct content sections.
- Use `<nav>` for navigation blocks.
- Use `<aside>` for sidebar/related content.
- Use `<figure>` + `<figcaption>` for images with captions.
- Use `<time datetime="...">` for all dates.
- **No inline CSS.** All styles in external or `<style>` blocks.
- **No inline JavaScript.** All scripts in external files or `<script>` blocks at end of body.
- Use `<strong>` for semantic emphasis (not `<b>`), `<em>` for emphasis (not `<i>`).

---

## 10. Mobile Page Speed

### Hard Targets for Mobile

| Metric | Target | Max Acceptable |
|---|---|---|
| **LCP** | < 2.0s | 2.5s |
| **FID / INP** | < 75ms | 100ms |
| **CLS** | < 0.05 | 0.1 |
| **Total Page Weight** | < 500 KB | 800 KB |
| **Time to Interactive** | < 3.0s | 4.0s |
| **Speed Index** | < 3.0s | 4.5s |

### Mobile-Specific Optimisations

- Serve appropriately sized images via `srcset` and `sizes` attributes.
- Defer all third-party scripts (analytics, chat widgets, ads).
- Minimise DOM size: target < 1,500 elements per page.
- Avoid large layout shifts from dynamically injected content (ads, embeds).
- Preconnect to required origins: `<link rel="preconnect" href="...">`.

---

## 11. Website Structure & Navigation

### Information Architecture Rules

```
Homepage
├── /blog/                          (Blog Hub — pillar page)
│   ├── /blog/bmw-diagnosis/        (Diagnostic content cluster)
│   ├── /blog/gearbox-problems/     (Gearbox content cluster)
│   ├── /blog/workshop-tips/        (Workshop authority cluster)
│   └── /blog/{individual-posts}/
├── /services/                      (Service landing pages — SEM)
│   ├── /services/bmw-gearbox-repair-klang/
│   ├── /services/bmw-transmission-specialist-shah-alam/
│   ├── /services/bmw-diagnostics-banting/
│   └── /services/bmw-engine-repair-klang-valley/
├── /about/
├── /contact/
└── /faq/
```

### Navigation Rules

- **Primary nav:** Max 7 items. Must include: Home, Services, Blog, About, Contact.
- **Breadcrumbs:** Required on every page except homepage. Use `BreadcrumbList` schema.
- **Footer links:** Include links to all service landing pages, key blog categories, contact info.
- **Internal linking density:** Minimum 3 internal links per 1,000 words of content.
- **Anchor text:** Descriptive and keyword-relevant. No "click here" or "read more" as sole anchor text.
- **Hub-and-spoke model:** Blog hub page links to all posts. All posts link back to hub and to ≥ 2 sibling posts.

---

## 12. 404 Errors & Redirects

### Redirect Rules

| Scenario | Redirect Type |
|---|---|
| Page permanently moved/renamed | **301** (Permanent) |
| Old URL structure migrated | **301** |
| Temporary maintenance | **302** (Temporary) |
| A/B testing alternate URL | **302** |
| HTTP → HTTPS | **301** |
| www ↔ non-www | **301** |

### Redirect Chain Rules

- **Max redirect chain length: 1 hop.** No chains. A → B only, never A → B → C.
- **No redirect loops.** Automated testing required.
- **Redirect maps** must be maintained in a central document and updated with every URL change.
- **Deleted content with backlinks:** Always 301 to the most topically relevant replacement page, never to homepage (unless no alternative exists).

---

## 13. Canonical URLs for Pagination

### Pagination Rules

- Paginated pages (`/blog/page/2/`, `/blog/page/3/`) must have **self-referencing canonicals** (each page canonicals to itself).
- Use `rel="prev"` and `rel="next"` in `<head>`:
  ```html
  <link rel="prev" href="/blog/page/1/">
  <link rel="next" href="/blog/page/3/">
  ```
- First page: no `rel="prev"`. Last page: no `rel="next"`.
- All paginated pages must be in the XML sitemap.
- **Alternative:** If using infinite scroll or load-more, ensure all content is accessible via static paginated URLs for Googlebot.

---

## 14. XML Sitemap

### Sitemap Rules

- **Location:** `domain.com/sitemap.xml` — referenced in `robots.txt`.
- **Max URLs per sitemap:** 50,000 (use sitemap index if exceeding).
- **Included:** All canonical, indexable, 200-status pages. Blog posts, landing pages, category pages.
- **Excluded:** 404 pages, redirected URLs, noindex pages, parameter URLs, admin pages.
- **`<lastmod>`:** Must reflect actual last content modification date. Do not auto-update lastmod without content changes.
- **Auto-generation:** Sitemap must auto-update when content is published, updated, or deleted.
- **Submission:** Submit to Google Search Console and Bing Webmaster Tools.
- **Validation:** Validate sitemap XML structure monthly.

---

## 15. Structured Data Enhancement — Rich Snippet Targets

### Priority Rich Snippets to Target

| Snippet Type | Implementation | Target Pages |
|---|---|---|
| **FAQ Rich Result** | `FAQPage` schema on every blog post with ≥ 3 FAQs | All blog posts |
| **HowTo Rich Result** | `HowTo` schema on diagnostic/repair content | Diagnostic blogs |
| **Local Business** | `AutoRepair` + `LocalBusiness` | Landing pages, Contact, About |
| **Breadcrumb** | `BreadcrumbList` | All pages |
| **Article** | `BlogPosting` with full metadata | All blog posts |
| **Review/Rating** | `AggregateRating` (only if real reviews collected) | Landing pages |
| **Video** | `VideoObject` if video content exists | Posts with embedded video |
| **Sitelinks Searchbox** | `WebSite` + `SearchAction` | Homepage |

### Enhancement Rules

- Combine multiple schema types on a single page where applicable (e.g., `BlogPosting` + `FAQPage` + `BreadcrumbList`).
- Never fabricate review data. `AggregateRating` must reference real, verifiable customer reviews.
- Test every page with Google Rich Results Test before publishing.
- Monitor Search Console for structured data errors weekly.

---

## 16. Preferred Domain & URL Configuration

### Domain Rules

- **Pick one:** Either `www.domain.com` OR `domain.com`. Apply globally.
- **301 redirect** all non-preferred variants to the preferred domain.
- All internal links, sitemaps, canonicals, and hreflang tags must use the preferred domain.
- Set preferred domain in Google Search Console.
- **Trailing slash:** Pick one convention (with or without). Enforce via 301 redirect. Recommend: no trailing slash.
- Verify with: `curl -I http://domain.com`, `curl -I http://www.domain.com`, `curl -I https://domain.com`, `curl -I https://www.domain.com` — all must resolve to the single preferred URL.

---

## 17. Hreflang Implementation

### Rules (If Multi-Language/Regional Targeting Needed)

- **Current scope:** Single language (English) targeting Malaysia.
- If Malay (`ms-MY`) version is added later:
  ```html
  <link rel="alternate" hreflang="en-MY" href="https://domain.com/page/">
  <link rel="alternate" hreflang="ms-MY" href="https://domain.com/ms/page/">
  <link rel="alternate" hreflang="x-default" href="https://domain.com/page/">
  ```
- Every page with hreflang must include a self-referencing hreflang tag.
- Hreflang must be reciprocal (if A points to B, B must point to A).
- Use ISO 639-1 language codes and ISO 3166-1 Alpha-2 country codes.

---

## 18. SSL Certificate Validation

### SSL Checklist (Verify Monthly)

- [ ] Certificate not expired (check expiry date)
- [ ] Certificate covers all subdomains in use (wildcard or SAN)
- [ ] No mixed content warnings on any page
- [ ] Certificate chain is complete (intermediate certificates installed)
- [ ] TLS 1.2+ only (disable TLS 1.0, 1.1, SSL 3.0)
- [ ] OCSP stapling enabled
- [ ] Certificate issued by trusted CA (Let's Encrypt, DigiCert, etc.)
- [ ] HSTS header active with long max-age
- [ ] No SSL errors in Google Search Console

---

## 19. Mobile Friendliness Compliance

### Mobile UX Rules

- **No horizontal scrolling** on any mobile viewport (320px–428px width).
- **No unplayable content** — all media must work on iOS Safari and Chrome Android.
- **Text readable without zoom** — 16px minimum body text.
- **Links not too close together** — 48px minimum tap target with 8px gap.
- **Content not wider than screen** — no elements with `width` > 100vw.
- **No viewport-locked elements** that prevent scrolling.
- **Forms work on mobile** — appropriate input types, autocomplete attributes, large enough fields.
- **Test on real devices** — not just Chrome DevTools. Test on: iPhone SE (small), iPhone 14 (standard), Samsung Galaxy A-series (popular in Malaysia).

---

## 20. SEO Growth Strategy Rules

### Content-Driven Growth Rules

- **Content velocity:** Minimum 2 blog posts per week during Phase 1.
- **Keyword clustering:** Every blog post targets 1 primary keyword + 3–5 secondary/LSI keywords.
- **Search intent match:** Every page must clearly match one intent type:
  - **Informational** → Blog posts (BMW diagnosis, common problems)
  - **Commercial investigation** → Comparison/review content
  - **Transactional** → Landing pages (service pages for SEM)
  - **Navigational** → Brand pages (About, Contact)
- **Content freshness:** Update top-performing posts every 90 days with new data, expanded sections, or refreshed dates.
- **Featured snippet targeting:** Use question-based H2s, concise 40–60 word answer paragraphs, numbered/bulleted lists, and comparison tables.
- **Topic authority:** Build complete topical coverage — exhaust all sub-topics within BMW diagnostics and gearbox repair before expanding to adjacent topics.

### Local SEO Rules (CRITICAL for Klang Valley)

- **Google Business Profile:** Fully optimised with:
  - Correct NAP (Name, Address, Phone) — must match website exactly
  - Primary category: `Auto Transmission Shop` or `Auto Repair Shop`
  - Secondary categories: `BMW Dealer/Repair`, `Gearbox Shop`
  - Service areas: Klang, Shah Alam, Banting
  - Posts published weekly
  - Q&A populated with ≥ 10 pre-seeded questions
  - Photos updated monthly (workshop, team, work-in-progress, completed jobs)
- **NAP consistency:** Identical Name, Address, Phone across: website footer, GBP, all directory listings, schema markup.
- **Local keywords in content:** Every blog post must naturally include at least one mention of target geo (Klang/Shah Alam/Banting/Klang Valley).
- **Local landing pages:** One landing page per target area with unique content (not just city-name swapped).
- **Local backlinks:** Target backlinks from Malaysian automotive forums, directories, local news, and partner businesses.
- **Reviews strategy:** Actively solicit Google reviews. Respond to every review within 48 hours.

### BMW-Specific Content Strategy

- Leverage DTC codes from `dtc.json` for diagnostic blog topics — each common DTC = potential blog post.
- Use `parameter_correlations.json` to create inter-linked content about related symptoms.
- Use `analyzer_rules_v2.json` to build diagnostic flowchart content.
- Reference specific BMW models popular in Malaysia: E90/E46 3-Series, F10/E60 5-Series, E70 X5, F30 3-Series.
- Keywords must include model-specific variants: "BMW E90 gearbox problem Klang", "BMW F10 transmission repair Shah Alam".

---

## Content Publishing Checklist

> **Every piece of content must pass ALL items before publishing.**

### Pre-Publish

- [ ] Title tag: 50–60 chars, includes primary keyword + geo
- [ ] Meta description: 140–155 chars, includes primary keyword + CTA + geo
- [ ] URL slug: lowercase, hyphenated, ≤ 75 chars, contains primary keyword
- [ ] H1: single, contains primary keyword
- [ ] H2s: target secondary keywords, logical hierarchy
- [ ] Images: WebP format, compressed, descriptive ALT text, lazy-loaded (except hero)
- [ ] Internal links: ≥ 3 links to related content
- [ ] External links: 1–2 links to authoritative sources (open in new tab)
- [ ] Schema markup: appropriate type(s), validated with Rich Results Test
- [ ] Canonical tag: self-referencing, correct URL
- [ ] Mobile preview: content renders correctly, no horizontal scroll
- [ ] Page speed: LCP < 2.5s on mobile
- [ ] Local keyword: geo-modifier present naturally in content
- [ ] FAQ section: ≥ 3 questions with `FAQPage` schema
- [ ] CTA: clear call-to-action (WhatsApp, call, visit)
- [ ] Word count: minimum 1,500 words for blog posts, 800 words for landing pages

### Post-Publish

- [ ] Page indexed within 48 hours (Request Indexing via Search Console if needed)
- [ ] Added to XML sitemap
- [ ] Shared on social channels
- [ ] Internal links added FROM existing content TO new page
- [ ] No 404s or broken links on the page
- [ ] Schema validated in Search Console (24–48 hours post-publish)

---

## Technical SEO Monitoring Schedule

| Task | Frequency | Tool |
|---|---|---|
| Core Web Vitals check | Weekly | PageSpeed Insights / Search Console |
| Broken link scan | Weekly | Screaming Frog / Ahrefs |
| Index coverage review | Weekly | Google Search Console |
| Schema validation | Per publish + Weekly review | Rich Results Test / Search Console |
| Mobile friendliness | Per publish | Google Mobile-Friendly Test |
| SSL certificate check | Monthly | SSL Labs / Qualys |
| Sitemap validation | Monthly | Search Console / XML validator |
| Redirect chain audit | Monthly | Screaming Frog |
| Page speed regression | Monthly | Lighthouse CI |
| Keyword ranking tracking | Weekly | Ahrefs / SEMrush |
| GBP audit | Monthly | Google Business Profile |
| Competitor monitoring | Monthly | Ahrefs / SEMrush |

---

*This document is the single source of truth for technical SEO compliance. Non-compliant content will not be published.*
