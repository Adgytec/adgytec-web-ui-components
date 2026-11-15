# Wave

The `Wave` component family provides mathematical SVG sine wave generators designed for dynamic, fluid wave animations. They are used internally by components like [ProgressIndicator](../ProgressIndicator/progress-indicator.md) and can be used directly for custom visual indicators, charts, loaders, and decorative effects.

All wave animations run via an optimized `requestAnimationFrame` loop using the `usePhase` hook.

## Components

- `Sine`: Renders an animated horizontal sine wave inside a responsive container.
- `SineCircular`: Renders an animated sine wave modulated along a circular arc or closed ring.
- `usePhase`: React hook that generates a continuous phase offset for animating waves.

---

## Sine

The `Sine` component renders a horizontal sine wave that automatically adapts to the width of its parent container using `ResizeObserver`.

### Props

| Prop          | Type     | Default           | Description                                                                                       |
| ------------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------- |
| `amplitude`   | `number` | `3`               | Peak vertical deviation (height) of the wave crest from its center line in pixels.                |
| `wavelength`  | `number` | `40`              | Spatial period over which the wave pattern repeats in pixels.                                     |
| `strokeWidth` | `number` | `4`               | Thickness of the SVG wave stroke line in pixels.                                                  |
| `strokeColor` | `string` | `"currentColor"`  | SVG stroke color. Accepts any valid CSS color string or CSS variable.                             |
| `speed`       | `number` | `wavelength` (40) | Animation speed in units per second. Setting `speed={0}` disables animation and freezes the wave. |

### Usage

```tsx
import { Sine } from "@adgytec/web-ui-components";

// Basic responsive animated horizontal sine wave
<div style={{ width: "100%", height: 24 }}>
    <Sine />
</div>

// Custom amplitude, wavelength, and theme color
<div style={{ width: 300, height: 32 }}>
    <Sine
        amplitude={6}
        wavelength={60}
        strokeWidth={3}
        strokeColor="var(--md-sys-color-primary)"
    />
</div>

// Static (non-animated) wave
<div style={{ width: 200, height: 20 }}>
    <Sine speed={0} />
</div>
```

---

## SineCircular

The `SineCircular` component renders an animated sine wave along a circular path. It can render either a full closed wavy ring or a partial arc specified in fractional turns (0 to 1).

### Props

| Prop           | Type     | Default           | Description                                                                                                     |
| -------------- | -------- | ----------------- | --------------------------------------------------------------------------------------------------------------- |
| `size`         | `number` | `48`              | Width and height of the circular SVG container in pixels.                                                       |
| `amplitude`    | `number` | `1.6`             | Radial deviation (wave peak height) from the base ring radius in pixels.                                        |
| `maxAmplitude` | `number` | `amplitude`       | Radial space reserved for the wave amplitude. Keeps the base ring diameter consistent when amplitude modulates. |
| `wavelength`   | `number` | `15`              | Arc length period over which the wave pattern repeats in pixels.                                                |
| `strokeWidth`  | `number` | `4`               | Thickness of the SVG stroke line in pixels.                                                                     |
| `strokeColor`  | `string` | `"currentColor"`  | SVG stroke color. Accepts any valid CSS color string or CSS variable.                                           |
| `speed`        | `number` | `10 * wavelength` | Animation propagation speed in units per second. Setting `speed={0}` keeps the wave static.                     |
| `start`        | `number` | `0`               | Arc starting position in turns (`0` = 12 o'clock, `0.25` = 3 o'clock, `0.5` = 6 o'clock).                       |
| `end`          | `number` | `1`               | Arc ending position in turns. When `end - start >= 0.999`, the arc automatically closes into a continuous loop. |

### Usage

```tsx
import { SineCircular } from "@adgytec/web-ui-components";

// Full circular animated wavy ring
<SineCircular size={48} />

// Larger custom wavy ring with custom color
<SineCircular
    size={80}
    amplitude={2.5}
    wavelength={20}
    strokeWidth={6}
    strokeColor="var(--md-sys-color-tertiary)"
/>

// Partial arc (e.g. 50% circle / semicircle gauge from 12 o'clock to 6 o'clock)
<SineCircular
    size={48}
    start={0}
    end={0.5}
    strokeColor="var(--md-sys-color-primary)"
/>
```

---

## Utilities

### `ringRadius(size, strokeWidth, maxAmplitude)`

Helper function to calculate the inner base radius of the circular wave ring such that the stroke and wave crests remain fully contained within `size`:

```ts
import { ringRadius } from "@adgytec/web-ui-components";

const radius = ringRadius(48, 4, 1.6); // 16.4px
```

### `usePhase(speed)`

React hook that drives wave phase translation using `requestAnimationFrame`. Automatically respects `prefers-reduced-motion: reduce` (or `speed === 0`) by returning `0` and skipping the animation loop.

```tsx
import { usePhase } from "@adgytec/web-ui-components";

const phase = usePhase(40);
```

---

Generated by Gemini
