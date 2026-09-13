# PRD: Landing Page Design System Refresh

**Context:** This session applied a full design-system pass to Sortly's marketing landing page, inspired first by the Contiq Framer template (captured in `design.md` at the repo root), then generalized into a light, single-accent system. This document formalizes that work — what changed, why, and the resulting spec — as a durable reference, separate from `design.md` (which is the *source* template spec, not a record of what was actually built for Sortly).

---

## 1. Background
Sortly's landing page previously ran a lighter, more generic SaaS look (400-weight headlines, standard white/near-black theme toggle, no motion language). The user asked to adopt design sensibilities from reference templates in sequence — Verity (bold headlines, generous spacing, soft shadows), then Contiq (a dark/monochrome AI-SaaS token system with a defined type scale and scroll-triggered motion), then a generalized **light, monochrome-first, single-accent** system derived from the same Contiq language. That light system is now the site's default; the dark Contiq tokens remain as the `.dark` toggle variant.

## 2. Goals
- Establish a single, reusable color-token system so the whole page (and future sections) re-themes from one edit.
- Apply a disciplined type scale with bold, high-impact headlines contrasted against lighter body copy.
- Introduce a signature scroll-motion pattern (word-by-word heading reveal) consistent with the reference template.
- Reorder sections to follow a clearer commercial narrative (features → proof → pricing → FAQ → CTA) before supplementary content.
- Do all of this **without fabricating content** Sortly doesn't have (no fake integration logos, no fake testimonials/stats).

## 3. Non-goals
- Not changing the site's light/dark theme *toggle* mechanism itself (still present; dark tokens apply under `.dark` plus a few permanently-dark sections).
- Not adding new Contiq-inventory sections with no real Sortly content (logo marquee, integrations grid, "Our Values" stat bento).
- Not touching the actual Sitemap Editor product UI (a separate, isolated preview copy exists for that — out of scope for this PRD).

## 4. Design System Spec

**Color tokens** (defined in `src/landing-page/sharedStyles.css`). Theme-aware tokens live at `:root` with their **light** (default) values, and are overridden under `.dark` with dark values — any rule using `var(--text-primary)` etc. auto-flips with the toggle, no per-rule `.dark` duplication required:

| Token | Light (default) | Dark (`.dark`) | Usage |
|---|---|---|---|
| `--bg-primary` | `#ffffff` | `#0a0a0b` | Page background |
| `--bg-surface` | `#f5f5f6` | `#141416` | Cards, panels |
| `--bg-surface-raised` | `#ffffff` | `#1c1d20` | Elevated cards, nested elements, inputs |
| `--border-subtle` | `#e7e7e9` | `#2a2b2e` | Hairline borders/dividers |
| `--text-primary` | `#111114` | `#f5f5f7` | Headlines, primary copy |
| `--text-secondary` | `#5c5c63` | `#9b9ba1` | Supporting copy |
| `--text-muted` | `#8a8a91` | `#6b6c72` | Tertiary/meta text |
| `--accent` (+ `--accent-rgb`) | `#4f46e5` (same in both themes) | | CTAs, active states, links, chart highlights |
| `--accent-foreground` | `#ffffff` (same in both themes) | | Text/icons on accent fill |

Plus status tints (`--status-{neutral,progress,success,info}-{bg,text}`) for future badge/pill use, and four **fixed-dark** constants (`--dark-bg-primary`, `--dark-bg-surface`, `--dark-bg-surface-raised`, `--dark-border-subtle`, `--dark-text-primary`, `--dark-text-secondary`, `--dark-text-muted`) that do **not** flip with the toggle — used by sections that are permanently dark regardless of site theme (Hero, Footer, FinalCTA, Contact/ContactForm, mockup chrome), so they stay dark even when the rest of the page is in light mode.

Accent color: switched from Sortly's original brand purple (`#7161ef`) to indigo `#4F46E5` per this generalized spec, applied consistently across both themes and across the shared `AccountBadge`/`GetStartedMenu` components (visible in the landing-page nav), but **not** propagated into the untouched product UI (real Sitemap Editor, Dashboard, Card Sort, Tree Test) — those keep the original purple.

Applied to: `Hero`, `Footer`, `FinalCTA`, `Contact`/`ContactForm`, `LandingPage` base canvas, shared button/surface classes, `Capabilities`, `Process`, `Testimonial`, `UseCases`, `Pricing`, `FAQ`, `Features`, `Nav`, the product mockup chrome (`mockups/primitives.css`), and the isolated `sitemap-editor-preview` (its own self-contained, always-dark token set with the same names/accent).

