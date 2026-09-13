# Contiq — Design Spec
**Site:** contiq.framer.website · Dark, monochrome AI‑SaaS landing page (Framer template by Arsalan Ali)
**Style keywords:** Dark minimal · monochrome-by-design · animated · CMS-driven · one-page

---

## 1. Design Principles

1. **Monochrome-first, accent-optional** — the entire UI runs on greys/near-black/off-white. A single accent color is reserved for CTAs, active states, and data highlights, and is bound to one token so the whole site re-themes from one edit.
2. **Interface-as-hero** — no static screenshots. The product itself (a Kanban/task board) is rendered live as an animated component, both in the hero and in supporting sections.
3. **Restraint in typography, richness in motion** — a small, disciplined type scale; visual interest comes from scroll-triggered reveals, not decoration.
4. **Card-based density** — nearly every section is built from a rounded-rect "surface" card with a thin border, on a slightly darker canvas.

---

## 2. Color System (9 tokens)

| Token | Role | Approx. value | Usage |
|---|---|---|---|
| `bg/base` | Page background | `#0A0A0B` (near-black) | Body background |
| `bg/surface` | Card / panel fill | `#141416` | Feature cards, pricing cards, testimonial cards, nav bar |
| `bg/surface-raised` | Nested/inner panel | `#1C1D20` | Kanban columns, chart backgrounds, input fields |
| `border/subtle` | Hairline dividers | `#2A2B2E` (≈8–10% white) | Card borders, table rules, nav divider |
| `text/primary` | Headlines, body | `#F5F5F7` (off-white) | H1–H3, primary copy |
| `text/secondary` | Supporting copy | `#9B9BA1` (mid grey) | Subheads, descriptions, meta labels |
| `text/muted` | Tertiary labels | `#6B6C72` | Timestamps, footer links, placeholder text |
| `accent/primary` | Brand accent (swappable) | `#7C5CFF` (violet) *or* client brand color | Primary buttons, active nav link, chart lines, status "Live/Done" pills |
| `accent/on-accent` | Text on accent fill | `#FFFFFF` | Button labels on accent background |

- Status pills inside the Kanban/board mockups use low-opacity tints of the accent and semantic greens/ambers (e.g., "Done" = accent tint, "Draft" = grey tint, "Building" = amber tint) — but all derive from the same 9-token palette by opacity, not new hues, keeping it "monochrome by design."
- Buttons: primary = solid accent fill, white text, full or large pill radius; secondary = transparent/outline with `border/subtle`, `text/primary` label (used for "Watch Demo").

---

## 3. Typography (8 text styles)

Likely typeface: a geometric/grotesque sans such as **Inter, Geist, or General Sans** (standard for Framer dark SaaS templates) — clean, tight tracking, tabular numerals for the dashboard widgets.

| Style | Approx. size (desktop / mobile) | Weight | Tracking | Use |
|---|---|---|---|---|
| Display / H1 | 64px / 34px | 600–700 | -2% | Hero headline ("Smarter Automation. Faster Business Results.") |
| H2 | 40px / 28px | 600 | -1.5% | Section titles ("The Intelligence Revolution Starts Now") |
| H3 | 22px / 19px | 600 | -0.5% | Card titles, feature names |
| Body-lg | 18px / 16px | 400 | 0 | Hero subhead, section intros |
| Body | 15–16px / 14px | 400 | 0 | Card descriptions, FAQ answers |
| Body-sm / Label | 13px | 500 | +2% (uppercase) | Eyebrow labels ("PROJECTS", "LINKS", "CONTACT") |
| Caption | 12px | 400–500 | 0 | Timestamps, avatar captions, meta text in widgets |
| Numeric / Stat | 32–40px | 600 | -1% | Big stat callouts ("+54.34%", "16 hr 30 min") |

Headings reveal **word-by-word on scroll** (staggered fade/slide-up), not letter-by-letter — a signature motion beat repeated at every section.

---

## 4. Layout & Grid

- **Breakpoints (hand-tuned):** Desktop `1200px`, Tablet `810px`, Mobile `390px`.
- **Max content width:** ~1200px container, with generous outer gutters (~5–8% of viewport) at desktop.
- **Base spacing unit:** 8px grid; section vertical rhythm ~120–160px top/bottom padding on desktop, ~64–80px on mobile.
- **Corner radius system:** large outer cards ~20–24px, inner nested elements (chips, mini-cards, avatars) ~8–12px, pill buttons/status tags fully rounded.
- **Grid patterns per section:**
  - Hero: centered single column (headline, subhead, 2 CTAs), full-width animated board mockup below/behind, sitting in a browser-chrome-like rounded frame.
  - Features ("Intelligence Revolution"): responsive bento/grid of 6 cards (3×2 desktop → 1-col mobile), each with a small icon, H3, 1–2 line description.
  - "Our Values": bento grid of unequal-sized cards mixing stat callouts (performance %, time saved) with three animated vignettes (self-drawing chart, filling task list, sweeping-playhead timeline).
  - Testimonials: horizontal drag/scroll carousel, portrait photo card + quote card pairing, scrollbar hidden, swipe/drag/trackpad enabled.
  - Pricing: 3-column card row (Starter / Growth / Enterprise) collapsing to stacked cards on mobile; middle "Growth" plan typically visually emphasized (accent border or elevated shadow) as the recommended tier.
  - Integrations: logo grid/marquee of tool icons in muted monochrome, hover brings to full opacity.
  - FAQ: accordion list, single-column, chevron/plus icon rotates on expand.
  - Closing CTA: centered band, dark surface, headline + button, echoing hero.
  - Footer: 4-column layout (brand blurb, Links, Contact, Newsletter signup) collapsing to stacked on mobile.

