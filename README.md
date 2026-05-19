# Riko Site v2

The rikoai.in marketing site, rebuilt around a scroll-pinned 22s landing animation.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (with the Riko design tokens in `tailwind.config.ts`)
- **Framer Motion** (`useScroll` drives the animation timeline)

## The animation

The top of the homepage is a 500vh tall scroll-pinned section. As the visitor scrolls, `scrollYProgress` (0..1) maps to a 22-second virtual timeline. The timeline plays through three "folds":

| Fold | Time   | What |
|------|--------|------|
| 1    | 0–7s   | "Your books, but _they talk back._" — typing demo + ₹24.9L answer card |
| 2    | 7.5–14.5s | "One layer _above_ your books." — Tally row lifts out into a Riko card |
| 3    | 15–22s | "Delivered, _not_ hyped." — WhatsApp delivery thread + CTA |

Camera Y translates the page up between folds (same `easeInOutCubic` ramps as the original prototype).

After the pinned section, the rest of the homepage scrolls normally: Trust strip → Product tabs → Before/After → Features → How it works → Outcomes → FAQ → CTA → Footer.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 and scroll.

## Deploy to Vercel

1. Push to a new GitHub repo (suggested: `piddu16/riko-site-v2`).
2. Import the repo in Vercel — auto-detects Next.js, no env vars needed.
3. Production domain: point `rikoai.in` (or a staging subdomain) at Vercel when ready.

## File layout

```
app/
  layout.tsx          # Fonts (Inter, Instrument Serif, JetBrains Mono)
  page.tsx            # Composes ScrollScene + the static homepage
  globals.css         # CSS variables, base resets, mono / serif-italic / tnum
components/
  animation/
    ScrollScene.tsx   # The pinned scroll-driven Stage
    Fold1.tsx         # Hero typing demo
    Fold2.tsx         # Tally → Riko lift
    Fold3.tsx         # WhatsApp delivery
    NavBar.tsx        # Top nav with orbiting RikoMark (lives inside the canvas)
    ScrollDots.tsx    # 3-dot progress indicator
    RikoMark.tsx      # Animated orbit logo (planet + arc + satellite)
  homepage/
    StickyNav.tsx     # Real sticky nav for the static section
    TrustStrip.tsx
    ProductSection.tsx  + mockups/Mockups.tsx
    BeforeAfter.tsx
    FeaturesGrid.tsx
    HowItWorks.tsx    # 4 hand-rolled SVG step illustrations
    Outcomes.tsx
    FAQ.tsx
    CTA.tsx
    Footer.tsx
  shared/
    Icons.tsx         # Lucide-style stroke icons
lib/
  easing.ts           # Hand-rolled easings ported from the design bundle
public/assets/
  riko-mark.png
  riko-wordmark.png
  riko-lockup.png
```

## What's intentionally not here yet

- **Mobile device section** (iOS + Android frames from the original homepage) — heavy, can be added in a follow-up.
- **Sister pages** (Features, Pricing, About, Contact, Blog, Tally Integration) — nav points to homepage anchors for now.
- **Mobile breakpoint for the pinned animation** — the canvas scales to fit but the 1920×1080 composition is desktop-first. On phones it'll letterbox; a phone-specific simplified version is on the to-do list.
