# Color Swatch

## Configurable CSS Tokens

| Token                     | Default Value                                                                      | Description                                            |
| ------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `--md-color-swatch-size`  | Derived from `size` (`var(--md-sys-layout-space-20)` to `48px`, default `24px`)    | Overrides the width and height of the color swatch.    |
| `--md-color-swatch-shape` | Derived from `shape` and `size` (round: full radius, square: extra-small to large) | Overrides the border-radius shape of the color swatch. |

The `ColorSwatch` component displays a visual preview of a single color value or color channel. It implements Material Design 3 shape and sizing tokens and builds on top of [React Aria Components ColorSwatch](https://react-spectrum.adobe.com/react-aria/ColorSwatch.html).

It provides automatic transparency rendering with a background checkerboard pattern for alpha-blended colors, supports 5 standardized Material 3 sizes, 2 shape variations (`round` and `square`), and seamlessly binds to the color state context when placed inside a `ColorField`, `ColorPicker`, or `ColorArea`.

## Props

The `ColorSwatch` component extends [React Aria Components ColorSwatch](https://react-spectrum.adobe.com/react-aria/ColorSwatch.html).

| Prop        | Type                                                               | Default   | Description                                                                  |
| ----------- | ------------------------------------------------------------------ | --------- | ---------------------------------------------------------------------------- |
| `size`      | `"extra-small" \| "small" \| "medium" \| "large" \| "extra-large"` | `"small"` | Size variant defining swatch dimensions and shape radii.                     |
| `shape`     | `"round" \| "square"`                                              | `"round"` | Geometric shape variant (`round` for circular, `square` for rounded square). |
| `color`     | `string \| Color`                                                  | Inherited | Color value to render (hex, rgb, hsl, hsb, or React Aria `Color` object).    |
| `className` | `string \| ((values) => string)`                                   | —         | Additional CSS class name or render function.                                |
| `style`     | `CSSProperties \| ((values) => CSSProperties)`                     | —         | Inline styles or style render function.                                      |

### Size & Shape Scale

| Size          | Dimensions    | Round Corner Radius                  | Square Corner Radius                                    |
| ------------- | ------------- | ------------------------------------ | ------------------------------------------------------- |
| `extra-small` | `20px x 20px` | `10px` (`calc(10 * var(--dp, 1px))`) | `var(--md-sys-shape-corner-radius-extra-small)` (`4px`) |
| `small`       | `24px x 24px` | `12px` (`calc(12 * var(--dp, 1px))`) | `var(--md-sys-shape-corner-radius-small)` (`8px`)       |
| `medium`      | `32px x 32px` | `16px` (`calc(16 * var(--dp, 1px))`) | `var(--md-sys-shape-corner-radius-medium)` (`12px`)     |
| `large`       | `40px x 40px` | `20px` (`calc(20 * var(--dp, 1px))`) | `var(--md-sys-shape-corner-radius-medium)` (`12px`)     |
| `extra-large` | `48px x 48px` | `24px` (`calc(24 * var(--dp, 1px))`) | `var(--md-sys-shape-corner-radius-large)` (`16px`)      |

## Usage

### Standalone Swatch

```tsx
import { ColorSwatch } from "@adgytec/web-ui-components";

// Round swatch with hex color
<ColorSwatch color="#6750a4" size="medium" shape="round" />

// Square swatch
<ColorSwatch color="#ffb703" size="medium" shape="square" />
```

### Size Variants

```tsx
import { ColorSwatch } from "@adgytec/web-ui-components";

<div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    <ColorSwatch color="#386a20" size="extra-small" />
    <ColorSwatch color="#386a20" size="small" />
    <ColorSwatch color="#386a20" size="medium" />
    <ColorSwatch color="#386a20" size="large" />
    <ColorSwatch color="#386a20" size="extra-large" />
</div>;
```

### Shapes

```tsx
import { ColorSwatch } from "@adgytec/web-ui-components";

<div style={{ display: "flex", gap: 12 }}>
    <ColorSwatch color="#b3261e" shape="round" size="large" />
    <ColorSwatch color="#b3261e" shape="square" size="large" />
</div>;
```

### Alpha & Transparency

When displaying colors with an alpha channel, `ColorSwatch` renders the semi-transparent color over a checkered background pattern.

```tsx
import { ColorSwatch } from "@adgytec/web-ui-components";

<ColorSwatch color="rgba(103, 80, 164, 0.5)" size="medium" shape="square" />;
```

### Embedded in ColorField via FieldNode

`ColorSwatch` automatically inherits color state when placed inside a `ColorField`. Use `FieldNode` to provide proper 40px block-size container alignment.

```tsx
import { ColorField, ColorSwatch, FieldNode } from "@adgytec/web-ui-components";

<ColorField
    label="Brand Color"
    description="Select or enter a hex color"
    defaultValue="#6750a4"
    leading={
        <FieldNode>
            <ColorSwatch size="small" shape="square" />
        </FieldNode>
    }
/>;
```

### In ColorSwatchPicker

When placed inside `ColorSwatchPickerItem`, `ColorSwatch` automatically inherits color, `shape`, and `size` from the parent [ColorSwatchPicker](../ColorSwatchPicker/color-swatch-picker.md) context without needing explicit props:

```tsx
import {
    ColorSwatch,
    ColorSwatchPicker,
    ColorSwatchPickerItem,
} from "@adgytec/web-ui-components";

<ColorSwatchPicker
    size="medium"
    shape="square"
    defaultValue="#6750a4"
    aria-label="Palette"
>
    <ColorSwatchPickerItem color="#6750a4" aria-label="Purple">
        <ColorSwatch />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem color="#2e6c31" aria-label="Green">
        <ColorSwatch />
    </ColorSwatchPickerItem>
</ColorSwatchPicker>;
```


Generated by Gemini
