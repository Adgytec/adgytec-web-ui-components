# Color Field

## Configurable CSS Tokens

| Token                              | Default Value                                   | Description                                           |
| ---------------------------------- | ----------------------------------------------- | ----------------------------------------------------- |
| `--md-field-color`                 | `var(--md-sys-color-on-surface)`                | Primary text and content color within the field.      |
| `--md-field-infix-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of icons, swatches, and placeholder text.       |
| `--md-field-background-color`      | `var(--md-sys-color-surface-container-highest)` | Background color for the filled variant.              |
| `--md-field-focused-outline-color` | `var(--md-sys-color-primary)`                   | Color of the outline and caret when focused.          |
| `--md-field-group-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of supporting text (label, description, error). |

The `ColorField` component allows users to enter, view, and edit color values (such as hex codes or color channel numbers) with automatic keyboard validation and color parsing. It implements [Material 3 Text Fields](https://m3.material.io/components/text-fields/overview) with support for filled and outlined variants, interactive color swatches, icons, and error handling.

## Props

The `ColorField` component extends [React Aria Components ColorField](https://react-spectrum.adobe.com/react-aria/ColorField.html) (excluding `children`).

| Prop           | Type                                                | Default    | Description                                                              |
| -------------- | --------------------------------------------------- | ---------- | ------------------------------------------------------------------------ |
| `label`        | `ReactNode`                                         | —          | The accessible label displayed above the color field.                    |
| `description`  | `ReactNode`                                         | —          | Informative supporting text displayed below the input.                   |
| `errorMessage` | `ReactNode \| ((v: ValidationResult) => ReactNode)` | —          | Error message displayed when validation fails.                           |
| `placeholder`  | `string`                                            | —          | Placeholder text displayed when the input is empty.                      |
| `variant`      | `"filled" \| "outlined"`                            | `"filled"` | Visual styling variant of the color field container.                     |
| `leading`      | `ReactNode`                                         | —          | Leading element (such as `ColorSwatch`, `FieldIcon`, or `FieldButton`).  |
| `trailing`     | `ReactNode`                                         | —          | Trailing element (such as `FieldButton`, `FieldIcon`, or `ColorSwatch`). |
| `inputRef`     | `Ref<HTMLInputElement>`                             | —          | Ref passed directly to the underlying `<input>` element.                 |

### Common React Aria Props

| Prop           | Type                             | Default | Description                                             |
| -------------- | -------------------------------- | ------- | ------------------------------------------------------- |
| `value`        | `Color \| string`                | —       | The current color value (controlled).                   |
| `defaultValue` | `Color \| string`                | —       | The default color value (uncontrolled).                 |
| `onChange`     | `(color: Color \| null) => void` | —       | Handler called when the color value changes.            |
| `channel`      | `ColorChannel`                   | —       | Specific color channel to edit (e.g. `"hex"`, `"red"`). |
| `isDisabled`   | `boolean`                        | `false` | Whether the input is disabled.                          |
| `isReadOnly`   | `boolean`                        | `false` | Whether the input value is immutable.                   |
| `isRequired`   | `boolean`                        | `false` | Whether user input is required before form submission.  |
| `isInvalid`    | `boolean`                        | `false` | Whether the input is currently in an invalid state.     |

## Usage

### Basic ColorField with ColorSwatch (Filled - Default)

```tsx
import { ColorField, ColorSwatch, FieldNode } from "@adgytec/web-ui-components";

<ColorField
    label="Theme Color"
    description="Choose a hex color code"
    defaultValue="#6750a4"
    leading={
        <FieldNode>
            <ColorSwatch size="small" shape="square" />
        </FieldNode>
    }
/>;
```

### Outlined Variant with Leading Icon

```tsx
import { ColorField, FieldIcon } from "@adgytec/web-ui-components";
import { Palette } from "lucide-react";

<ColorField
    variant="outlined"
    label="Accent Color"
    defaultValue="#9c27b0"
    leading={<FieldIcon icon={Palette} />}
/>;
```

### Controlled Usage

```tsx
import { ColorField } from "@adgytec/web-ui-components";
import { parseColor } from "react-aria-components";
import { useState } from "react";

const [color, setColor] = useState(() => parseColor("#386a20"));

<ColorField
    label="Brand Color"
    value={color}
    onChange={(c) => c && setColor(c)}
/>;
```

## Internal Structure

`ColorField` is composed of modular field building blocks:
- `FieldGroup`: Handles outer layout, grouping the label, interactive field, and supporting description or error.
- `Field`: Renders the visual container (filled background, borders, focus outline, state layers).
- `Input`: Unset text input field styled with field typography and color tokens.
- `ColorSwatch`: Integrates seamlessly with React Aria's color state context for dynamic color display.


Generated by Gemini
