# BMW Digital Design System — Verified from Production CSS

> **Source**: `bmw.co.uk` CDN — `clientlib-base.min.css` (55KB) + `clientlib-components.min.css` (1MB)  
> **CMS**: Adobe Experience Manager (AEM) — paths under `/etc.clientlibs/bmw-web/clientlibs/`  
> **Extracted**: All values verified from real minified production stylesheets. No training data assumptions.

---

## Typography

| Token | Value |
|---|---|
| **Font family** | `"bmwTypeNextWeb"`, fallbacks: `"Arial","Helvetica","Roboto",sans-serif` |
| **Icon font** | `"bmw_next_icons"` (weights 300, 400) |
| **Font files** | `BMWTypeNext-Light.woff2` (300), `-Regular` (400), `-Medium` (500), `-Bold` (700) |
| **Base font-size** | `1pc` (16px) |
| **Base font-weight** | `300` (light — intentionally thin) |
| **Base line-height** | `1.625rem` |
| **Base text color** | `#262626` (dark grey — NOT pure black) |
| **Antialiasing** | `-webkit-font-smoothing: antialiased` |
| **Text rendering** | `text-rendering: optimizeSpeed` |

### Font Weight System (CSS Custom Properties)

| Variable | Weight | Usage |
|---|---|---|
| `--default-font-weight` | `300` | Body text, headlines |
| `--input-font-weight` | `400` | Form inputs |
| `--clickable-font-weight` | `500` | Buttons, links, CTAs |
| `--link-font-weight` | `500` | Text links |
| `--price-font-weight` | `700` | Prices only |

### Responsive Typography Scale

| Token | Mobile (default) | 768px+ | 1024px+ | 1280px+ | 1920px+ |
|---|---|---|---|---|---|
| `--headline-1` | 2.0625rem (33px) | — | — | 2.6875rem (43px) | 3.75rem (60px) |
| `--headline-2` | 1.75rem (28px) | — | — | 2.1875rem (35px) | 2.6875rem (43px) |
| `--headline-3` | 1.4375rem (23px) | — | — | 1.75rem (28px) | 2.1875rem (35px) |
| `--body-1` | 1rem (16px) | — | — | 1.125rem (18px) | 1.1875rem (19px) |
| `--body-2` | .875rem (14px) | — | — | .875rem (14px) | 1rem (16px) |
| `--body-3` | .75rem (12px) | — | — | .75rem (12px) | .875rem (14px) |
| `--stage-model-1` | 7.4375rem (119px) | — | — | 11.625rem (186px) | **15.75rem (252px)** |

---

## Color Palette

| Color | Hex | Usage |
|---|---|---|
| Base text | `#262626` | Primary body text — NOT pure black |
| BMW Blue (primary) | `#1c69d4` | Links, focus rings, primary buttons |
| BMW Blue (hover) | `#0653b6` | Hover/active state on blue elements |
| BMW Blue (disabled) | `#bbd2f3` | Disabled primary buttons |
| White | `#ffffff` | Backgrounds, button text on dark |
| Light grey BG | `#f6f6f6` | Squared/pill buttons |
| Light grey hover | `#f2f2f2` | Squared button hover, disabled error button |
| Medium grey | `#bbb` | Disabled text, borders, separators |
| Dark grey text | `#666` | Secondary text, nav links, footnotes |
| Mid dark grey | `#4d4d4d` | NBA-dark button hover, light-bg text |
| Separator grey | `#e6e6e6` | Borders, dividers, scrollbar track |
| Mid grey disabled | `#8e8e8e` | Outline-on-image disabled state |
| Stage dark | `#000` | Hero/stage background |
| Success green | `#3db014` | Logged-in indicator dot |

---

## Button System (5 Variants)

All buttons share: `border-radius: 3px`, `min-height: 3.25rem`, `font-weight: var(--clickable-font-weight)` (500).

### Primary Button (`style-button--primary-button`)

```css
background-color: #1c69d4;
color: #fff;
/* hover */ background-color: #0653b6;
/* disabled */ background-color: #bbd2f3;
```

### NBA Dark (`style-button--nba-dark`)

```css
background-color: #262626;
color: #fff;
/* hover */ background-color: #4d4d4d;
/* disabled */ background-color: #bbb;
```

### Outline Dark (`style-button--outline-dark`)

```css
background-color: transparent;
color: #262626;
box-shadow: inset 0 0 0 1px #262626; /* border via box-shadow */
/* hover */ box-shadow: inset 0 0 0 2px #262626; /* thickens */
/* disabled */ --border-color: #e6e6e6; color: #bbb;
```

### Outline on Image (`style-button--outline-on-image`)

```css
background-color: #00000080; /* 50% black */
color: #f2f2f2;
box-shadow: inset 0 0 0 1px #f2f2f2;
/* hover */ --border-color: #fff; color: #fff;
/* disabled */ --border-color: #8e8e8e; color: #8e8e8e;
```

### As Link (`style-button--as-link`)

```css
background: transparent;
color: #262626;
/* hover */ color: #1c69d4;
/* active */ color: #0653b6;
/* disabled */ color: #bbb;
```

---

## Focus Ring (Universal Pattern)

```css
box-shadow: 0 0 0 .0625rem #fff, 0 0 0 .3125rem #1c69d4;
/* = 1px white inner ring + 5px BMW Blue outer ring */
```

