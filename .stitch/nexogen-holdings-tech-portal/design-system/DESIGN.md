---
name: Synthetic Intelligence Framework
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8c90a1'
  outline-variant: '#424656'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002b75'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#0054d6'
  secondary: '#ddfcff'
  on-secondary: '#00363a'
  secondary-container: '#00f1fe'
  on-secondary-container: '#006a70'
  tertiary: '#c9c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#737171'
  on-tertiary-container: '#faf7f6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#74f5ff'
  secondary-fixed-dim: '#00dbe7'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style

The design system is engineered to evoke a sense of high-fidelity precision and futuristic sophistication. It targets a high-end tech demographic that values speed, clarity, and the aesthetic of advanced computation. 

The visual style is a fusion of **Minimalism** and **Glassmorphism**, leaning heavily into a "Claude Code" aesthetic. It utilizes a deep-space backdrop to create an infinite canvas where UI elements float with calculated purpose. Design elements feature glowing borders, subtle translucent layers, and high-contrast accents to simulate a premium AI-powered interface. The emotional response should be one of "controlled power"—a platform that is both immensely capable and whisper-quiet in its execution.

## Colors

This design system is strictly **dark mode by default**. The palette is designed to maximize visual hierarchy through luminosity rather than just hue.

- **Primary (Electric Blue):** Used for primary actions, active states, and critical paths. It represents energy and connectivity.
- **Secondary (Cyber Cyan):** Reserved for accents, data visualizations, and micro-highlights. It provides a sharp, high-tech contrast to the deeper blues.
- **Surface (Space Black):** The foundation of the UI (#050505). It is pure and deep, allowing "glass" elements to sit on top without visual noise.
- **Functional Grays:** A range of cool-toned grays used for borders, secondary text, and inactive states, maintaining a monochrome tech aesthetic.

## Typography

Typography is a primary driver of the "tech" feel. 
- **Sora** provides a geometric, bold foundation for headings. High-level displays should use wide tracking to emphasize a premium, cinematic quality.
- **Inter** handles all long-form reading and functional UI text, ensuring maximum legibility and a systematic feel.
- **JetBrains Mono** is utilized for metadata, secondary labels, and actual code snippets. It should be used sparingly to signify "raw data" or "technical parameters."

Always ensure a clear contrast between the geometric curves of Sora and the rigid, utilitarian structure of JetBrains Mono.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model on desktop and a **Fluid Fluid** model on mobile. A 12-column system is used with generous margins to create an "airy," expansive feel.

- **Desktop (1440px+):** 64px outer margins, 24px gutters. Elements should feel intentionally placed with significant whitespace (negative space) between functional blocks.
- **Tablet (768px - 1439px):** 40px outer margins, 20px gutters. Content reflows into 8 columns.
- **Mobile (< 767px):** 20px outer margins, 16px gutters. Content stacks into a single column.

Precision is key; every padding and margin value should be a multiple of the 4px base unit to maintain mathematical harmony.

## Elevation & Depth

Depth in the design system is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.

- **Tier 1 (Background):** Pure #050505.
- **Tier 2 (Cards/Surfaces):** Semi-transparent black (approx 40% opacity) with a 20px background blur and a 1px "inner glow" border (white at 10% opacity).
- **Tier 3 (Modals/Popovers):** Higher opacity (60%) with a more pronounced background blur (40px) and a subtle Cyan outer glow (5% opacity) to simulate light emission.

Avoid heavy, muddy shadows. Use light—specifically vibrant blue and cyan light—to indicate elevation and focus.

## Shapes

The shape language is disciplined and architectural. 
- **Base (Soft):** Use a standard 0.25rem (4px) radius for buttons and inputs to maintain a sharp, technical edge.
- **Large Containers:** Use 0.75rem (12px) for cards and modals to provide a slight visual softening that feels premium.
- **Interactive Elements:** Checkboxes and radio buttons should remain sharp (0px - 2px radius) to reinforce the precision-tooled aesthetic.

## Components

### Buttons
Primary buttons use a solid Electric Blue fill with white text. Secondary buttons are "Ghost" style: transparent fill with a 1px Cyber Cyan border and Cyan text. Hover states should trigger a subtle outer glow (box-shadow) using the button's accent color.

### Input Fields
Fields are dark with a 1px border (#222). Upon focus, the border transitions to Cyber Cyan, and the background blur intensity increases slightly. Labels use JetBrains Mono in uppercase at 12px.

### Cards
Cards utilize the Glassmorphism style: a thin, semi-transparent border and background blur. On hover, the border luminosity increases.

### Chips & Tags
Small, pill-shaped elements using JetBrains Mono. Use a subtle blue tint for the background (10% opacity) and the primary blue for the text.

### Progress & Data
Use thin, high-contrast lines. Loading states should utilize a "scanning" animation effect—a horizontal Cyan light beam moving across the component.