# Field

## Configurable CSS Tokens

| Token                              | Default Value                                   | Description                                           |
| ---------------------------------- | ----------------------------------------------- | ----------------------------------------------------- |
| `--md-field-color`                 | `var(--md-sys-color-on-surface)`                | Primary text and content color within the field.      |
| `--md-field-infix-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of icons, buttons, and infix elements.          |
| `--md-field-background-color`      | `var(--md-sys-color-surface-container-highest)` | Background color for the filled variant.              |
| `--md-field-focused-outline-color` | `var(--md-sys-color-primary)`                   | Color of the outline when focused.                    |
| `--md-field-group-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of supporting text (label, description, error). |

The `Field` module provides composable building blocks implementing [Material 3 Text Field](https://m3.material.io/components/text-fields/overview) container styling, accessibility state distribution, and supporting text layouts. It forms the foundation for `TextField`, `TextAreaField`, `NumberField`, `DateField`, `TimeField`, and `DatePicker`.

## Building Blocks

The module consists of the following components and utilities:
1. `Field`: Visual container rendering background, outlines, hover/focus state layers, and slots for `leading` and `trailing` elements.
2. `FieldGroup`: Structural layout grouping `Label`, the interactive `Field`, and supporting `Description` or `FieldError`.
3. `FieldButton`: An icon button preconfigured with standard sizing and colors for embedding inside a `Field`.
4. `FieldIcon`: An icon wrapper preconfigured for placement inside a `Field`.
5. `FieldNode`: A layout container for embedding custom non-button elements (such as color swatches, badges, or custom indicators) inside a `Field` with consistent 40px block sizing.
6. `DateInput` & `DateSegment`: Composable segmented date and time editor components.
7. `CharacterCount`: Renders character counter in `current / max` format.
8. `Label`, `Description`, `FieldError`: Accessible typography elements for labels, hints, and error validation messages.

## Props

### Field Props

Extends React Aria's `Group` props (`React.ComponentPropsWithRef<typeof Group>`).

| Prop       | Type                     | Default    | Description                                           |
| ---------- | ------------------------ | ---------- | ----------------------------------------------------- |
| `variant`  | `"filled" \| "outlined"` | `"filled"` | Visual styling variant of the container.              |
| `leading`  | `ReactNode`              | —          | Leading element (e.g. `FieldIcon` or `FieldButton`).  |
| `trailing` | `ReactNode`              | —          | Trailing element (e.g. `FieldButton` or `FieldIcon`). |

### FieldGroup Props

Extends `React.ComponentPropsWithRef<"div">`.

| Prop                   | Type                                                | Default | Description                                        |
| ---------------------- | --------------------------------------------------- | ------- | -------------------------------------------------- |
| `label`                | `ReactNode`                                         | —       | Accessible label content.                          |
| `description`          | `ReactNode`                                         | —       | Supporting hint text.                              |
| `errorMessage`         | `ReactNode \| ((v: ValidationResult) => ReactNode)` | —       | Validation error message.                          |
| `isInvalid`            | `boolean`                                           | —       | Whether the grouped field is in an invalid state.  |
| `isDisabled`           | `boolean`                                           | —       | Whether the grouped field is disabled.             |
| `hasLeading`           | `boolean`                                           | `false` | Adjusts padding for fields with leading elements.  |
| `hasTrailing`          | `boolean`                                           | `false` | Adjusts padding for fields with trailing elements. |
| `renderFieldErrorComp` | `boolean`                                           | `true`  | Whether to render the `FieldError` element.        |

## Usage Example (Custom Field Composition)

```tsx
import {
    Field,
    FieldGroup,
    FieldIcon,
    focusOnPointerDown,
    FieldEditorColorStyles,
    FieldTypography,
    UnsetFieldStyles,
} from "@adgytec/web-ui-components";
import { Search } from "lucide-react";
import { useRef } from "react";
import { Input } from "react-aria-components";
import clsx from "clsx";

export const CustomSearchField = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <FieldGroup label="Search">
            <Field
                variant="outlined"
                leading={<FieldIcon icon={Search} />}
                onPointerDown={focusOnPointerDown(inputRef)}
            >
                <Input
                    ref={inputRef}
                    placeholder="Type to search..."
                    className={clsx(
                        UnsetFieldStyles,
                        FieldEditorColorStyles,
                        FieldTypography
                    )}
                />
            </Field>
        </FieldGroup>
    );
};
```


Generated by Gemini
