# Switch

## Configurable CSS Tokens

| Token                                           | Default Value                                   | Description                                                           |
| ----------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| `--md-switch-track-color`                       | `var(--md-sys-color-surface-container-highest)` | Background color of the track when unselected.                        |
| `--md-switch-selected-track-color`              | `var(--md-sys-color-primary)`                   | Background color of the track when selected.                          |
| `--md-switch-track-outline-color`               | `var(--md-sys-color-outline)`                   | Border outline color of the track when unselected.                    |
| `--md-switch-handle-color`                      | `var(--md-sys-color-outline)`                   | Color of the handle thumb when unselected at rest.                    |
| `--md-switch-selected-handle-color`             | `var(--md-sys-color-on-primary)`                | Color of the handle thumb when selected.                              |
| `--md-switch-handle-interaction-color`          | `var(--md-sys-color-on-surface-variant)`        | Color of the handle thumb during hover, focus, or press (unselected). |
| `--md-switch-selected-handle-interaction-color` | `var(--md-sys-color-primary-container)`         | Color of the handle thumb during hover, focus, or press (selected).   |
| `--md-switch-handle-icon-color`                 | `var(--md-sys-color-surface-container-highest)` | Color of the icon inside the handle when unselected.                  |
| `--md-switch-selected-handle-icon-color`        | `var(--md-sys-color-primary)`                   | Color of the icon inside the handle when selected.                    |
| `--md-switch-state-layer-color`                 | `var(--md-sys-color-on-surface)`                | State layer hover/focus/press tint color when unselected.             |
| `--md-switch-selected-state-layer-color`        | `var(--md-switch-selected-track-color)`         | State layer hover/focus/press tint color when selected.               |

The `Switch` component allows users to toggle between two states, such as On/Off. It implements [Material 3 Switches](https://m3.material.io/components/switch/overview), supporting animated sliding transitions, optional handle icons, and configurable label placement.

---

## Props

Extends [React Aria Components SwitchField](https://react-spectrum.adobe.com/react-aria/Switch.html) and accepts all of its props (e.g., `isSelected`, `defaultSelected`, `onChange`, `isDisabled`, `isReadOnly`, `name`, `value`).

| Prop             | Type                             | Default      | Description                                                                                         |
| ---------------- | -------------------------------- | ------------ | --------------------------------------------------------------------------------------------------- |
| `icon`           | `"none" \| "selected" \| "both"` | `"selected"` | Determines which states render an icon inside the switch handle (`"none"`, `"selected"`, `"both"`). |
| `labelPlacement` | `"start" \| "end"`               | `"start"`    | Placement of the label content relative to the switch track (`"start"` or `"end"`).                 |
| `selectedIcon`   | `LucideIcon`                     | `Check`      | Custom icon rendered inside the handle when the switch is selected.                                 |
| `unselectedIcon` | `LucideIcon`                     | `X`          | Custom icon rendered inside the handle when the switch is unselected (used when `icon="both"`).     |

---

## Usage

### 1. Basic Usage

```tsx
import { Switch } from "@adgytec/web-ui-components";

function BasicSwitch() {
    return <Switch>Notifications</Switch>;
}
```

### 2. Standalone Switch Without Label

```tsx
import { Switch } from "@adgytec/web-ui-components";

function StandaloneSwitch() {
    return <Switch aria-label="Toggle setting" />;
}
```

### 3. Icons for Both States (`icon="both"`)

```tsx
import { Switch } from "@adgytec/web-ui-components";

function BothIconsSwitch() {
    return <Switch icon="both">Airplane Mode</Switch>;
}
```

### 4. Custom Icons for On/Off States

```tsx
import { Switch } from "@adgytec/web-ui-components";
import { Moon, Sun } from "lucide-react";

function ThemeSwitch() {
    return (
        <Switch
            icon="both"
            selectedIcon={Moon}
            unselectedIcon={Sun}
            labelPlacement="end"
        >
            Dark Mode
        </Switch>
    );
}
```

### 5. Label Placement (`labelPlacement="end"`)

```tsx
import { Switch } from "@adgytec/web-ui-components";

function EndLabelSwitch() {
    return <Switch labelPlacement="end">Auto-sync Data</Switch>;
}
```

### 6. Controlled State & Form Submission

```tsx
import { useState } from "react";
import { Switch } from "@adgytec/web-ui-components";

function FormSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <Switch
            name="marketing_emails"
            value="subscribed"
            isSelected={isEnabled}
            onChange={setIsEnabled}
        >
            Receive marketing updates
        </Switch>
    );
}
```

---

## Internal Structure & Behavior

The `Switch` component coordinates several visual and interaction states:
- **Architecture**: Implemented on top of React Aria's `SwitchField` and `SwitchButton`, providing accessible semantics, form integration, and full keyboard navigation (Space/Enter toggle).
- **Handle Sizing & Morphing**:
  - Rest size: `16px` (no icon) or `24px` (when an icon is present).
  - Selected size: `24px`.
  - Pressed size: Expands to `28px` for tactile touch feedback.
- **State Layer**: A `40px` circular interaction state layer surrounds the handle, providing visual feedback on hover, focus-visible, and press.
- **Accessible Touch Target**: Incorporates `TapTarget` utility, ensuring minimum `48px` touch target compliance on the track regardless of visual track dimensions (`52px` x `32px`).
- **Motion & Reduced Motion**: Smooth expressive cubic bezier transitions for thumb sliding translate, color changes, and size morphing, with `@media (prefers-reduced-motion)` fallbacks.

---

Generated by Gemini