Used consistently across all interactive elements: buttons, links, nav items, form controls.

---

## Navigation (`cmp-globalnavigation`)

| Property | Mobile | Tablet (768px+) | Desktop (1280px+) |
|---|---|---|---|
| **Header height** | `68px` | `84px` | `84px` |
| **Logo width** | `2.25rem` (36px) | `3.25rem` (52px) | `3.25rem` |
| **Side padding** | `1.5rem` (24px) | `3rem` (48px) | `6rem` (96px) |

### Nav Color Variants (3 themes)

| Variant | BG | Border | Logo | Link color |
|---|---|---|---|---|
| **Solid White** | `#fff` | `#bbb` | Grey | `#666` → hover `#1c69d4` |
| **Solid Black** | `#000` | `#666` | White | `#fff` → hover `#e6e6e6` |
| **Transparent** | `transparent` | `#fff` | White | `#fff` → hover `#fff` |

- Active nav link: `color: #0653b6`, border-bottom: `.25rem solid transparent`
- Hover nav link: `border-bottom: .25rem solid #1c69d4`
- Mobile flyout transition: `left .15s cubic-bezier(0,.5,.5,1)`

### 1920px+ Max Width

```css
max-width: 109.5rem; /* 1752px */
margin: 0 auto;
padding: 0 .75rem;
```

---

## Stage / Hero Component (`cmp-stage`)

| Property | Mobile | Desktop (1024px+) | Ultrawide (1920px+) |
|---|---|---|---|
| **Aspect ratio** | `3/4` (portrait) | `16/7` (cinematic) | `16/7` |
| **Background** | `#000` | `#000` | `#000` |
| **Max width** | — | — | `120rem` (1920px) |

### Dark Overlay (default)

```css
/* Desktop gradient over image */
background: linear-gradient(60deg, #000, #0000 65%);

/* Mobile overlay */
background-color: #000;
/* Fade-in gradient above overlay */
background: linear-gradient(180deg, #0000, #000);
```

### Light Variant

```css
background-color: #fff;
color: #262626; /* via --page-variables-primary-color */
```

### Stage Content Animation

```css
/* Entry */
opacity: 0;
transform: translateY(3rem);       /* mobile: slide up */
transition: transform .75s ease-in, opacity .75s ease-in;

/* Desktop: slide from left */
transform: translateX(-3rem);
transition: transform 1s ease-in, opacity 1s ease-in;

/* Visible state */
opacity: 1;
transform: translate(0);
```

---

## Breakpoints

| Name | Value |
|---|---|
| Tablet | `768px` |
| Tablet Landscape | `1024px` |
| Desktop | `1280px` |
| Ultrawide | `1920px` |

---

## Grid / Spacing System

| Breakpoint | Side Padding | Source |
|---|---|---|
| Mobile | `1.5rem` (24px) | Nav, containers |
| 768px+ | `3rem` (48px) | Nav, containers |
| 1280px+ | `6rem` (96px) | Nav, containers |
| 1920px+ | `.75rem` + centered `109.5rem` max | Nav wrapper |

Popover padding follows same progression: `1.25rem` → `3.75rem` → `5.75rem`.

---

## Animation / Transition Patterns

| Element | Transition |
|---|---|
| Nav flyout (mobile) | `left .15s cubic-bezier(0,.5,.5,1)` |
| Nav flyout (desktop) | `transform .25s cubic-bezier(.5,0,.5,1)` + `opacity .15s` |
| Stage content entry | `transform .75s ease-in, opacity .75s ease-in` |
| Stage content desktop | `transform 1s ease-in, opacity 1s ease-in` |
| Accordion chevron | `transform .5s ease-in-out` |
| Collapsible content | `max-height .25s ease` |
| Popover scale | `animation-duration: .3s` |
| Loading spinner | `animation-duration: 1.2s, linear` |

### Loading Spinner

```css
border-color: #0000 #262626;
border-radius: 50%;
border-style: solid;
border-width: calc(var(--size) * var(--factor) / 6);
animation-name: spin; /* 45deg → 405deg */
```

---

## Popover / Modal

```css
/* Backdrop */
background: #000c; /* ~80% black */

/* Wrapper */
background-color: #fff;
box-shadow: 0 4px 9pt 0 rgba(0,0,0,.161), 0 0 1px 0 #0000004a;

/* Close button */
background-color: #fff;
color: #262626;
/* hover */ background-color: #bbb;

/* Scrollbar */
scrollbar-color: #4d4d4d #e6e6e6;
scrollbar-width: thin;
```

---

## Key Design Principles (Observed from CSS)

1. **Never pure black text** — `#262626` everywhere, `#000` reserved for stage backgrounds only
2. **Light by default** — base `font-weight: 300`; boldness is earned (500 for clickable, 700 only for prices)
3. **Blue is interactive** — `#1c69d4` means "clickable" across the entire system
4. **Consistent focus rings** — same 1px white + 5px blue `box-shadow` on every focusable element
5. **Portrait-first hero** — `3/4` mobile → `16/7` desktop (not 16:9)
6. **Generous spacing that scales** — padding grows from 24px → 48px → 96px across breakpoints
7. **Minimal border-radius** — `3px` on buttons, no rounded corners on cards/containers
8. **Box-shadow borders** — outline buttons use `box-shadow: inset` instead of CSS `border` (prevents layout shift on hover when border thickens)
