# ProgressSlider

## Configurable CSS Tokens

| Token                              | Default Value                             | Description                                                         |
| ---------------------------------- | ----------------------------------------- | ------------------------------------------------------------------- |
| `--md-slider-active-track-color`   | `var(--md-sys-color-primary)`             | Color of the active portion of the track and wavy sine wave stroke. |
| `--md-slider-inactive-track-color` | `var(--md-sys-color-secondary-container)` | Color of the inactive portion of the background track.              |
| `--md-slider-thumb-color`          | `var(--_md-slider-active-track-color)`    | Color of the slider thumb.                                          |

The `ProgressSlider` component is an expressive progress seeker inspired by modern media player scrubbers (such as the Material You / Android playback seeker). Built on [React Aria Components Slider](https://react-spectrum.adobe.com/react-aria/Slider.html), it combines precise interactive scrub control with dynamic, fluid sine wave animation along the active track.

### Features

- **Animated Wavy Track**: Features an animated sine wave along the active track segment powered by the mathematical [`SineLinear`](../Wave/wave.md) component.
- **Smooth Edge Transitions**: Wave amplitude dynamically attenuates near track boundaries (0–5% and 95–100%) to provide seamless visual transitions as the thumb approaches minimum or maximum limits.
- **Interactive Slider Thumb**: Uses the unified [`SliderThumb`](../Input/Slider/slider.md) component (`size="extra-small"`), styled with consistent focus indicator rings, state transitions, and responsive dragging feedback.
- **Wavy State Toggling**: The `wavy` prop allows toggling between animated wave motion (e.g. playing media) and a clean solid flat track (e.g. paused media).
- **Accessibility by Default**: Leverages React Aria Components `Slider` for comprehensive keyboard navigation (Arrow keys, Page Up/Down, Home, End), screen reader accessibility (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-orientation`), and high-visibility focus indicators.
- **Motion & Accessibility Conscious**: Automatically respects user preferences for reduced motion (`prefers-reduced-motion`) by disabling layout transitions.

> [!NOTE]
> **Wavy & Disabled States**:
> - When `wavy={true}` (default) and the slider is enabled, the active track renders an animated sine wave.
> - When `wavy={false}`, the active track renders as a flat solid rounded bar without wave motion.
> - When `isDisabled={true}`, wave animations are suppressed and the slider renders flat using disabled surface tokens regardless of the `wavy` prop value.

---

## Props

The `ProgressSlider` component extends [React Aria Components Slider](https://react-spectrum.adobe.com/react-aria/Slider.html) (omitting raw `children` and `orientation`, as it is designed specifically for horizontal media playback scrubbing).

| Prop              | Type                                                | Default | Description                                                                                      |
| ----------------- | --------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `value`           | `number`                                            | —       | The current value of the slider (controlled mode).                                               |
| `defaultValue`    | `number`                                            | —       | The default value of the slider (uncontrolled mode).                                             |
| `onChange`        | `(value: number) => void`                           | —       | Callback fired continuously as the value changes during dragging or keyboard input.              |
| `onChangeEnd`     | `(value: number) => void`                           | —       | Callback fired when scrubbing / dragging finishes.                                               |
| `minValue`        | `number`                                            | `0`     | The minimum permissible value.                                                                   |
| `maxValue`        | `number`                                            | `100`   | The maximum permissible value.                                                                   |
| `step`            | `number`                                            | `1`     | The step increment for value changes.                                                            |
| `wavy`            | `boolean`                                           | `true`  | Whether the active progress track renders an animated sine wave (`false` renders a flat bar).    |
| `isDisabled`      | `boolean`                                           | `false` | Whether the slider is disabled. Disables user interaction and renders flat disabled track/thumb. |
| `aria-label`      | `string`                                            | —       | Accessible text label for screen readers.                                                        |
| `aria-labelledby` | `string`                                            | —       | The ID of an element that labels the slider.                                                     |
| `className`       | `string \| ((values: SliderRenderProps) => string)` | —       | Custom CSS class names applied to the slider container.                                          |
| `style`           | `React.CSSProperties`                               | —       | Custom inline styles applied to the slider root element.                                         |

---

## Usage

### Basic Usage

```tsx
import { ProgressSlider } from "@adgytec/web-ui-components";

export function BasicProgressSlider() {
    return <ProgressSlider aria-label="Media progress" defaultValue={40} />;
}
```

### Media Player Seeker with Play/Pause State

Toggle between wavy and flat track states according to media playback status using the `wavy` prop:

```tsx
import { useState } from "react";
import { ProgressSlider } from "@adgytec/web-ui-components";

export function MediaPlayerScrubber() {
    const [currentTime, setCurrentTime] = useState(45);
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <div>
            <ProgressSlider
                aria-label="Playback seeker"
                minValue={0}
                maxValue={210}
                value={currentTime}
                onChange={setCurrentTime}
                wavy={isPlaying}
            />
            <button type="button" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
}
```

### Flat Track Mode (No Waves)

Setting `wavy={false}` renders a solid rounded bar along the active track without wave animations:

```tsx
import { ProgressSlider } from "@adgytec/web-ui-components";

export function FlatProgressSlider() {
    return (
        <ProgressSlider
            aria-label="Volume level"
            defaultValue={60}
            wavy={false}
        />
    );
}
```

### Disabled State

When disabled, interaction is blocked and both the track and thumb transition to disabled opacity tokens:

```tsx
import { ProgressSlider } from "@adgytec/web-ui-components";

export function DisabledProgressSlider() {
    return (
        <ProgressSlider aria-label="Disabled progress" value={50} isDisabled />
    );
}
```

### Custom Range and Step

```tsx
import { useState } from "react";
import { ProgressSlider } from "@adgytec/web-ui-components";

export function CustomRangeSlider() {
    const [value, setValue] = useState(250);

    return (
        <ProgressSlider
            aria-label="Custom range"
            minValue={100}
            maxValue={500}
            step={25}
            value={value}
            onChange={setValue}
        />
    );
}
```

### Custom Token Styling

Customize the slider's track and thumb colors locally using configurable CSS variables:

```css
.custom-progress-slider {
    --md-slider-active-track-color: #00897b;
    --md-slider-inactive-track-color: #b2dfdb;
    --md-slider-thumb-color: #004d40;
}
```

```tsx
import { ProgressSlider } from "@adgytec/web-ui-components";

export function CustomStyledSlider() {
    return (
        <ProgressSlider
            aria-label="Branded progress slider"
            defaultValue={70}
            className="custom-progress-slider"
        />
    );
}
```

Generated by Gemini
