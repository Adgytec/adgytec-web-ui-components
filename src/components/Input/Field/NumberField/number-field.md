# Number Field

## Configurable CSS Tokens

| Token                                  | Default Value                                   | Description                                                  |
| -------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| `--md-textfield-focused-outline-color` | `var(--md-sys-color-primary)`                   | Color of the outline when the number field is focused.       |
| `--md-textfield-background`            | `var(--md-sys-color-surface-container-highest)` | Background color for the filled variant of the number field. |

The `NumberField` component allows users to enter, increment, and decrement numerical values using keyboard input, stepper buttons, or arrow keys. It implements Material 3 text field patterns with support for filled and outlined variants, custom stepper buttons, min/max constraints, step intervals, and internationalized number formatting.

## Props

The `NumberField` component extends [React Aria Components NumberField](https://react-spectrum.adobe.com/react-aria/NumberField.html) (excluding `children`).

| Prop                       | Type                                                | Default    | Description                                                                           |
| -------------------------- | --------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------- |
| `label`                    | `ReactNode`                                         | —          | The label for the number field.                                                       |
| `description`              | `ReactNode`                                         | —          | Help text displayed below the input.                                                  |
| `errorMessage`             | `ReactNode \| ((v: ValidationResult) => ReactNode)` | —          | Error message displayed when validation fails.                                        |
| `placeholder`              | `string`                                            | —          | Placeholder text displayed when the input is empty.                                   |
| `variant`                  | `"filled" \| "outlined"`                            | `"filled"` | Visual styling variant of the number field container.                                 |
| `showButton`               | `"none" \| "both" \| "increment" \| "decrement"`    | `"both"`   | Controls the visibility and placement of the increment and decrement stepper buttons. |
| `showDescriptionOnInvalid` | `boolean`                                           | `false`    | Whether to keep showing the description when the input is invalid.                    |

### Common React Aria Props

| Prop            | Type                       | Default | Description                                                                                      |
| --------------- | -------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `value`         | `number`                   | —       | The current value (controlled).                                                                  |
| `defaultValue`  | `number`                   | —       | The default value (uncontrolled).                                                                |
| `onChange`      | `(value: number) => void`  | —       | Handler called when the value changes.                                                           |
| `minValue`      | `number`                   | —       | The minimum permissible value.                                                                   |
| `maxValue`      | `number`                   | —       | The maximum permissible value.                                                                   |
| `step`          | `number`                   | `1`     | The amount to increment or decrement the value by when using stepper buttons or arrow keys.      |
| `formatOptions` | `Intl.NumberFormatOptions` | —       | Formatting options passed to `Intl.NumberFormat` (e.g., currency, percentages, unit, precision). |
| `isDisabled`    | `boolean`                  | `false` | Whether the input is disabled.                                                                   |
| `isReadOnly`    | `boolean`                  | `false` | Whether the input value is immutable.                                                            |
| `isRequired`    | `boolean`                  | `false` | Whether user input is required before form submission.                                           |
| `isInvalid`     | `boolean`                  | `false` | Whether the input is currently in an invalid state.                                              |

## Stepper Buttons

The `showButton` prop configures the stepper button controls:
- `"both"` (default): Renders a decrement button (`Minus` icon) on the leading (left) side and an increment button (`Plus` icon) on the trailing (right) side.
- `"increment"`: Renders only the increment button on the trailing side.
- `"decrement"`: Renders only the decrement button on the leading side.
- `"none"`: Renders without stepper buttons, presenting a clean numeric text field.

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

### Outlined Variant

```tsx
import { NumberField } from "@adgytec/web-ui-components";

<NumberField
    variant="outlined"
    label="Quantity"
    description="Enter total items"
    defaultValue={5}
    minValue={0}
/>;
```

### Stepper Button Configurations

```tsx
import { NumberField } from "@adgytec/web-ui-components";

// Both buttons (default)
<NumberField label="Both Steppers" showButton="both" defaultValue={10} />;

// Only increment button
<NumberField label="Increment Only" showButton="increment" defaultValue={10} />;

// Only decrement button
<NumberField label="Decrement Only" showButton="decrement" defaultValue={10} />;

// No stepper buttons
<NumberField label="No Steppers" showButton="none" defaultValue={10} />;
```

### Internationalized Number Formatting

`NumberField` leverages standard `Intl.NumberFormatOptions` via `formatOptions`:

```tsx
import { NumberField } from "@adgytec/web-ui-components";

// Currency
<NumberField
    label="Transaction Amount"
    defaultValue={49.99}
    formatOptions={{
        style: "currency",
        currency: "USD",
    }}
/>;

// Percentage
<NumberField
    label="Discount"
    defaultValue={0.15}
    step={0.01}
    minValue={0}
    maxValue={1}
    formatOptions={{
        style: "percent",
    }}
/>;

// Decimal precision
<NumberField
    label="Measurement"
    defaultValue={12.5}
    step={0.1}
    formatOptions={{
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
    }}
/>;
```

### Controlled Component

```tsx
import { useState } from "react";
import { NumberField } from "@adgytec/web-ui-components";

export function ControlledNumberField() {
    const [quantity, setQuantity] = useState(1);

    return (
        <NumberField
            label="Quantity"
            value={quantity}
            onChange={setQuantity}
            minValue={1}
            maxValue={50}
        />
    );
}
```

### Validation and Error States

```tsx
import { NumberField } from "@adgytec/web-ui-components";

<NumberField
    label="Age"
    minValue={18}
    defaultValue={16}
    isInvalid
    errorMessage="You must be at least 18 years old."
/>;
```

## Internal Structure

The `NumberField` component consists of:
- `AriaNumberField`: The accessible root container managing value state, keyboard stepping, and ARIA attributes.
- `AriaInput`: The editable text input element styled with `typography.bodyLarge` and unset browser defaults.
- `InputButton`: The stepper controls using Lucide icons (`Minus` for decrement with `slot="decrement"`, and `Plus` for increment with `slot="increment"`).
- `Label`: The accessible label above the input field.
- `Description`: Supporting help text displayed below the field.
- `FieldError`: Accessible error message displayed when validation fails.

It shares the core "TextField" styling patterns for its border, hover states, focus rings, and supporting text.


Generated by Gemini
