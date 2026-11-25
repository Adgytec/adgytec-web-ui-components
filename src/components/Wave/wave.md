# Wave

The `Wave` component family provides mathematical SVG sine wave generators designed for dynamic, fluid wave animations. They are used internally by components like [ProgressIndicator](../ProgressIndicator/progress-indicator.md) and [ProgressSlider](../ProgressSlider/progress-slider.md), and can be used directly for custom visual indicators, charts, loaders, and decorative effects.

All wave animations run via an optimized `requestAnimationFrame` loop using the `usePhase` hook.

## Components

- `SineLinear`: Renders an animated horizontal sine wave along a bounded track segment with fractional windowing.
- `SineCircular`: Renders an animated sine wave modulated along a circular arc or closed ring.
- `usePhase`: React hook that generates a continuous phase offset for animating waves.
- `useWidth`: React hook that measures container width using `ResizeObserver`.

---

## SineLinear

The `SineLinear` component renders a horizontal sine wave along a track with an explicit `width` and normalized segment bounds (`start` and `end`, from `0` to `1`). The wave oscillation is anchored to the track's coordinate space, ensuring that wave crests stay stationary in space even as boundaries expand or contract.

### Props

| Prop           | Type     | Default           | Description                                                                                                        |
| -------------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `width`        | `number` | —                 | Total width of the track in pixels. Required.                                                                      |
| `start`        | `number` | `0`               | Normalized start boundary of the visible segment as a fraction of track width (`0` to `1`).                        |
| `end`          | `number` | `1`               | Normalized end boundary of the visible segment as a fraction of track width (`0` to `1`).                          |
| `amplitude`    | `number` | `3`               | Peak vertical deviation (height) of the wave crest from its center line in pixels. `0` renders a flat line.        |
| `maxAmplitude` | `number` | `amplitude`       | Reserved maximum wave amplitude. Keeps the SVG height fixed (`2 * maxAmplitude + strokeWidth`) as amplitude fades. |
| `wavelength`   | `number` | `40`              | Spatial period over which the wave pattern repeats in pixels.                                                      |
| `strokeWidth`  | `number` | `4`               | Thickness of the SVG wave stroke line in pixels.                                                                   |
| `strokeColor`  | `string` | `"currentColor"`  | SVG stroke color. Accepts any valid CSS color string or CSS variable.                                              |
| `speed`        | `number` | `wavelength` (40) | Animation speed in units per second. Setting `speed={0}` disables animation and freezes the wave.                  |

### Usage

```tsx
import { SineLinear, useWidth } from "@adgytec/web-ui-components";

// Full-width animated horizontal sine wave inside a responsive container
export function ResponsiveWave() {
    const { ref, w } = useWidth();

    return (
        <div ref={ref} style={{ width: "100%", height: 24 }}>
            {w > 0 && <SineLinear width={w} />}
        </div>
    );
}

// Partial segment (e.g. 0% to 60%) with custom styling
<SineLinear
    width={300}
    start={0}
    end={0.6}
    amplitude={4}
    wavelength={50}
    strokeWidth={4}
    strokeColor="var(--md-sys-color-primary)"
/>

// Flat line segment (amplitude: 0, speed: 0)
<SineLinear
    width={300}
    start={0.6}
    end={1}
    amplitude={0}
    speed={0}
    strokeColor="var(--md-sys-color-secondary-container)"
/>
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

### `useWidth()`

React hook that measures and observes the client width of a container element using `ResizeObserver`.

Returns:
- `ref`: Ref to attach to the container `<div>`.
- `w`: Measured width of the element in pixels.

```tsx
import { SineLinear, useWidth } from "@adgytec/web-ui-components";

function WavyBar() {
    const { ref, w } = useWidth();
    return (
        <div ref={ref} style={{ width: "100%" }}>
            {w > 0 && <SineLinear width={w} />}
        </div>
    );
}
```

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
