# Slider

## Configurable CSS Tokens

| Token                              | Default Value                                | Description                                         |
| ---------------------------------- | -------------------------------------------- | --------------------------------------------------- |
| `--md-slider-active-track-color`   | `var(--md-sys-color-primary)`                | Color of the active portion of the track.           |
| `--md-slider-inactive-track-color` | `var(--md-sys-color-secondary-container)`    | Color of the inactive portion of the track.         |
| `--md-slider-thumb-color`          | `--md-slider-active-track-color`             | Color of the slider thumb.                          |
| `--md-slider-active-stop-color`    | `var(--md-sys-color-on-primary)`             | Color of the step indicators on the active track.   |
| `--md-slider-inactive-stop-color`  | `var(--md-sys-color-on-secondary-container)` | Color of the step indicators on the inactive track. |
| `--md-slider-output-background`    | `var(--md-sys-color-inverse-surface)`        | Background color of the value tooltip/output.       |
| `--md-slider-output-color`         | `var(--md-sys-color-inverse-on-surface)`     | Text color of the value tooltip/output.             |

The `Slider` component allows users to make selections from a range of values. It implements [Material 3 Sliders](https://m3.material.io/components/sliders/overview) and supports single, range, and centered selection, custom steps, and icons.

## Components

- `Slider`: For selecting a single value.
- `RangeSlider`: For selecting a range of values (start and end).
- `CenteredSlider`: For selecting a single value relative to an anchor/center point.

## Props

All components extend [React Aria Components Slider](https://react-spectrum.adobe.com/react-aria/Slider.html).

### Common Props

| Prop                 | Type                                                               | Default   | Description                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`              | `ReactNode`                                                        | —         | The label for the slider.                                                                                                                                                                                   |
| `size`               | `"extra-small" \| "small" \| "medium" \| "large" \| "extra-large"` | `"small"` | The thickness of the track and size of the thumb.                                                                                                                                                           |
| `showInBetweenSteps` | `boolean`                                                          | `true`    | Whether to display indicators for each step.                                                                                                                                                                |
| `maxStops`           | `number`                                                           | 10        | Maximum number of step indicators to show (prevents overcrowding).                                                                                                                                          |
| `outputRenderer`     | `OutputRenderer`                                                   | —         | Custom renderer or node for the floating value bubble badge. Accepts a render function `({ state, thumbIndex }) => ReactNode`, a static `ReactNode`, or explicit `null` to hide the output bubble entirely. |

### `Slider` Specific Props

| Prop           | Type         | Description                                                            |
| -------------- | ------------ | ---------------------------------------------------------------------- |
| `thumbLabel`   | `string`     | Accessibility label for the thumb.                                     |
| `insetIcon`    | `LucideIcon` | An icon displayed within the track.                                    |
| `minInsetIcon` | `LucideIcon` | An alternative icon displayed when the slider is at its minimum value. |

### `RangeSlider` Specific Props

| Prop          | Type               | Description                                        |
| ------------- | ------------------ | -------------------------------------------------- |
| `thumbLabels` | `[string, string]` | Accessibility labels for the start and end thumbs. |

### `CenteredSlider` Specific Props

| Prop         | Type     | Description                        |
| ------------ | -------- | ---------------------------------- |
| `thumbLabel` | `string` | Accessibility label for the thumb. |

## Layout & Sizing

Sliders occupy 100% of their container's inline width (`inline-size: 100%`) by default. To maintain drag usability and prevent tracks from collapsing within flex or grid layouts, the track enforces a minimum dimension of `48px` (`var(--md-sys-layout-space-48)`):
- **Horizontal**: `min-inline-size: var(--md-sys-layout-space-48)` (48px)
- **Vertical**: `min-block-size: var(--md-sys-layout-space-48)` (48px)

## Usage

### Single Slider

```tsx
import { Slider } from "@adgytec/web-ui-components";
import { Volume1, Volume2 } from "lucide-react";

<Slider
    label="Volume"
    minValue={0}
    maxValue={100}
    defaultValue={50}
    size="medium"
    insetIcon={Volume2}
    minInsetIcon={Volume1}
/>;
```

### Range Slider

```tsx
import { RangeSlider } from "@adgytec/web-ui-components";

<RangeSlider
    label="Price Range"
    minValue={0}
    maxValue={1000}
    defaultValue={[200, 800]}
    step={10}
    showInBetweenSteps
    maxStops={20}
/>;
```

### Centered Slider

```tsx
import { CenteredSlider } from "@adgytec/web-ui-components";

<CenteredSlider
    label="Balance"
    minValue={-50}
    maxValue={50}
    defaultValue={0}
    step={5}
    showInBetweenSteps
/>;
```

### Disabling the Output Bubble

Pass `outputRenderer={null}` to suppress the floating value bubble:

```tsx
import { Slider } from "@adgytec/web-ui-components";

<Slider label="Volume" defaultValue={50} outputRenderer={null} />;
```

### Custom Output Formatting

Pass a render function to customize the value displayed inside the thumb tooltip:

```tsx
import { Slider, SliderOutput } from "@adgytec/web-ui-components";

<Slider
    label="Volume"
    defaultValue={50}
    outputRenderer={({ state, thumbIndex }) => (
        <SliderOutput>{state.getThumbValueLabel(thumbIndex)}%</SliderOutput>
    )}
/>;
```


Generated by Gemini
