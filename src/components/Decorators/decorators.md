# Decorators

Decorators are non-blocking visual background elements that span the full page or container. They do not affect the document flow or block cursor/pointer events (`pointer-events: none`).

There are two main decorator components available:
- `GridBackgroundDecorator`: Renders a structured grid of lines or dots.
- `RadialGlowDecorator`: Renders smooth, multi-blob radial gradients with organic animations.

---

## GridBackgroundDecorator

The `GridBackgroundDecorator` component displays a structured grid overlay, helpful for technical, canvas, or modern geometric aesthetics.

### Props

| Prop        | Type                  | Default   | Description                                      |
| ----------- | --------------------- | --------- | ------------------------------------------------ |
| `zIndex`    | `number`              | `0`       | Z-index layer depth for the decorator container. |
| `className` | `string`              | —         | Additional CSS class names.                      |
| `style`     | `React.CSSProperties` | —         | Custom inline styles.                            |
| `gridSize`  | `number`              | `40`      | Grid spacing size in pixels.                     |
| `variant`   | `"lines" \| "dots"`   | `"lines"` | Visual grid style.                               |

### Usage

```tsx
import { GridBackgroundDecorator } from '@adgytec/web-ui-components';

// Renders a basic grid line pattern
<GridBackgroundDecorator variant="lines" gridSize={40} />

// Renders a grid dot pattern with custom depth
<GridBackgroundDecorator variant="dots" zIndex={-5} />
```

---

## RadialGlowDecorator

The `RadialGlowDecorator` component renders smooth, hardware-accelerated radial glow gradients derived from active Material Design 3 theme tokens (`--md-sys-color-primary`, `--md-sys-color-secondary`, `--md-sys-color-tertiary`). Opacities are theme-aware, automatically scaling up in light mode to remain visible against bright backgrounds while remaining soft and subtle in dark mode.

### Props

| Prop        | Type                                                                                                             | Default     | Description                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| `zIndex`    | `number`                                                                                                         | `-10`       | Z-index layer depth for the decorator container. |
| `className` | `string`                                                                                                         | —           | Additional CSS class names.                      |
| `style`     | `React.CSSProperties`                                                                                            | —           | Custom inline styles.                            |
| `variant`   | `"default" \| "split" \| "top-bar" \| "corners" \| "aurora" \| "spotlight" \| "nebula" \| "horizon" \| "spiral"` | `"default"` | Predefined layout and motion variant.            |
| `color`     | `"multi" \| "primary" \| "secondary" \| "tertiary"`                                                              | `"multi"`   | Color palette mode derived from theme tokens.    |

### Layout Variants

| Variant       | Layout / Composition              | Animation                    | Best For                                  |
| ------------- | --------------------------------- | ---------------------------- | ----------------------------------------- |
| `"default"`   | Multi-accent ambient radial blend | Static placement             | General page backgrounds                  |
| `"split"`     | Dual glows on opposing sides      | Static placement             | Two-column layouts                        |
| `"top-bar"`   | Top-aligned horizontal radiance   | Static placement             | Headers and landing page top folds        |
| `"corners"`   | Four corners radiating inward     | Static placement             | Framing content containers                |
| `"aurora"`    | Organic multi-stop floating glow  | Continuous atmospheric drift | Dreamy, atmospheric visual aesthetics     |
| `"spotlight"` | Centered hero glow                | Subtle pulsating scale       | Hero sections and centered elements       |
| `"nebula"`    | Cosmic multi-accent drift         | Smooth drift & pulsation     | Immersive, fluid cosmic background looks  |
| `"horizon"`   | Bottom-aligned grounded radiance  | Static placement             | Grounding footers or landing page ends    |
| `"spiral"`    | Circular orbiting radiance        | Fluid orbital motion         | High-motion, interactive centerpiece feel |

### Usage

```tsx
import { RadialGlowDecorator } from '@adgytec/web-ui-components';

// Simple default radial background
<RadialGlowDecorator variant="default" />

// Centered primary spotlight glow
<RadialGlowDecorator variant="spotlight" color="primary" />

// Floating animated aurora theme
<RadialGlowDecorator variant="aurora" zIndex={-20} />
```
