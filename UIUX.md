# UI/UX & Brand Design Document
**Project:** SEO Proxy Hub (`specialistbmw.com`) for One X Transmission
**Date:** March 2026

## 1. Design Concept & Philosophy
The `specialistbmw.com` proxy hub is designed to bridge **One X Transmission’s specific brand identity** with the universal **BMW Corporate design aesthetic**. 
The goal is to instill immediate trust in BMW owners who respond strongly to clean, technical, and precise visual communication.

*   **BMW Aesthetic:** High contrast, abundant whitespace, sharply defined geometry, minimal distraction, typography-driven content.
*   **One X Transmission DNA:** Anchored by the distinctive Dark Red (`#AB2020`). Used sparingly but powerfully to draw the eye, define section hierarchies, and control the Call-to-Action (CTA) flow.

## 2. Colour System

We rely on a minimalist, highly disciplined palette.

*   **Main Accent (One X Red):** `#AB2020`
    *   *Usage:* Primary CTAs, active hover states, critical severity badges, left-border grouping for key insights (e.g., `dtc-box`). 
*   **Primary Background (White):** `#FFFFFF`
    *   *Usage:* Main article backgrounds, content cards.
*   **Secondary Background (Tech Gray):** `#F8F9FA`
    *   *Usage:* Trust badge sections, table alternating rows, secondary container backgrounds.
*   **Deep Contrast (Pitch Black):** `#000000`
    *   *Usage:* Global headers, hero sections, primary text, footers. Commands authority and mimics the BMW dark-mode instrument clusters.
*   **Text/Readability:** `#1A1A2E` (Main copy), `#555555` (Subtext)
*   **Borders/Dividers:** `#E0E0E0`

## 3. Typography

BMW’s layout relies heavily on robust, modern, sans-serif typography.

*   **Primary Font:** **Satoshi** (Imported via Fontshare). Web-safe fallbacks: `-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif`.
*   **Heading Structure:** High impact, bold (`font-weight: 700`), slightly reduced letter-spacing (`-0.02em`) to mimic engineering precision.
*   **Meta / Small text:** Uppercase, wide tracking (`letter-spacing: 0.05em`) used for breadcrumbs, trust badge labels, and dates.
*   **Data / Code:** Monospace styling for DTC codes to emphasize a diagnostic, data-driven approach.

## 4. CSS Modularity & Architecture

The raw stylesheet has been refactored into a highly modular, maintainable structure matching modern frontend workflows. The central `style.css` acts only as an orchestrator importing the following under `site/css/`:

1.  **`variables.css`**: The core source of truth containing all design tokens (Colors, Typography, Spacing, Radii).
2.  **`reset.css`**: Baseline cross-browser normalization.
3.  **`typography.css`**: Global typography scales, margins for text elements, and link behaviours.
4.  **`layout.css`**: Macro-level structural components: Global Headers, Footers, Containers, Hero sections, and Breadcrumbs.
5.  **`components.css`**: Micro-level reusable UI patterns: 
    *   `.dtc-box` (Diagnostic highlights)
    *   `.cta-box` (Call/WhatsApp conversion blocks)
    *   `.threshold-table` (Engineering/data display)
    *   `.service-card` / `.hub-card` (Grid items layout)
    *   `.trust-badges` (Social proof displays)

## 5. UI Components & Shapes

*   **Radii (Border-Radius):** Kept tight (`2px` to `4px`) and never overly rounded. This replicates the sharp, sculpted lines of automotive design rather than soft consumer tech.
*   **Cards & Hover States:** Flat structural aesthetics without heavy drop-shadows. On hover, elements shift upwards slightly `translateY(-2px)` and gain a subtle border color shift to One X Red (`#AB2020`).
*   **Buttons (CTAs):** 
    *   *Primary Form Action:* Pitch black (`#000000`) turning to Dark Red (`#AB2020`) on hover.
    *   *Emergency/Direct Call:* Solid Dark Red by default.
*   **Diagnostic Tables:** Built akin to an engineering manual—solid black headers with stark white text, stripped-down borders, and subtle zebra-striping to guide the eye across complex data correlation parameters.

## 6. UX Strategy & Trust Signals

1.  **Immediate Resolution Path:** Users arriving with a broken car want immediate answers. The `cta-box` with direct "WhatsApp" and "Call" links are clearly defined as standalone colored blocks distinct from the article text.
2.  **Diagnostic Authority:** Severity badges (Critical, Warning, Info) mimic dashboard notification systems.
3.  **Cross-Linking (SEO UX):** internal links utilize clear, arrow-driven list items (`→`) to drive deeper engagement from the diagnostic blogs to the localized service landing pages.