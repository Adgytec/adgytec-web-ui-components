# Color Swatch Picker

## Configurable CSS Tokens

| Token                          | Default Value                   | Description                                    |
| ------------------------------ | ------------------------------- | ---------------------------------------------- |
| `--md-color-swatch-picker-gap` | `var(--md-sys-layout-space-16)` | Spacing gap between color swatch picker items. |

The `ColorSwatchPicker` component displays an accessible palette of selectable color swatches. It implements Material Design 3 guidelines on top of [React Aria Components ColorSwatchPicker](https://react-spectrum.adobe.com/react-aria/ColorSwatchPicker.html).

It automatically broadcasts `shape` (`round` or `square`) and `size` (`extra-small` through `extra-large`) presets to child [ColorSwatch](../ColorSwatch/color-swatch.md) elements through context, supports horizontal grid wrapping and vertical stack layouts, and features calibrated focus rings and dynamic high-contrast selection checkmarks.

## Components

- `ColorSwatchPicker`: Container component managing palette selection and propagating shape/size configurations.
- `ColorSwatchPickerItem`: Interactive item wrapping each color swatch with hover/pressed motion effects and selection indicators.

## Props

### ColorSwatchPicker Props

Extends [React Aria Components ColorSwatchPicker](https://react-spectrum.adobe.com/react-aria/ColorSwatchPicker.html).

| Prop           | Type                                                               | Default   | Description                                                                          |
| -------------- | ------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------------ |
| `size`         | `"extra-small" \| "small" \| "medium" \| "large" \| "extra-large"` | `"small"` | Sizing variant applied to descendant color swatches.                                 |
| `shape`        | `"round" \| "square"`                                              | `"round"` | Geometric shape variant applied to descendant color swatches.                        |
| `layout`       | `"grid" \| "stack"`                                                | `"grid"`  | Layout arrangement of swatch items (`grid` for horizontal flow, `stack` for column). |
| `value`        | `string \| Color`                                                  | —         | The current selected color value (controlled).                                       |
| `defaultValue` | `string \| Color`                                                  | —         | The initial selected color value (uncontrolled).                                     |
| `onChange`     | `(color: Color) => void`                                           | —         | Callback fired when the selected color changes.                                      |
| `aria-label`   | `string`                                                           | —         | Accessible label for the color swatch picker (recommended).                          |

### ColorSwatchPickerItem Props

Extends [React Aria Components ColorSwatchPickerItem](https://react-spectrum.adobe.com/react-aria/ColorSwatchPicker.html#colorswatchpickeritem).

| Prop         | Type              | Default | Description                                                         |
| ------------ | ----------------- | ------- | ------------------------------------------------------------------- |
| `color`      | `string \| Color` | —       | The color value represented by this item. Required.                 |
| `isDisabled` | `boolean`         | `false` | Whether this specific color swatch item is disabled from selection. |
| `aria-label` | `string`          | —       | Accessible label for the specific color item.                       |

## Sizing & Shape Scale

When placed inside `ColorSwatchPicker`, child `ColorSwatch` components automatically adopt the picker's `size` and `shape` configurations:

| Size          | Dimensions    | Round Corner Radius                  | Square Corner Radius                                    |
| ------------- | ------------- | ------------------------------------ | ------------------------------------------------------- |
| `extra-small` | `20px x 20px` | `10px` (`calc(10 * var(--dp, 1px))`) | `var(--md-sys-shape-corner-radius-extra-small)` (`4px`) |
| `small`       | `24px x 24px` | `12px` (`calc(12 * var(--dp, 1px))`) | `var(--md-sys-shape-corner-radius-small)` (`8px`)       |
| `medium`      | `32px x 32px` | `16px` (`calc(16 * var(--dp, 1px))`) | `var(--md-sys-shape-corner-radius-medium)` (`12px`)     |
| `large`       | `40px x 40px` | `20px` (`calc(20 * var(--dp, 1px))`) | `var(--md-sys-shape-corner-radius-medium)` (`12px`)     |
| `extra-large` | `48px x 48px` | `24px` (`calc(24 * var(--dp, 1px))`) | `var(--md-sys-shape-corner-radius-large)` (`16px`)      |

Individual swatches can explicitly override the picker's preset by passing their own `size` or `shape` prop.

## Usage

### Basic Usage (Round, Grid)

```tsx
import {
    ColorSwatch,
    ColorSwatchPicker,
    ColorSwatchPickerItem,
} from "@adgytec/web-ui-components";

<ColorSwatchPicker defaultValue="#6750a4" aria-label="Brand colors">
    <ColorSwatchPickerItem color="#6750a4" aria-label="Purple">
        <ColorSwatch />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem color="#ba1a1a" aria-label="Red">
        <ColorSwatch />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem color="#2e6c31" aria-label="Green">
        <ColorSwatch />
    </ColorSwatchPickerItem>
</ColorSwatchPicker>;
```

### Square Shape & Sizing

```tsx
import {
    ColorSwatch,
    ColorSwatchPicker,
    ColorSwatchPickerItem,
} from "@adgytec/web-ui-components";

<ColorSwatchPicker
    shape="square"
    size="medium"
    defaultValue="#ffd700"
    aria-label="Preset colors"
>
    <ColorSwatchPickerItem color="#ffd700" aria-label="Yellow">
        <ColorSwatch />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem color="#0055ff" aria-label="Blue">
        <ColorSwatch />
    </ColorSwatchPickerItem>
</ColorSwatchPicker>;
```

### Controlled Selection

```tsx
import { useState } from "react";
import { parseColor, type Color } from "react-aria-components";
import {
    ColorSwatch,
    ColorSwatchPicker,
    ColorSwatchPickerItem,
} from "@adgytec/web-ui-components";

const [selectedColor, setSelectedColor] = useState<Color>(() =>
    parseColor("#0055ff")
);

<ColorSwatchPicker
    value={selectedColor}
    onChange={setSelectedColor}
    size="medium"
    aria-label="Theme selection"
>
    <ColorSwatchPickerItem color="#0055ff" aria-label="Blue">
        <ColorSwatch />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem color="#ffcc00" aria-label="Yellow">
        <ColorSwatch />
    </ColorSwatchPickerItem>
</ColorSwatchPicker>;
```

### Stack Layout (Vertical)

```tsx
import {
    ColorSwatch,
    ColorSwatchPicker,
    ColorSwatchPickerItem,
} from "@adgytec/web-ui-components";

<ColorSwatchPicker
    layout="stack"
    size="small"
    shape="square"
    defaultValue="#0284c7"
    aria-label="Vertical palette"
>
    <ColorSwatchPickerItem color="#0284c7" aria-label="Sky Blue">
        <ColorSwatch />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem color="#7c3aed" aria-label="Violet">
        <ColorSwatch />
    </ColorSwatchPickerItem>
</ColorSwatchPicker>;
```

### Disabled Items

```tsx
import {
    ColorSwatch,
    ColorSwatchPicker,
    ColorSwatchPickerItem,
} from "@adgytec/web-ui-components";

<ColorSwatchPicker defaultValue="#6750a4" aria-label="Color options">
    <ColorSwatchPickerItem color="#6750a4" aria-label="Active Purple">
        <ColorSwatch />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem color="#ba1a1a" isDisabled aria-label="Disabled Red">
        <ColorSwatch />
    </ColorSwatchPickerItem>
</ColorSwatchPicker>;
```

### Integration with ColorField within ColorPicker

```tsx
import { ColorPicker } from "react-aria-components";
import {
    ColorField,
    ColorSwatch,
    ColorSwatchPicker,
    ColorSwatchPickerItem,
    FieldNode,
} from "@adgytec/web-ui-components";

<ColorPicker defaultValue="#0055ff">
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <ColorField
            label="Theme Color"
            leading={
                <FieldNode>
                    <ColorSwatch shape="square" size="small" />
                </FieldNode>
            }
        />

        <ColorSwatchPicker size="small" aria-label="Color presets">
            <ColorSwatchPickerItem color="#0055ff" aria-label="Blue">
                <ColorSwatch />
            </ColorSwatchPickerItem>
            <ColorSwatchPickerItem color="#ffcc00" aria-label="Yellow">
                <ColorSwatch />
            </ColorSwatchPickerItem>
            <ColorSwatchPickerItem color="#6750a4" aria-label="Purple">
                <ColorSwatch />
            </ColorSwatchPickerItem>
        </ColorSwatchPicker>
    </div>
</ColorPicker>;
```


Generated by Gemini
