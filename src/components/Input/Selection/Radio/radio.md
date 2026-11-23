# Radio

## Configurable CSS Tokens

| Token                                        | Default Value                            | Description                                                                   |
| -------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------- |
| `--md-radio-icon-color`                      | `var(--md-sys-color-on-surface-variant)` | Border color of the unselected radio indicator circle.                        |
| `--md-radio-selected-icon-color`             | `var(--md-sys-color-primary)`            | Color of the selected radio indicator dot and outer circle border.            |
| `--md-radio-interaction-icon-color`          | `var(--md-sys-color-on-surface)`         | Border color during hover, focus, or press when unselected.                   |
| `--md-radio-selected-interaction-icon-color` | `var(--_md-radio-selected-icon-color)`   | Border and dot color during hover, focus, or press when selected.             |
| `--md-radio-state-layer-color`               | `var(--md-sys-color-on-surface)`         | Color of the interaction state layer (hover/focus/press) in unselected state. |
| `--md-radio-selected-state-layer-color`      | `var(--_md-radio-selected-icon-color)`   | Color of the interaction state layer (hover/focus/press) in selected state.   |

The `Radio` component is an implementation of [Material 3 Radio Buttons](https://m3.material.io/components/radio-button/overview). It allows users to select a single option from a set of mutually exclusive choices.

---

## Components

- **`Radio`**: An individual radio item built on React Aria's `RadioField` and `RadioButton`, managing selection dot animation, state layers, and touch targets.
- **`RadioGroup`**: The parent container managing single-selection values, keyboard navigation arrow-key roving, accessible labels, helper descriptions, and validation error messages.

---

## Props

### `Radio`

Extends [React Aria Components RadioField](https://react-spectrum.adobe.com/react-aria/RadioGroup.html#radiofield) and accepts all of its props (e.g., `value`, `isDisabled`, `autoFocus`).

| Prop             | Type               | Default | Description                                                                                                   |
| ---------------- | ------------------ | ------- | ------------------------------------------------------------------------------------------------------------- |
| `value`          | `string`           | —       | **Required.** The unique value represented by the radio button within the group.                              |
| `labelPlacement` | `"start" \| "end"` | `"end"` | Placement of the label relative to the radio indicator. Inherits from `RadioGroup` if not explicitly defined. |

### `RadioGroup`

Extends [React Aria Components RadioGroup](https://react-spectrum.adobe.com/react-aria/RadioGroup.html) (omitting `children` and `orientation`) and [`CoreInputProps`](../core/types.ts). Accepts all standard group props (e.g., `value`, `defaultValue`, `onChange`, `name`, `isDisabled`, `isReadOnly`, `isRequired`, `isInvalid`).

| Prop                       | Type                                                | Default | Description                                                                                   |
| -------------------------- | --------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| `label`                    | `ReactNode`                                         | —       | The primary label displayed above the radio group.                                            |
| `description`              | `ReactNode`                                         | —       | Secondary helper text displayed below the group.                                              |
| `errorMessage`             | `ReactNode \| ((v: ValidationResult) => ReactNode)` | —       | Error message displayed when validation fails or `isInvalid` is true.                         |
| `labelPlacement`           | `"start" \| "end"`                                  | `"end"` | Default label placement applied to all child `Radio` items in the group.                      |
| `showDescriptionOnInvalid` | `boolean`                                           | `false` | When `true`, preserves helper description display even when the group is in an invalid state. |

---

## Usage

### 1. Basic Radio Group

```tsx
import { RadioGroup, Radio } from "@adgytec/web-ui-components";

function PlanSelector() {
    return (
        <RadioGroup
            label="Storage Plan"
            description="Select the plan that fits your cloud storage requirements."
            defaultValue="pro"
        >
            <Radio value="starter">Starter (5 GB)</Radio>
            <Radio value="pro">Pro (100 GB)</Radio>
            <Radio value="enterprise">Enterprise (Unlimited)</Radio>
        </RadioGroup>
    );
}
```

### 2. Controlled State

```tsx
import { useState } from "react";
import { RadioGroup, Radio } from "@adgytec/web-ui-components";

function ControlledRadio() {
    const [selected, setSelected] = useState("email");

    return (
        <RadioGroup
            label="Notification Method"
            value={selected}
            onChange={setSelected}
        >
            <Radio value="email">Email</Radio>
            <Radio value="sms">SMS</Radio>
            <Radio value="push">Push Notification</Radio>
        </RadioGroup>
    );
}
```

### 3. Label Placement (`labelPlacement="start"`)

```tsx
import { RadioGroup, Radio } from "@adgytec/web-ui-components";

function StartLabelRadioGroup() {
    return (
        <RadioGroup label="Label Placement" labelPlacement="start">
            <Radio value="left">Option with leading label</Radio>
            <Radio value="right" labelPlacement="end">
                Option with trailing label
            </Radio>
        </RadioGroup>
    );
}
```

### 4. Validation & Error Handling

```tsx
import { RadioGroup, Radio } from "@adgytec/web-ui-components";

function ValidatedRadioGroup() {
    return (
        <RadioGroup
            label="Accept Agreement"
            isInvalid
            errorMessage="You must accept the terms before proceeding."
        >
            <Radio value="accept">I agree to the Terms and Conditions</Radio>
            <Radio value="decline">I decline</Radio>
        </RadioGroup>
    );
}
```

### 5. Disabled State

```tsx
import { RadioGroup, Radio } from "@adgytec/web-ui-components";

function DisabledRadioGroup() {
    return (
        <RadioGroup label="Account Tier" isDisabled defaultValue="free">
            <Radio value="free">Free Tier</Radio>
            <Radio value="premium">Premium Tier</Radio>
        </RadioGroup>
    );
}
```

---

## Internal Structure & Visual Behavior

The `Radio` and `RadioGroup` components coordinate several visual and interaction states:
- **Architecture**: `RadioGroup` provides roving focus arrow-key navigation across radio items. Each item is wrapped in `RadioField` and `RadioButton` for robust HTML form and accessibility support.
- **Indicator Dimensions**:
  - Outer circle: `20px` diameter with a `2px` thick border.
  - Inner selection dot: `10px` diameter, centered within the outer circle.
  - Dot animation: Scales from `0` to `1` with standard Material 3 spatial motion when selected.
- **State Layer**: A `40px` circular interaction state layer surrounds the indicator, responding with expressive opacity layers to hover, focus-visible, and press interactions.
- **Accessible Touch Target**: Leverages `TapTarget` utility, ensuring minimum `48px` touch target compliance for touch devices.
- **Error States**: When `isInvalid` is true on the radio item or parent group, indicator and state layer tokens adapt to `--md-sys-color-error`.
- **Motion & Reduced Motion**: Scaling transitions for the indicator dot and color transitions adapt gracefully with `@media (prefers-reduced-motion)` fallbacks.

---

Generated by Gemini
