# Number Field

## Configurable CSS Tokens

| Token                              | Default Value                                   | Description                                           |
| ---------------------------------- | ----------------------------------------------- | ----------------------------------------------------- |
| `--md-field-color`                 | `var(--md-sys-color-on-surface)`                | Primary text and number color within the field.       |
| `--md-field-infix-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of stepper buttons and supporting icons.        |
| `--md-field-background-color`      | `var(--md-sys-color-surface-container-highest)` | Background color for the filled variant.              |
| `--md-field-focused-outline-color` | `var(--md-sys-color-primary)`                   | Color of the outline and caret when focused.          |
| `--md-field-group-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of supporting text (label, description, error). |

The `NumberField` component allows users to enter, increment, and decrement numerical values using keyboard input or arrow keys. It implements [Material 3 Text Fields](https://m3.material.io/components/text-fields/overview) with support for filled and outlined variants, custom stepper buttons, min/max constraints, step intervals, and internationalized number formatting.

## Props

The `NumberField` component extends [React Aria Components NumberField](https://react-spectrum.adobe.com/react-aria/NumberField.html) (excluding `children`).

| Prop           | Type                                                | Default    | Description                                                            |
| -------------- | --------------------------------------------------- | ---------- | ---------------------------------------------------------------------- |
| `label`        | `ReactNode`                                         | —          | The accessible label displayed above the number field.                 |
| `description`  | `ReactNode`                                         | —          | Informative supporting text displayed below the input.                 |
| `errorMessage` | `ReactNode \| ((v: ValidationResult) => ReactNode)` | —          | Error message displayed when validation fails.                         |
| `placeholder`  | `string`                                            | —          | Placeholder text displayed when the input is empty.                    |
| `variant`      | `"filled" \| "outlined"`                            | `"filled"` | Visual styling variant of the number field container.                  |
| `leading`      | `ReactNode`                                         | —          | Leading element (such as `FieldIcon` or `FieldButton`).                |
| `trailing`     | `ReactNode`                                         | —          | Trailing element (such as `FieldButton` or `FieldIcon`).               |
| `editorDir`    | `string`                                            | —          | Text directionality for the inner editor (`"ltr"`, `"rtl"`, `"auto"`). |
| `inputRef`     | `Ref<HTMLInputElement>`                             | —          | Ref passed directly to the underlying `<input>` element.               |

### Common React Aria Props

| Prop            | Type                       | Default | Description                                                                                      |
| --------------- | -------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `value`         | `number`                   | —       | The current value (controlled).                                                                  |
| `defaultValue`  | `number`                   | —       | The default value (uncontrolled).                                                                |
| `onChange`      | `(value: number) => void`  | —       | Handler called when the value changes.                                                           |
| `minValue`      | `number`                   | —       | The minimum permissible value.                                                                   |
| `maxValue`      | `number`                   | —       | The maximum permissible value.                                                                   |
| `step`          | `number`                   | `1`     | The amount to increment or decrement the value by when using arrow keys.                         |
| `formatOptions` | `Intl.NumberFormatOptions` | —       | Formatting options passed to `Intl.NumberFormat` (e.g., currency, percentages, unit, precision). |
| `isDisabled`    | `boolean`                  | `false` | Whether the input is disabled.                                                                   |
| `isReadOnly`    | `boolean`                  | `false` | Whether the input value is immutable.                                                            |
| `isRequired`    | `boolean`                  | `false` | Whether user input is required before form submission.                                           |
| `isInvalid`     | `boolean`                  | `false` | Whether the input is currently in an invalid state.                                              |

## Usage

### Basic NumberField (Filled - Default)

```tsx
import { NumberField } from "@adgytec/web-ui-components";

<NumberField
    label="Quantity"
    description="Select quantity between 1 and 100"
    defaultValue={1}
    minValue={1}
    maxValue={100}
/>;
```

### Outlined Variant with Currency Formatting

```tsx
import { NumberField } from "@adgytec/web-ui-components";

<NumberField
    variant="outlined"
    label="Amount"
    defaultValue={25}
    formatOptions={{
        style: "currency",
        currency: "USD",
    }}
/>;
```

## Internal Structure

`NumberField` is composed of modular field building blocks:
- `FieldGroup`: Handles outer layout, grouping label, input field, and supporting description or error.
- `Field`: Renders the visual container (filled background, borders, focus outline, state layers).


Generated by Gemini
