# Disclosure

## Configurable CSS Tokens

| Token                                 | Default                                      | Description                                                          |
| ------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| `--md-disclosure-color`               | `var(--md-sys-color-on-surface-variant)`     | Default foreground and icon color for the disclosure.                |
| `--md-disclosure-label-color`         | `var(--md-sys-color-on-surface)`             | Text color for the primary disclosure label (`DisclosureLabel`).     |
| `--md-disclosure-expanded-color`      | `var(--md-sys-color-on-secondary-container)` | Text, label, panel text, and icon color when disclosure is expanded. |
| `--md-disclosure-background`          | `var(--md-sys-color-surface)`                | Background color of the disclosure header and collapsed container.   |
| `--md-disclosure-expanded-background` | `var(--md-sys-color-secondary-container)`    | Background color of the disclosure header and panel when expanded.   |

The `Disclosure` component is used to show or hide content when an interactive header is clicked or activated. It is an implementation of [Material Design 3 Accordions](https://m3.material.io/components/cards/overview) (when grouped via `DisclosureGroup`) or standalone expand/collapse sections. It includes accessible keyboard navigation, fluid height transitions, Material touch ripple feedback (`Splash`), interactive state layers, dynamic corner radius morphing, and customizable design tokens.

---

## Components

The Disclosure module consists of:
1. `Disclosure` - The root container for an expandable item, managing expansion state, accessibility attributes (`aria-expanded`, `aria-controls`), and theme CSS variables.
2. `DisclosureGroup` - An accordion container for grouping multiple related `Disclosure` components, coordinating single or multi-expansion and joint corner shapes.
3. `DisclosureHeader` - The interactive trigger header component containing optional leading elements, the main label, and an animated trailing chevron icon.
4. `DisclosureLabel` - The primary label text component using `typography.titleMediumEmphasized` and transitioning theme colors.
5. `DisclosurePanel` - The collapsible content container with smooth height transitions and default `typography.bodyLarge`.
6. `DisclosureIcon` - A standardized 20px icon wrapper (aliased from `ListIcon`) that adapts to disclosure color states.

---

## DisclosureGroup Props

Extends [React Aria Components DisclosureGroup](https://react-spectrum.adobe.com/react-aria/Disclosure.html#disclosuregroup) (`React.ComponentPropsWithRef<typeof AriaDisclosureGroup>`).

| Prop                     | Type                       | Default | Description                                                                                                                           |
| ------------------------ | -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `allowsMultipleExpanded` | `boolean`                  | `false` | Whether multiple disclosures can be expanded simultaneously. When `false`, acts as an accordion where expanding one collapses others. |
| `expandedKeys`           | `Iterable<Key>`            | —       | The currently expanded keys in the group (controlled).                                                                                |
| `defaultExpandedKeys`    | `Iterable<Key>`            | —       | The initial expanded keys in the group (uncontrolled).                                                                                |
| `onExpandedChange`       | `(keys: Set<Key>) => void` | —       | Handler called when expanded keys change.                                                                                             |
| `isDisabled`             | `boolean`                  | `false` | Whether all disclosures in the group are disabled.                                                                                    |

### Accordion Shape Styling

When `Disclosure` components are nested inside a `DisclosureGroup`:
- **Connected items**: Disclosures within the group automatically receive extra-small corner radii (`--md-sys-shape-corner-radius-extra-small` = 4px) between adjacent items.
- **Container bounds**: The first disclosure inherits rounded top corners (`--_md-disclosure-group-shape` = 16px), and the last disclosure inherits rounded bottom corners.
- **Inter-item spacing**: Disclosures in the group are separated by a 2px gap (`calc(2 * var(--dp, 1px))`).

---

## Disclosure Props

Extends [React Aria Components Disclosure](https://react-spectrum.adobe.com/react-aria/Disclosure.html) (`React.ComponentPropsWithRef<typeof AriaDisclosure>`).

| Prop               | Type                            | Default | Description                                                                   |
| ------------------ | ------------------------------- | ------- | ----------------------------------------------------------------------------- |
| `isExpanded`       | `boolean`                       | —       | Whether the disclosure is expanded (controlled).                              |
| `defaultExpanded`  | `boolean`                       | `false` | Whether the disclosure is expanded by default (uncontrolled).                 |
| `onExpandedChange` | `(isExpanded: boolean) => void` | —       | Handler called when the expansion state changes.                              |
| `isDisabled`       | `boolean`                       | `false` | Whether the disclosure is disabled.                                           |
| `id`               | `Key`                           | —       | Unique identifier for the item (recommended when inside a `DisclosureGroup`). |

---

## DisclosureHeader Props

The interactive header rendered inside a `Disclosure`. Renders an accessible button trigger within a semantic heading.

| Prop      | Type        | Default | Description                                                                                    |
| --------- | ----------- | ------- | ---------------------------------------------------------------------------------------------- |
| `label`   | `ReactNode` | —       | **Required.** The primary label content of the header, typically wrapped in `DisclosureLabel`. |
| `leading` | `ReactNode` | —       | Optional leading element rendered at the start of the header, e.g. a `DisclosureIcon`.         |

### States & Interaction Details

- **Touch Ripple (`Splash`)**: Integrated with `useSplash` to display Material Design 3 ripple splash effects on press.
- **State Layers & Corner Morphing**:
  - **Rest**: Large corner radius (16px), or extra-small (4px) inside a `DisclosureGroup`.
  - **Hover (`data-hovered`)**: Morphs to medium corner radius (12px) with hover state layer opacity.
  - **Focus Visible (`data-focus-visible`)**: Displays focus state layer and a 3px secondary focus indicator ring.
  - **Pressed (`data-pressed`)**: Displays pressed state layer with large corner radius.
  - **Expanded (`data-expanded`)**: Top corners retain large radius (16px), while bottom corners flatten to 2px to align with the panel, separated by a 1px gap.
  - **Disabled (`data-disabled`)**: Applies disabled container opacity and dimmed content colors.
- **Trailing Chevron**: Automatically renders a `DisclosureIcon` rendering `ChevronDown` at the trailing edge (`margin-inline-start: auto`) that smoothly rotates 180° when expanded.

---

## DisclosureLabel Props

Extends [React Aria Components Text](https://react-spectrum.adobe.com/react-aria/Text.html) (`React.ComponentPropsWithRef<typeof Text>`).

- **Typography**: Uses `typography.titleMediumEmphasized`.
- **Colors & Transitions**: Dynamically styled with `--_md-disclosure-label-color`, smoothly animating between resting, expanded, and disabled colors.

---

## DisclosurePanel Props

Extends [React Aria Components DisclosurePanel](https://react-spectrum.adobe.com/react-aria/Disclosure.html#disclosurepanel) (`React.ComponentPropsWithRef<typeof AriaDisclosurePanel>`).

- **Typography**: Uses `typography.bodyLarge`.
- **Background & Colors**: Automatically synchronizes background color and text color with the disclosure's state tokens.
- **Shape**: Top corners are flattened (2px) and bottom corners are rounded (`16px`) to pair with the expanded header.
- **Height Animation**: Smoothly transitions height using React Aria's `--disclosure-panel-height` CSS custom property.
- **Internal Padding**: Automatically adds 16px horizontal and 10px vertical padding around children.

---

## DisclosureIcon Props

Extends `ListIcon` (`Omit<React.ComponentPropsWithRef<typeof Icon>, "size" | "withText">`).

| Prop   | Type                         | Default | Description                                        |
| ------ | ---------------------------- | ------- | -------------------------------------------------- |
| `icon` | `ComponentType<LucideProps>` | —       | **Required.** The Lucide icon component to render. |

- **Dimensions**: Standard 20px icon size (`size={20}`).
- **Colors**: Inherits current disclosure state color (`--_color: inherit`).

---

## Usage Examples

### Basic Disclosure

```tsx
import {
    Disclosure,
    DisclosureHeader,
    DisclosureLabel,
    DisclosurePanel,
} from "@adgytec/web-ui-components";

export const BasicExample = () => (
    <Disclosure>
        <DisclosureHeader
            label={<DisclosureLabel>Collapsible Section</DisclosureLabel>}
        />
        <DisclosurePanel>
            Detailed information displayed when expanded.
        </DisclosurePanel>
    </Disclosure>
);
```

### Disclosure with Leading Icon

```tsx
import { Shield } from "lucide-react";
import {
    Disclosure,
    DisclosureHeader,
    DisclosureIcon,
    DisclosureLabel,
    DisclosurePanel,
} from "@adgytec/web-ui-components";

export const LeadingIconExample = () => (
    <Disclosure>
        <DisclosureHeader
            leading={<DisclosureIcon icon={Shield} />}
            label={<DisclosureLabel>Security & Permissions</DisclosureLabel>}
        />
        <DisclosurePanel>
            Manage two-factor authentication, active sessions, and API keys.
        </DisclosurePanel>
    </Disclosure>
);
```

### Accordion (DisclosureGroup)

In default accordion mode (`allowsMultipleExpanded={false}`), expanding one section collapses any other open section:

```tsx
import {
    Disclosure,
    DisclosureGroup,
    DisclosureHeader,
    DisclosureLabel,
    DisclosurePanel,
} from "@adgytec/web-ui-components";

export const AccordionExample = () => (
    <DisclosureGroup defaultExpandedKeys={["item-1"]}>
        <Disclosure id="item-1">
            <DisclosureHeader
                label={<DisclosureLabel>Personal Information</DisclosureLabel>}
            />
            <DisclosurePanel>
                Update your name, email, and phone number.
            </DisclosurePanel>
        </Disclosure>

        <Disclosure id="item-2">
            <DisclosureHeader
                label={<DisclosureLabel>Billing Address</DisclosureLabel>}
            />
            <DisclosurePanel>
                Configure billing destination and payment methods.
            </DisclosurePanel>
        </Disclosure>

        <Disclosure id="item-3">
            <DisclosureHeader
                label={
                    <DisclosureLabel>Notification Preferences</DisclosureLabel>
                }
            />
            <DisclosurePanel>
                Choose email and push notification channels.
            </DisclosurePanel>
        </Disclosure>
    </DisclosureGroup>
);
```

### Multiple Expanded Accordion

Enable `allowsMultipleExpanded` to permit multiple disclosures to be open simultaneously:

```tsx
import {
    Disclosure,
    DisclosureGroup,
    DisclosureHeader,
    DisclosureLabel,
    DisclosurePanel,
} from "@adgytec/web-ui-components";

export const MultiAccordionExample = () => (
    <DisclosureGroup
        allowsMultipleExpanded
        defaultExpandedKeys={["faq-1", "faq-2"]}
    >
        <Disclosure id="faq-1">
            <DisclosureHeader
                label={
                    <DisclosureLabel>
                        What is the return policy?
                    </DisclosureLabel>
                }
            />
            <DisclosurePanel>
                You can return items within 30 days of purchase for a full
                refund.
            </DisclosurePanel>
        </Disclosure>

        <Disclosure id="faq-2">
            <DisclosureHeader
                label={
                    <DisclosureLabel>
                        How long does shipping take?
                    </DisclosureLabel>
                }
            />
            <DisclosurePanel>
                Standard shipping typically takes 3-5 business days.
            </DisclosurePanel>
        </Disclosure>
    </DisclosureGroup>
);
```

### Disabled State

Disclosures can be disabled individually or for the entire group:

```tsx
import { ShieldOff } from "lucide-react";
import {
    Disclosure,
    DisclosureHeader,
    DisclosureIcon,
    DisclosureLabel,
    DisclosurePanel,
} from "@adgytec/web-ui-components";

export const DisabledExample = () => (
    <>
        {/* Disabled collapsed */}
        <Disclosure isDisabled>
            <DisclosureHeader
                leading={<DisclosureIcon icon={ShieldOff} />}
                label={<DisclosureLabel>Restricted Settings</DisclosureLabel>}
            />
            <DisclosurePanel>This content cannot be opened.</DisclosurePanel>
        </Disclosure>

        {/* Disabled expanded */}
        <Disclosure isDisabled isExpanded>
            <DisclosureHeader
                leading={<DisclosureIcon icon={ShieldOff} />}
                label={<DisclosureLabel>Locked Open Section</DisclosureLabel>}
            />
            <DisclosurePanel>This content cannot be collapsed.</DisclosurePanel>
        </Disclosure>
    </>
);
```

### Custom Token Styling

Disclosures can be styled by overriding `--md-disclosure-*` CSS custom properties:

```tsx
import {
    Disclosure,
    DisclosureHeader,
    DisclosureLabel,
    DisclosurePanel,
} from "@adgytec/web-ui-components";

export const CustomThemedExample = () => (
    <Disclosure
        style={
            {
                "--md-disclosure-background":
                    "var(--md-sys-color-surface-container-low)",
                "--md-disclosure-expanded-background":
                    "var(--md-sys-color-primary-container)",
                "--md-disclosure-expanded-color":
                    "var(--md-sys-color-on-primary-container)",
            } as React.CSSProperties
        }
    >
        <DisclosureHeader
            label={<DisclosureLabel>Custom Highlight Section</DisclosureLabel>}
        />
        <DisclosurePanel>
            This section uses custom background and color tokens when expanded.
        </DisclosurePanel>
    </Disclosure>
);
```
