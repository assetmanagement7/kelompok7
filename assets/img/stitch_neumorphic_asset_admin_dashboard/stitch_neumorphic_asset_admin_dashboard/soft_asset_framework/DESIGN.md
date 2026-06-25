---
name: Soft Asset Framework
colors:
  surface: '#f6f9ff'
  surface-dim: '#d5dae1'
  surface-bright: '#f6f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4fb'
  surface-container: '#e9eef5'
  surface-container-high: '#e4e9f0'
  surface-container-highest: '#dee3ea'
  on-surface: '#171c21'
  on-surface-variant: '#41474d'
  inverse-surface: '#2b3136'
  inverse-on-surface: '#ecf1f8'
  outline: '#72787e'
  outline-variant: '#c1c7ce'
  surface-tint: '#356382'
  primary: '#0f4361'
  on-primary: '#ffffff'
  primary-container: '#2d5b7a'
  on-primary-container: '#a5d2f6'
  inverse-primary: '#9fccf0'
  secondary: '#006973'
  on-secondary: '#ffffff'
  secondary-container: '#9bf0fd'
  on-secondary-container: '#006f7a'
  tertiary: '#5a3803'
  on-tertiary: '#ffffff'
  tertiary-container: '#754f1a'
  on-tertiary-container: '#f8c383'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cae6ff'
  primary-fixed-dim: '#9fccf0'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#194b69'
  secondary-fixed: '#9bf0fd'
  secondary-fixed-dim: '#7fd3e0'
  on-secondary-fixed: '#001f23'
  on-secondary-fixed-variant: '#004f57'
  tertiary-fixed: '#ffddb7'
  tertiary-fixed-dim: '#f1bd7e'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#633f0a'
  background: '#f6f9ff'
  on-background: '#171c21'
  surface-variant: '#dee3ea'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is built for enterprise asset management, focusing on a tactile, physical interface that reduces cognitive load during high-density data entry. The brand personality is professional, calm, and organized. 

The aesthetic is purely **Neumorphic**. It moves away from flat design by using light and shadow to create "extruded" and "inset" surfaces that mimic physical plastic or soft-touch materials. The goal is to make digital assets feel tangible and manageable. The UI should evoke a sense of precision and stability, avoiding harsh contrasts in favor of soft, tonal transitions.

## Colors

The palette is monochromatic and functional. The base background color (`#E0E5EC`) is the foundation for all neumorphic effects. 

- **Primary & Secondary:** Deep teal and muted cyan are used exclusively for actionable states, success indicators, or data visualization. They should never be used for large surfaces, as it breaks the neumorphic illusion.
- **Surface Shadows:** Use `#FFFFFF` for the top-left highlight and `#A3B1C6` for the bottom-right shadow.
- **Status Colors:** Use standard semantic colors (Red for alerts, Amber for warnings) but apply them with low saturation to maintain the professional enterprise tone.

## Typography

This design system utilizes **Inter** for its neutral, systematic clarity. In a Neumorphic environment, typography must be highly legible as the background contrast is lower than traditional systems.

- **Headlines:** Use Semi-Bold weights to ensure hierarchy against soft-shadowed containers.
- **Labels:** Use Medium weights for form headers and data labels to distinguish them from the editable body text.
- **Contrast:** Ensure text color is a high-contrast dark gray (`#2D3748`) to compensate for the light gray background.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a focus on modular "Dashboard Tiles." Neumorphism requires generous spacing (negative space) because shadows occupy visual real estate that would otherwise be used for content.

- **Grid:** A 12-column grid for desktop, 4-column for mobile.
- **Rhythm:** An 8px linear scale. For Neumorphic cards, use a minimum of `24px` (md) padding to allow the inner content to breathe away from the curved corners.
- **Reflow:** On mobile, all extruded cards stack vertically with `16px` margins to ensure shadows do not overlap and create visual "muddiness."

## Elevation & Depth

Depth is the primary communicator of hierarchy in this design system. We use two main states:

1.  **Extruded (Convex):** Used for cards, navigation bars, and unpressed buttons. This is achieved with two box-shadows: 
    - `9px 9px 16px rgba(163, 177, 198, 0.6)` (Dark Shadow)
    - `-9px -9px 16px rgba(255, 255, 255, 1)` (Highlight)
2.  **Inset (Concave):** Used for input fields, search bars, and "pressed" button states. This creates a "pushed-in" look:
    - `inset 4px 4px 6px rgba(163, 177, 198, 0.4)`
    - `inset -4px -4px 6px rgba(255, 255, 255, 1)`

Avoid stacking more than two levels of elevation (e.g., an extruded button on an extruded card) to prevent the UI from looking cluttered.

## Shapes

The design system relies on high roundedness to soften the interface and enhance the "liquid plastic" feel. 

- **Cards/Containers:** Use `24px` (rounded-xl) for all primary asset containers.
- **Buttons/Inputs:** Use `12px` (rounded-lg) for action elements.
- **Chips:** Always use `pill-shaped` (100px) roundedness for status tags (e.g., "In Stock", "Maintenance").
- **Icons:** Use icons with rounded terminals to match the container radius.

## Components

### Buttons
- **Default:** Extruded surface with centered text in the Primary color.
- **Active/Pressed:** Transition to an "Inset" shadow state with a slight 1px scale down to simulate a physical click.
- **Ghost:** No extrusion, only Primary color text.

### Input Fields
- **Search/Text:** Always "Inset" with a soft border (`1px solid rgba(255, 255, 255, 0.5)`). Use the Label-md typography for the placeholder.
- **Focus State:** The inset shadow deepens slightly, and a 2px Primary color glow is applied to the border.

### Asset Cards
- Primary information containers. Must use the standard Extruded elevation. 
- **Hover:** The shadow distance increases slightly to "lift" the card closer to the user.

### Chips & Badges
- Used for asset categories (e.g., "IT Hardware," "Furniture"). These are flat or slightly inset to avoid competing with primary buttons.

### Lists
- For data-heavy inventory tables, avoid individual card extrusion for every row. Use a single large Extruded container for the table and subtle "Inset" separators between rows to maintain performance and visual clarity.