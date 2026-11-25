# Text Field

## Configurable CSS Tokens

| Token                              | Default Value                                   | Description                                             |
| ---------------------------------- | ----------------------------------------------- | ------------------------------------------------------- |
| `--md-field-color`                 | `var(--md-sys-color-on-surface)`                | Primary text and content color within the field.        |
| `--md-field-infix-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of icons, buttons, prefixes, and suffixes.        |
| `--md-field-background-color`      | `var(--md-sys-color-surface-container-highest)` | Background color for the filled variant.                |
| `--md-field-focused-outline-color` | `var(--md-sys-color-primary)`                   | Color of the outline and caret when focused.            |
| `--md-field-group-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of supporting text (label, description, counter). |

The `TextField` component allows users to enter and edit single-line text. It implements [Material 3 Text Fields](https://m3.material.io/components/text-fields/overview) with support for filled and outlined variants, leading and trailing icons, interactive buttons, prefixes, suffixes, and character counters.

## Props

The `TextField` component extends [React Aria Components TextField](https://react-spectrum.adobe.com/react-aria/TextField.html) (excluding `children`).

| Prop                 | Type                                                | Default    | Description                                                            |
| -------------------- | --------------------------------------------------- | ---------- | ---------------------------------------------------------------------- |
| `label`              | `ReactNode`                                         | —          | The accessible label displayed above the text input.                   |
| `description`        | `ReactNode`                                         | —          | Informative supporting text displayed below the input.                 |
| `errorMessage`       | `ReactNode \| ((v: ValidationResult) => ReactNode)` | —          | Error message displayed when validation fails.                         |
| `placeholder`        | `string`                                            | —          | Placeholder text displayed when the input is empty.                    |
| `variant`            | `"filled" \| "outlined"`                            | `"filled"` | Visual styling variant of the input container.                         |
| `leading`            | `ReactNode`                                         | —          | Leading element (such as `FieldIcon` or `FieldButton`).                |
| `trailing`           | `ReactNode`                                         | —          | Trailing element (such as `FieldButton` or `FieldIcon`).               |
| `prefix`             | `ReactNode`                                         | —          | Content or text prefix displayed immediately before the editor input.  |
| `suffix`             | `ReactNode`                                         | —          | Content or text suffix displayed immediately after the editor input.   |
| `showCharacterCount` | `boolean`                                           | `false`    | Whether to display the character counter (requires `maxLength`).       |
| `editorDir`          | `string`                                            | —          | Text directionality for the inner editor (`"ltr"`, `"rtl"`, `"auto"`). |
| `inputRef`           | `Ref<HTMLInputElement>`                             | —          | Ref passed directly to the underlying `<input>` element.               |

### Common React Aria Props

| Prop           | Type                      | Default | Description                                            |
| -------------- | ------------------------- | ------- | ------------------------------------------------------ |
| `value`        | `string`                  | —       | The current value (controlled).                        |
| `defaultValue` | `string`                  | —       | The default value (uncontrolled).                      |
| `onChange`     | `(value: string) => void` | —       | Handler called when the value changes.                 |
| `type`         | `string`                  | —       | The HTML input type (e.g. `"text"`, `"email"`).        |
| `maxLength`    | `number`                  | —       | Maximum number of characters allowed.                  |
| `isDisabled`   | `boolean`                 | `false` | Whether the input is disabled.                         |
| `isReadOnly`   | `boolean`                 | `false` | Whether the input value is immutable.                  |
| `isRequired`   | `boolean`                 | `false` | Whether user input is required before form submission. |
| `isInvalid`    | `boolean`                 | `false` | Whether the input is currently in an invalid state.    |

## Usage

### Basic Filled Variant (Default)

```tsx
import { TextField } from "@adgytec/web-ui-components";

<TextField
    label="Email"
    placeholder="you@example.com"
    type="email"
    isRequired
/>;
```

### Outlined Variant with Leading Icon

```tsx
import { TextField, FieldIcon } from "@adgytec/web-ui-components";
import { Mail } from "lucide-react";

<TextField
    variant="outlined"
    label="Email Address"
    placeholder="you@example.com"
    leading={<FieldIcon icon={Mail} />}
/>;
```

### With Character Counter

```tsx
import { TextField } from "@adgytec/web-ui-components";

<TextField
    label="Bio"
    placeholder="Short bio"
    maxLength={100}
    showCharacterCount
/>;
```

### With Prefix and Suffix

```tsx
import { TextField } from "@adgytec/web-ui-components";

<TextField label="Price" prefix="$" suffix="USD" placeholder="0.00" />;
```

## Internal Structure

`TextField` is composed of modular field building blocks:
- `FieldGroup`: Handles outer layout, grouping the label, interactive field, and supporting description or error.
- `Field`: Renders the visual container (filled background, borders, focus outline, state layers).
- `CharacterCount`: Displays current count versus maximum length.


Generated by Gemini