**Typography:** Large section/hero headlines bumped from weight 400 → 700 (600 for smaller in-carousel titles); body copy, labels, and card titles deliberately left lighter for contrast, matching the "heavy headline vs. light everything else" hierarchy principle.

**Spacing/radius:** Section vertical padding widened (~112px mobile / ~144px desktop); oversized radii trimmed toward a moderate 16–20px range; shadows softened (lower opacity, wider blur) for a less harsh, more diffuse look.

**Motion:**
- Standardized hover micro-interactions to `200ms ease-out` site-wide.
- Introduced `--ease-snappy: cubic-bezier(0.16, 1, 0.3, 1)` for larger transitions (section reveals, hero fade-ins, carousel slide).
- Built a reusable `WordReveal` component (`src/landing-page/WordReveal.jsx`) — headline text reveals word-by-word on scroll entry, gated by `IntersectionObserver`, with a `prefers-reduced-motion` fallback to a plain opacity fade. Currently applied to the Hero headline as the flagship instance.

## 5. Section Order (current, top → bottom)
Nav → Hero → Capabilities → Features → Testimonial → Pricing → FAQ → FinalCTA → Process → UseCases → Contact → Footer.

Rationale: mirrors Contiq's core commercial flow for the first stretch (bento features → deeper feature carousel → social proof → pricing → objections/FAQ → closing CTA), then places Sortly-only explainer content (Process, UseCases) and the Contact form afterward rather than deleting them to match Contiq's section count.

## 6. Known Gaps / Follow-ups
- `AuthModal.css` still uses pre-refresh hardcoded dark values (lower-traffic: login modal). `HeroBackgroundPicker.css`'s accent references were updated to the new indigo, but its neutral grays weren't migrated to the fixed-dark tokens.
- `TopBar`'s `AccountBadge`/`GetStartedMenu` got the accent color update (visible in the landing-page nav) but weren't fully reskinned in the Sitemap Editor preview, since a full reskin would mean duplicating components shared by card-sort/tree-test.
- Testimonial section still holds placeholder copy, not a real customer quote — a pre-existing gap, not introduced by this work.
- Real product UI (`src/sitemap-editor`, `src/dashboard`, `src/card-sort`, `src/tree-test`) intentionally still uses the original purple `#7161ef` — the indigo swap is scoped to the landing page, its mockups, and the isolated `sitemap-editor-preview`.

## 7. Files Touched (representative, not exhaustive)
- `src/landing-page/sharedStyles.css` — token definitions (light default + `.dark` override + fixed-dark constants) + shared button/surface/section-band styles
- `src/landing-page/Hero.jsx` / `Hero.css`, `Footer.css`, `FinalCTA.css`, `Contact.css`/`ContactForm.css` — permanently-dark sections, migrated to `--dark-*` constants
- `src/landing-page/Capabilities.css`, `Process.css`, `Testimonial.css`, `UseCases.css`, `Pricing.css`, `FAQ.css`, `Features.css`, `Nav.css`, `LandingPage.css` — theme-aware token migration (auto-flipping names)
- `src/landing-page/mockups/primitives.css` (+ `SitemapMockup.css`/`.jsx`, `CardSortMockup.css`/`.jsx`, `ReportsMockup.css`/`.jsx`, `HeroMockup.css`/`.jsx`) — mockup chrome tokens + accent swap
- `src/landing-page/WordReveal.jsx` / `.css` — motion component
- `src/landing-page/LandingPage.jsx`, `Nav.jsx` — section reorder + matching nav links
- `src/shared/components/AccountBadge.css`, `GetStartedMenu.css` — accent color swap only (rendered inside the landing-page nav)
- `src/sitemap-editor-preview/tokens.css` (+ all its components) — renamed to match the shared token naming, accent swapped to indigo
- `design.md` — the source reference spec (unchanged, already existed)

## 8. Verification
- `npm run build` passes cleanly (verified throughout this session, most recently after the light-system/accent migration).
- Visually confirmed via headless-browser screenshots: Hero (indigo CTA over the dark starfield), Nav (indigo "Get started" pill), and Pricing (light gray cards, indigo accent on eyebrow/badge/buttons/icons, the "Most Popular" tier's border now accent-tinted instead of plain gray).
- Manual browser check still recommended for: the dark-mode toggle across all reskinned sections, the Hero word-reveal animation, and the carousel/testimonial sections in their new order.
