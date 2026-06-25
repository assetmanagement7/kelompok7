---
name: Tactile Asset Management
colors:
  surface: '#faf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e2e1eb'
  on-surface: '#1a1b22'
  on-surface-variant: '#444653'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1f0fa'
  outline: '#747685'
  outline-variant: '#c4c5d6'
  surface-tint: '#2e55c7'
  primary: '#2b53c4'
  on-primary: '#ffffff'
  primary-container: '#496ddf'
  on-primary-container: '#fffbff'
  inverse-primary: '#b6c4ff'
  secondary: '#5b3cdd'
  on-secondary: '#ffffff'
  secondary-container: '#7459f7'
  on-secondary-container: '#fffbff'
  tertiary: '#884e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ab6300'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164f'
  on-primary-fixed-variant: '#043bae'
  secondary-fixed: '#e5deff'
  secondary-fixed-dim: '#c9bfff'
  on-secondary-fixed: '#1a0063'
  on-secondary-fixed-variant: '#441cc8'
  tertiary-fixed: '#ffdcbf'
  tertiary-fixed-dim: '#ffb872'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6a3b00'
  background: '#faf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e2e1eb'
typography:
  h1:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Poppins
    fontSize: 26px
    fontWeight: '700'
    lineHeight: '1.2'
  h2:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  caption:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  label:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin: 32px
---

## Brand & Style
The brand personality is professional, dependable, and physically intuitive. It targets enterprise asset managers who require a sense of stability and precision when handling high-value digital and physical portfolios. 

The design system utilizes **Modern Neumorphism**. This style moves away from flat, abstract layers toward a tactile, extruded interface where elements feel like they are molded from the same physical material as the background. This creates a soft, approachable "soft-tech" aesthetic that reduces cognitive load in complex data environments. The emotional response should be one of "calm control"—where every interaction feels weighted and intentional.

## Colors
This design system uses a monochromatic base foundation to support neumorphic effects. The background and surface colors are closely related to ensure that light and shadow play naturally across the UI. 

- **Primary & Secondary:** Used for high-priority actions and brand accents.
- **Semantic Colors:** Success, Warning, and Danger are reserved for status indicators and destructive actions.
- **Surface Strategy:** The UI relies on the subtle shift between `#E6EAF0` (Base) and `#EEF2F7` (Surface) to define depth without harsh lines.

## Typography
Typography is clean and geometric to balance the soft, organic shapes of the neumorphic UI. 

- **Headlines:** Use Bold and Semi-Bold weights to establish clear hierarchy over extruded containers.
- **Body:** Set with generous line height (1.6) to ensure readability against the low-contrast background.
- **Letter Spacing:** Headlines use slight tracking reduction for a tighter, more modern enterprise look, while labels are tracked out for clarity at small sizes.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to maintain the structural integrity of the neumorphic shadows, which can become visually cluttered in highly fluid layouts.

- **Grid:** 12-column system with a max-width of 1440px.
- **Gutters:** Fixed 24px gutters to allow shadows to "breathe" without overlapping.
- **Mobile:** Transition to a single-column layout with 16px margins. Neumorphic extrusion heights are halved on mobile to prevent elements from feeling too bulky on small screens.

## Elevation & Depth
Depth is the core mechanic of this design system. It is achieved through dual-shadow techniques rather than color layering.

- **Extruded (Raised):** Used for buttons and cards. Created with a light shadow (Top-Left: -6px -6px, 12px blur, #FFFFFF) and a dark shadow (Bottom-Right: 6px 6px, 12px blur, #D1D9E6).
- **Inset (Pressed):** Used for active states and input fields. Created with an inner light shadow (Bottom-Right: -6px -6px, 12px blur, #FFFFFF) and an inner dark shadow (Top-Left: 6px 6px, 12px blur, #D1D9E6).
- **Level 0:** The flat background plane at `#E6EAF0`.

## Shapes
Rounded corners are essential for the neumorphic effect to appear natural. This design system uses a standard `0.5rem` (8px) radius for most elements, increasing to `1rem` (16px) for larger containers like cards and modals. Sharp corners are strictly avoided as they break the "molded" physical metaphor.

## Components

### Buttons
- **Primary:** Extruded surface using Primary color for text/icon, or a subtle Primary-tinted gradient. On click, switch to `inset` shadow.
- **Secondary/Icon:** Matches surface color exactly, using the dual-shadow extrusion to define its shape.
- **Disabled:** Reduced opacity (40%) with flattened shadows (no elevation).

### Form Components
- **Inputs & Text Area:** Always use the `inset` shadow state to represent a "hollow" area for data entry. Focus state adds a thin 1px Primary border.
- **Toggles:** The track is `inset`, and the thumb is a highly `extruded` circle.
- **Checkbox/Radio:** Small `inset` squares/circles. When checked, the inner mark is `extruded`.

### Data & Cards
- **Cards:** Large radius (16px) with soft `extruded` shadows. Use for Asset Info and Report Summaries.
- **Tables:** The table container is `extruded`, but rows are separated by simple low-contrast lines or subtle tonal shifts rather than individual shadows to avoid "shadow vomit."
- **Badges:** Small pills with `inset` shadows for a "stamped" look.

### Navigation
- **Sidebar:** A vertical plane with a subtle right-side `extruded` edge or a slightly different surface tint. Active links use the `inset` shadow to feel "pressed."
- **Breadcrumbs:** Flat typography with Text Secondary color; the current page is Text Primary and Semi-Bold.

### Modals
- **Standard:** Centered with a high-spread `extruded` shadow. Use a backdrop blur (10px) behind the modal to focus attention.

### Charts
- **Bar/Line/Pie:** Use the Primary and Secondary colors. Bars should have a subtle 4px radius at the top. Grid lines in charts should be extremely faint (#D1D9E6) to maintain the minimalist aesthetic.