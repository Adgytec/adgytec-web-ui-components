# Checkbox

## Configurable CSS Tokens

| Token                                      | Default Value                            | Description                                                                  |
| ------------------------------------------ | ---------------------------------------- | ---------------------------------------------------------------------------- |
| `--md-checkbox-outline-color`              | `var(--md-sys-color-on-surface-variant)` | Border outline color of the checkbox when unselected.                        |
| `--md-checkbox-container-color`            | `var(--md-sys-color-primary)`            | Background fill color of the checkbox container when selected/indeterminate. |
| `--md-checkbox-interaction-outline-color`  | `var(--md-sys-color-on-surface)`         | Border outline color when hovered, pressed, or focused (unselected).         |
| `--md-checkbox-icon-color`                 | `var(--md-sys-color-on-primary)`         | Color of the checkmark or indeterminate mark icon.                           |
| `--md-checkbox-state-layer-color`          | `var(--md-sys-color-on-surface)`         | Color of the interaction state layer (ripple) in unselected state.           |
| `--md-checkbox-selected-state-layer-color` | `var(--md-checkbox-container-color)`     | Color of the interaction state layer (ripple) in selected state.             |

The `Checkbox` component is an implementation of [Material 3 Checkboxes](https://m3.material.io/components/checkbox/overview). It allows users to select one or more items from a set, or toggle an individual binary/indeterminate option.

---

## Components

- **`Checkbox`**: An individual checkbox control built on React Aria's `CheckboxField` and `CheckboxButton`, supporting checked, unchecked, and indeterminate states.
- **`CheckboxGroup`**: A parent container managing multiple selection values, accessible group labels, helper descriptions, and validation error messages.

---

## Props

### `Checkbox`

Extends [React Aria Components CheckboxField](https://react-spectrum.adobe.com/react-aria/Checkbox.html#checkboxfield) and accepts all of its props (e.g., `isSelected`, `defaultSelected`, `isIndeterminate`, `onChange`, `value`, `name`, `isDisabled`, `isReadOnly`, `isInvalid`).

| Prop             | Type               | Default | Description                                                                                                    |
| ---------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------- |
| `value`          | `string`           | —       | Value of the checkbox used in a `CheckboxGroup` or HTML form submission.                                       |
| `labelPlacement` | `"start" \| "end"` | `"end"` | Placement of the label relative to the checkbox indicator. Inherits from `CheckboxGroup` if nested in a group. |

### `CheckboxGroup`

Extends [React Aria Components CheckboxGroup](https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html) (omitting `children`) and [`CoreInputProps`](../core/types.ts). Accepts all standard group props (e.g., `value`, `defaultValue`, `onChange`, `name`, `isDisabled`, `isReadOnly`, `isRequired`, `isInvalid`).

| Prop                       | Type                                                | Default | Description                                                                                   |
| -------------------------- | --------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| `label`                    | `ReactNode`                                         | —       | The primary label displayed above the checkbox group.                                         |
| `description`              | `ReactNode`                                         | —       | Secondary helper text displayed below the group.                                              |
| `errorMessage`             | `ReactNode \| ((v: ValidationResult) => ReactNode)` | —       | Error message displayed when validation fails or `isInvalid` is true.                         |
| `labelPlacement`           | `"start" \| "end"`                                  | `"end"` | Default label placement applied to all child `Checkbox` items in the group.                   |
| `showDescriptionOnInvalid` | `boolean`                                           | `false` | When `true`, preserves helper description display even when the group is in an invalid state. |

---

## Usage

### 1. Basic Checkbox

```tsx
import { Checkbox } from "@adgytec/web-ui-components";

function AgreementCheckbox() {
    return <Checkbox>I accept the terms and conditions</Checkbox>;
}
```

### 2. Controlled State & Indeterminate Checkbox

```tsx
import { useState } from "react";
import { Checkbox } from "@adgytec/web-ui-components";

function IndeterminateExample() {
    const [selected, setSelected] = useState(false);
    const [isPartial, setIsPartial] = useState(true);

    return (
        <Checkbox
            isSelected={selected}
            isIndeterminate={isPartial}
            onChange={(checked) => {
                setSelected(checked);
                setIsPartial(false);
            }}
        >
            Select All Options
        </Checkbox>
    );
}
```

### 3. Checkbox Group

```tsx
import { useState } from "react";
import { CheckboxGroup, Checkbox } from "@adgytec/web-ui-components";

function NotificationPreferences() {
    const [preferences, setPreferences] = useState(["email", "push"]);

    return (
        <CheckboxGroup
            label="Notification Preferences"
            description="Choose how you would like to receive system alerts."
            value={preferences}
            onChange={setPreferences}
        >
            <Checkbox value="email">Email</Checkbox>
            <Checkbox value="sms">SMS</Checkbox>
            <Checkbox value="push">Push notifications</Checkbox>
        </CheckboxGroup>
    );
}
```

### 4. Label Placement (`labelPlacement="start"`)

```tsx
import { CheckboxGroup, Checkbox } from "@adgytec/web-ui-components";

function StartLabelCheckboxGroup() {
    return (
        <CheckboxGroup label="Settings" labelPlacement="start">
            <Checkbox value="analytics">Share anonymous usage data</Checkbox>
            <Checkbox value="telemetry" labelPlacement="end">
                Send diagnostic reports (end label)
            </Checkbox>
        </CheckboxGroup>
    );
}
```

### 5. Validation & Error Handling

```tsx
import { CheckboxGroup, Checkbox } from "@adgytec/web-ui-components";

function ValidatedCheckboxGroup() {
    return (
        <CheckboxGroup
            label="Required Consents"
            isRequired
            isInvalid
            errorMessage="You must accept at least one required consent option."
        >
            <Checkbox value="terms">Terms of Service</Checkbox>
            <Checkbox value="privacy">Privacy Policy</Checkbox>
        </CheckboxGroup>
    );
}
```

### 6. Disabled Checkbox

```tsx
import { Checkbox } from "@adgytec/web-ui-components";

function DisabledCheckbox() {
    return (
        <Checkbox isDisabled defaultSelected>
            Mandatory core feature (cannot be disabled)
        </Checkbox>
    );
}
```

---

## Internal Structure & Visual Behavior

The `Checkbox` and `CheckboxGroup` components coordinate several visual and interaction states:
- **Architecture**: `Checkbox` is implemented with React Aria's `CheckboxField` and `CheckboxButton`, ensuring complete HTML form compatibility, accessibility semantics, and keyboard navigation (Space/Enter toggle).
- **Indicator Dimensions**:
  - Container box: `18px` x `18px` square with `2px` rounded corners (`calc(2 * var(--dp, 1px))`).
  - Outline width: `2px` solid border at rest.
  - Icon: SVG checkmark (`polyline points="2 9 7 14 16 4"`) and indeterminate bar (`rect`), transitioning into view when selected.
- **State Layer**: A `40px` circular interaction state layer surrounds the indicator, providing visual feedback across hover, focus-visible, and press states.
- **Accessible Touch Target**: Incorporates `TapTarget` utility, ensuring minimum `48px` touch target compliance for accessibility.
- **Error States**: When `isInvalid` is true on the checkbox or group, the outline, background container, and state layer automatically shift to `--md-sys-color-error`.
- **Motion & Reduced Motion**: Smooth cubic-bezier transitions for background-color, border-color, and SVG path rendering, with `@media (prefers-reduced-motion)` fallbacks.

---

Generated by Gemini
