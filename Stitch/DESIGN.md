```markdown
# Design System Document: High-End Editorial Photography & Audiovisual

## 1. Overview & Creative North Star
**Creative North Star: "The Cinematic Curator"**

This design system is not a template; it is a digital gallery. For Guti Perú Studio, the UI must act as a silent, sophisticated frame that elevates the art of photography and film. We move away from the "app-like" density of standard interfaces toward a "High-End Editorial" experience. 

By leveraging intentional asymmetry, high-contrast typography, and atmospheric depth, we create an environment that feels intimate and professional. The layout should breathe, using generous vertical rhythm to guide the eye through a curated narrative rather than a list of services.

---

## 2. Colors & Tonal Depth
Our palette is rooted in the "Chiaroscuro" technique—the dramatic use of light and dark to create volume.

### Palette Strategy
*   **Surface Background (`#131313`):** A deep, ink-like black that serves as our infinite canvas.
*   **Primary Accent (`#B8965A` / Warm Gold):** Reserved for moments of high intent—CTAs, active states, and signature highlights.
*   **On-Surface Variant (`#D1C5B5`):** A sophisticated charcoal-cream for secondary information, ensuring contrast remains soft and elegant.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for defining sections. Boundaries must be established through:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low` to define a new content area.
2.  **Whitespace:** Using the `24` (8.5rem) or `20` (7rem) spacing tokens to create mental breaks.
3.  **The Signature Filament:** Fine gold lines (`primary_container` at 30% opacity) are only permitted as delicate separators in editorial lists to evoke the feel of a premium printed ledger.

### Glass & Surface Hierarchy
Instead of flat grids, use "Tonal Nesting." 
*   **Hero Sections:** Use `surface`.
*   **Content Cards:** Use `surface-container-high` (`#2a2a2a`) to create a subtle lift.
*   **Floating Navigation:** Apply Glassmorphism using `surface_container_lowest` with a 12px `backdrop-blur`. This allows the vibrant imagery of the studio to bleed through the UI, making it feel integrated.

---

## 3. Typography: The Editorial Voice
Typography is our primary tool for establishing authority. We use three distinct voices to create a hierarchy that feels like a luxury magazine.

*   **Display & Headline (Playfair Display/Newsreader):** Use `display-lg` and `headline-lg` for emotive messaging. This serif represents the "Art" and "History" of photography.
*   **Section Titles (Montserrat/Manrope):** Set in `label-md`, always Uppercase with 0.15em letter-spacing. This is the "Technical" voice—functional, bold, and modern.
*   **Body & Narrative (Inter):** Use `body-lg` for storytelling. High legibility is key. Ensure a line height of 1.6 for long-form text to maintain the "Editorial" breathability.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen. We reject heavy drop shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-highest` card on top of a `surface-dim` background. The difference in hex value provides a natural "lift" without the "muddiness" of a standard shadow.
*   **Ambient Shadows:** If a floating element (like a lightbox) requires a shadow, use a 40px blur with only 4% opacity, tinted with the `primary` gold hue. This mimics the warm bounce-light of a studio strobe.
*   **The Ghost Border:** For interactive fields, use the `outline_variant` at 20% opacity. It should be barely visible—a "whisper" of a boundary that only clarifies on hover.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` gold background with `on-primary` (dark) text. Rectangular with a `0.75rem` (md) radius. No gradients.
*   **Secondary/Ghost:** `outline` border (Ghost Border) with `primary` text. Use for secondary actions like "View Portfolio."
*   **Tertiary:** Text-only, uppercase `label-md` with a fine gold underline that expands on hover.

### Cards
*   **The Studio Card:** 12px border radius. No borders. Use `surface-container-low`. Imagery should be the hero. 
*   **Padding:** Always use `8` (2.75rem) internal padding to ensure content never feels "trapped."

### Input Fields
*   **Minimalist Underline:** Instead of a box, use a 1px `outline-variant` bottom border. When focused, the border transitions to `primary` gold. This maintains the "clean studio" aesthetic.

### Additional Signature Components
*   **The "Curator" Cursor:** A custom circular cursor (20px, 10% opacity white) that expands when hovering over portfolio images.
*   **Vertical Dividers:** In place of horizontal lines, use a 1px wide, 40px tall vertical gold line to separate "Year" from "Project Title" in list views.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If a header is left-aligned, try right-aligning the subtext to create a dynamic, editorial flow.
*   **Do** utilize the `100px` (Spacing `24` approx) vertical padding between every major section.
*   **Do** use "Pure White" (`#FFFFFF`) sparingly—only for primary headlines and body text on dark backgrounds to ensure WCAG AA accessibility.

### Don’t:
*   **Don’t** use decorative gradients. The "soul" of the brand comes from the gold/black contrast and the quality of the photography.
*   **Don’t** use standard 4-column grids for everything. Break the grid by allowing images to span 2.5 columns, creating "white space traps" that look intentional.
*   **Don’t** use high-opacity shadows. If it looks like it's "floating" high above the page, it’s too heavy. It should look like it’s resting on a velvet surface.
*   **Don’t** use icons unless strictly necessary. Rely on typography and high-quality imagery to communicate. When using icons, use thin-stroke (1px) linear styles.

---
**Director’s Final Note:** 
Always remember—we are designing a stage for the photographer's work. If a design element competes with the photography for attention, remove it. The luxury is in the restraint.```