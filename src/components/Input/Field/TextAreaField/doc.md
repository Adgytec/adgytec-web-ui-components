# Text Area Field

## Configurable CSS Tokens

| Token                              | Default Value                                   | Description                                              |
| ---------------------------------- | ----------------------------------------------- | -------------------------------------------------------- |
| `--md-text-area-max-block-size`    | `none`                                          | Maximum vertical height of the textarea.                 |
| `--md-text-area-max-inline-size`   | `none`                                          | Maximum horizontal width of the textarea.                |
| `--md-text-area-resize`            | `none`                                          | Controls user resizability (`none`, `vertical`, `both`). |
| `--md-field-color`                 | `var(--md-sys-color-on-surface)`                | Primary text and content color within the field.         |
| `--md-field-infix-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of supporting elements and caret.                  |
| `--md-field-background-color`      | `var(--md-sys-color-surface-container-highest)` | Background color for the filled variant.                 |
| `--md-field-focused-outline-color` | `var(--md-sys-color-primary)`                   | Color of the outline when focused.                       |
| `--md-field-group-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of supporting text (label, description, counter).  |

The `TextAreaField` component allows users to enter and edit multi-line text. It implements [Material 3 Text Fields](https://m3.material.io/components/text-fields/overview) with support for filled and outlined variants, custom rows and columns, labels, supporting descriptions, validation errors, and character counters.

## Props

The `TextAreaField` component extends [React Aria Components TextField](https://react-spectrum.adobe.com/react-aria/TextField.html) (excluding `children` and `type`).

| Prop                 | Type                                                | Default    | Description                                                      |
| -------------------- | --------------------------------------------------- | ---------- | ---------------------------------------------------------------- |
| `label`              | `ReactNode`                                         | —          | The accessible label displayed above the text area.              |
| `description`        | `ReactNode`                                         | —          | Informative supporting text displayed below the text area.       |
| `errorMessage`       | `ReactNode \| ((v: ValidationResult) => ReactNode)` | —          | Error message displayed when validation fails.                   |
| `placeholder`        | `string`                                            | —          | Placeholder text displayed when the text area is empty.          |
| `variant`            | `"filled" \| "outlined"`                            | `"filled"` | Visual styling variant of the container.                         |
| `rows`               | `number`                                            | —          | Visible height in lines of text.                                 |
| `cols`               | `number`                                            | —          | Visible width in average character widths.                       |
| `showCharacterCount` | `boolean`                                           | `false`    | Whether to display the character counter (requires `maxLength`). |
| `textAreaRef`        | `Ref<HTMLTextAreaElement>`                          | —          | Ref passed directly to the underlying `<textarea>` element.      |

### Common React Aria Props

| Prop           | Type                      | Default | Description                                            |
| -------------- | ------------------------- | ------- | ------------------------------------------------------ |
| `value`        | `string`                  | —       | The current text value (controlled).                   |
| `defaultValue` | `string`                  | —       | The default text value (uncontrolled).                 |
| `onChange`     | `(value: string) => void` | —       | Handler called when the text value changes.            |
| `maxLength`    | `number`                  | —       | Maximum number of characters allowed.                  |
| `isDisabled`   | `boolean`                 | `false` | Whether the text area is disabled.                     |
| `isReadOnly`   | `boolean`                 | `false` | Whether the text area is immutable.                    |
| `isRequired`   | `boolean`                 | `false` | Whether user input is required before form submission. |
| `isInvalid`    | `boolean`                 | `false` | Whether the input is currently in an invalid state.    |

## Usage

### Basic Filled Variant (Default)

```tsx
import { TextAreaField } from "@adgytec/web-ui-components";

<TextAreaField
    label="Comments"
    placeholder="Enter your feedback here..."
    rows={4}
    maxLength={500}
    showCharacterCount
/>;
```

### Outlined Variant

```tsx
import { TextAreaField } from "@adgytec/web-ui-components";

<TextAreaField
    variant="outlined"
    label="Description"
    description="Provide details about your experience."
    rows={6}
    isRequired
/>;
```

## Internal Structure

`TextAreaField` is composed of modular field building blocks:
- `FieldGroup`: Manages label, error message, supporting description, and character counter layout.
- `Field`: Renders container backgrounds, borders, and state layers for filled and outlined variants.
- `CharacterCount`: Displays current count and maximum character limit.


Generated by Gemini