---

## 5. Navigation

- **Desktop:** fixed/sticky pill-shaped nav bar, logo left, center links (Home, Features, Integrations, Resources, Pricing), right-side "Log In" (text) + "Get Started" (accent button).
- **Scroll-spy:** active section link highlighted (accent color or underline) as user scrolls.
- **Mobile:** hamburger → slide-in/drawer navigation with open/closed animated state, stacked links, full-width CTA button at bottom of drawer.

---

## 6. Signature Components (React code components, not static images)

1. **Live product board (hero)** — a mock Kanban interface (Home/Inbox/Documents/Roadmap sidebar + "Product Backlog" board with Research/In Progress/Shipped columns). Cards animate into their columns, one card visibly drags between columns, counts update (e.g., "Research 6"). Collapses to a simplified stacked list view on mobile. Props exposed: colors, labels, sizing, animation on/off toggle.
2. **Self-drawing line/bar chart** — used in "Our Values," draws its stat line as it enters viewport (Performance +54.34%).
3. **Task list fill-in** — rows populate top-to-bottom with a stagger, used for "Operationalize goals" (Q3 Campaign Project rows with status pills: Live, Running, Draft, Queued).
4. **Timeline/schedule with sweeping playhead** — a horizontal hour-ruler (09:00–16:00) with task blocks and a moving vertical "now" indicator, used for "Meet campaign goals."
5. **Logo marquee** — continuous, seamless horizontal auto-scroll of integration/partner logos.
6. **Testimonial carousel** — drag/touch/trackpad-scrollable row of cards; portrait image + quote + name/title/company.

All animations: **fire once, gated by viewport entry** (no infinite re-triggering on re-scroll except the marquee, which loops continuously).

---

## 7. Imagery & Iconography

- Testimonial headshots: cropped portrait photography, consistent aspect ratio (~2:3), desaturated/cool grade to match the dark theme.
- Icons: simple 1.5–2px stroke line icons (feature cards, integration logos, chevrons) — no filled/glyph icons, keeping with the minimal monochrome tone.
- No decorative illustration or gradients beyond subtle accent glows possible behind the hero mockup.

---

## 8. Content/CMS Structure

Three CMS collections drive repeatable content — replace data, not layout:
- **Testimonials:** photo, quote, name, title, company.
- **Pricing plans:** name, price, cadence, blurb, feature bullet list, CTA label.
- **FAQ:** question, answer (accordion).

---

## 9. Section Inventory (11 total, top → bottom)

1. Nav (sticky)
2. Hero (headline, subhead, 2 CTAs, live board mockup)
3. Logo marquee (social proof strip)
4. Features grid ("The Intelligence Revolution Starts Now" — 6 items)
5. Our Values (bento: stats + 3 animated vignettes + narrative copy blocks)
6. Testimonials carousel
7. Pricing (3 tiers)
8. Integrations grid
9. FAQ accordion
10. Closing CTA band
11. Footer (brand + link columns + newsletter + legal)

---

## 10. Motion Summary

| Trigger | Effect |
|---|---|
| Section enters viewport | Heading text reveals word-by-word; supporting content staggers in (fade + slight upward translate, ~20–40px) |
| Hero/board mockups | Cards animate into columns, one drag gesture demo, counters tick up |
| Stat cards | Numbers count up; chart line draws itself |
| Logo strip | Continuous marquee scroll, no pause-on-hover required |
| Carousel (testimonials/features) | Drag, touch-swipe, and trackpad scroll; hidden scrollbar |
| Nav | Scroll-spy active-state swap; mobile drawer slide + fade |
| Accordion (FAQ) | Height/opacity expand with rotating chevron |

---

## 11. Accessibility & Responsiveness Notes

- Maintain contrast: `text/secondary` (#9B9BA1) on `bg/base` (#0A0A0B) is borderline AA for small text — reserve for non-critical copy; keep primary body copy in `text/primary`.
- Respect reduced-motion preference: disable auto-count-up/marquee looping and word-by-word reveal (fallback to opacity fade only) when `prefers-reduced-motion` is set.
- All interactive mockups need non-animated/static fallback state for accessibility tooling and for the "animation toggle" prop.

---

### Notes on sourcing
This spec is reconstructed from the live page's structure/content and the template creator's own build notes (color-token system, breakpoints, animated component behavior). Exact hex values are best-practice estimates for a "dark minimal, monochrome" AI-SaaS aesthetic rather than pixel-picked values — swap in your real brand accent color via the single `accent/primary` token as designed.
