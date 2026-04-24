---
name: Heritage Grandeur
colors:
  surface: "#fafaeb"
  surface-dim: "#dbdbcd"
  surface-bright: "#fafaeb"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f4f5e6"
  surface-container: "#efefe0"
  surface-container-high: "#e9e9db"
  surface-container-highest: "#e3e3d5"
  on-surface: "#1b1c14"
  on-surface-variant: "#5a413d"
  inverse-surface: "#2f3128"
  inverse-on-surface: "#f1f2e3"
  outline: "#8e706c"
  outline-variant: "#e2bfb9"
  surface-tint: "#b22b1d"
  primary: "#570000"
  on-primary: "#ffffff"
  primary-container: "#800000"
  on-primary-container: "#ff8371"
  inverse-primary: "#ffb4a8"
  secondary: "#735c00"
  on-secondary: "#ffffff"
  secondary-container: "#fed65b"
  on-secondary-container: "#745c00"
  tertiary: "#002c31"
  on-tertiary: "#ffffff"
  tertiary-container: "#00444b"
  on-tertiary-container: "#6cb3be"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#ffdad4"
  primary-fixed-dim: "#ffb4a8"
  on-primary-fixed: "#410000"
  on-primary-fixed-variant: "#8f0f07"
  secondary-fixed: "#ffe088"
  secondary-fixed-dim: "#e9c349"
  on-secondary-fixed: "#241a00"
  on-secondary-fixed-variant: "#574500"
  tertiary-fixed: "#a7eefa"
  tertiary-fixed-dim: "#8bd2dd"
  on-tertiary-fixed: "#001f24"
  on-tertiary-fixed-variant: "#004f57"
  background: "#fafaeb"
  on-background: "#1b1c14"
  surface-variant: "#e3e3d5"
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.3"
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.4"
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: "600"
    lineHeight: "1.0"
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-padding: 2rem
  gutter: 1.5rem
  section-gap: 4rem
---

## Brand & Style

The design system is rooted in the "Royal Rajasthan" aesthetic, targeting high-net-worth individuals seeking bespoke, luxury event management. The brand personality is regal, authoritative, and deeply steeped in Indian heritage. The UI should evoke the emotional response of walking through a palace corridor at dusk—heavy with history, shimmering with gold, and impeccably curated.

The design style is **Tactile / Skeuomorphic Modernism**. It rejects flat minimalism in favor of rich textures (silk, parchment) and architectural motifs (haveli arches, jaali lattices). Every digital element should feel like a physical artifact: buttons should have a metallic sheen, and containers should feel like textured cardstock or embroidered fabric. High-contrast layering and intricate gold borders ensure the experience remains premium and culturally authentic.

## Colors

The palette is inspired by the gemstones and architecture of Rajasthan.

- **Deep Maroon (#800000):** Used for primary actions, critical navigation, and as a rich backdrop for gold typography. It represents the "kumkum" and royal robes.
- **Royal Gold (#D4AF37):** Used for accents, borders, iconography, and decorative jaali patterns. It should be applied with gradients to simulate metallic reflection.
- **Peacock Blue (#005F69):** An accent color used to denote interactivity or to highlight exclusive "premium" features. It provides a cool contrast to the warmth of the maroon and gold.
- **Ivory (#FFFFF0):** The primary background color. It should be layered with a subtle parchment or raw silk texture to prevent a "flat" digital look.

## Typography

This design system uses a high-contrast typographic pairing to balance tradition with modern usability.

- **Headlines:** Use **Noto Serif** (as a high-quality alternative to Cinzel for digital screens) to convey the royal serif feel. Display sizes should utilize "Small Caps" or increased letter spacing to mimic traditional stone inscriptions found in palaces.
- **Body & Labels:** Use **Manrope** for its refined, contemporary clarity. It ensures that complex event itineraries and logistical details remain highly legible against textured backgrounds.
- **Stylistic Note:** All primary headings should be rendered in Deep Maroon or Gold. Labels and metadata should use Peacock Blue or Maroon to maintain hierarchy.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, mirroring the symmetrical and planned architecture of Jaipur’s city layouts.

- **The Frame:** Every page must be treated as a framed canvas. Use "Haveli-style" frames—inner borders with ornamental corner details—to contain the main content.
- **Symmetry:** Center-aligned layouts are preferred for landing pages and high-impact sections to evoke a sense of formal balance and grandeur.
- **The "Jaali" Grid:** Use a 12-column grid. Decorative mandala patterns or jaali lattices should be used as subtle background watermarks within the margins to fill negative space without cluttering the content.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Physical Metaphors** rather than standard shadows.

- **Surface Tiers:** The base layer is Ivory parchment. Overlays (cards) use a slightly lighter Ivory or a deep Maroon.
- **Gold Foiling:** Instead of traditional drop shadows, use 1px Gold (#D4AF37) borders to "lift" elements from the background.
- **Inset Depth:** For input fields and interactive containers, use subtle inner shadows to create the effect of paper being embossed or pressed.
- **Backdrop Blurs:** When using modals, apply a heavy backdrop blur over a Peacock Blue tint to maintain the "royal" atmosphere while focusing the user's attention.

## Shapes

The shape language is defined by **Architectural Geometry**.

- **Sharp Corners:** All primary containers and buttons use 0px roundedness to maintain a sense of structural permanence and precision.
- **The Arch:** Use CSS masks or SVG clipping paths to create "Palace Arch" (Cusped Arch) tops for image containers and hero sections.
- **Ornamental Borders:** Buttons and cards should feature double-line gold borders, with the outer line being thicker than the inner line.

## Components

- **Buttons:** Rectangular with no border-radius. Primary buttons are Deep Maroon with Gold text and a 1px Gold inset border. Hover states should trigger a subtle silk-like shimmer effect (linear gradient).
- **Cards:** Ivory parchment background with a 1px Gold border. The top of the card should feature a subtle Jaali pattern watermark.
- **Input Fields:** Bottom-border only in Gold, with Noto Serif floating labels.
- **Chips/Tags:** Used sparingly, styled as "Seals." Circular or hexagonal with a Maroon wax-seal aesthetic and Gold embossed icons.
- **Mandala Loaders:** Use an animating, rotating Mandala pattern in Gold for all transition states.
- **Dividers:** Use ornamental "Haveli" dividers—a horizontal gold line with a centered mandala or floral motif.
- **Navigation:** Top-level navigation should be centered, using uppercase Noto Serif with generous letter spacing. Active links are indicated by a small gold dot beneath the text.
