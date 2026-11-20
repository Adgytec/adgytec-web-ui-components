# Badge

## Configurable CSS Tokens

| Token                   | Default Value                  | Description                              |
| ----------------------- | ------------------------------ | ---------------------------------------- |
| `--md-badge-background` | `var(--md-sys-color-error)`    | Background color of the badge container. |
| `--md-badge-color`      | `var(--md-sys-color-on-error)` | Text and icon color inside the badge.    |

The `Badge` and `BadgeAnchor` components implement [Material 3 Badges](https://m3.material.io/components/badges/overview). Badges are visual indicators used to communicate dynamic status alerts, notifications, or numerical counts on or near navigation destinations, icons, buttons, and other interactive elements.

---

## Components

The Badge module consists of two components:
1. `Badge` - The visual badge component, rendering as either a compact 6px dot or an expressive pill badge displaying counts.
2. `BadgeAnchor` - A positioning container that anchors a `Badge` to the top-end corner of an element (such as an icon or button).

---

## Badge Props

Extends standard HTML `<span>` attributes (`React.ComponentPropsWithRef<"span">`), omitting raw `children`.

| Prop         | Type     | Default | Description                                                                                                                                                                          |
| ------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `count`      | `number` | —       | Numerical value displayed within the badge. When omitted (`undefined`), renders as a compact 6px dot badge. When provided, renders as an expressive pill badge displaying the count. |
| `overflowAt` | `number` | `1000`  | Numerical threshold where count overflows and displays a `+` suffix. Capped at `1000` (`MAX_OVERFLOW_AT`), displaying `999+` when count is greater than or equal to `overflowAt`.    |

---

## BadgeAnchor Props

Extends standard HTML `<span>` attributes (`React.ComponentPropsWithRef<"span">`).

| Prop       | Type        | Default | Description                                                                                                                  |
| ---------- | ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `badge`    | `ReactNode` | —       | Badge element (typically `Badge`) positioned at the top-end corner of children. The badge container is marked `aria-hidden`. |
| `children` | `ReactNode` | —       | Target element to anchor the badge to (e.g. `Icon`, `Button`, `Avatar`).                                                     |

---

## Integration with Navigation & Tabs

- **`NavigationButton` & `NavigationLink`**: Support a `badge` prop directly. In `"expanded"` navigation mode, the badge renders inline after the item label. In `"collapsed"` rail mode, the badge is automatically wrapped via `BadgeAnchor` and positioned over the icon.
- **`Tab`**: Badges can be embedded inside a `Tab`'s `label` prop to display unread counts on tab items.

---

## Usage

### 1. Small Dot Badge

Used as a subtle status indicator for unread notifications or new activity.

```tsx
import { Badge } from "@adgytec/web-ui-components";

<Badge />;
```

### 2. Numeric Count Badge

Displays an exact notification or item count with `typography.labelSmall`.

```tsx
import { Badge } from "@adgytec/web-ui-components";

<Badge count={5} />
<Badge count={42} />
```

### 3. Overflow Threshold

Controls the maximum number displayed before truncating with a `+` suffix.

```tsx
import { Badge } from "@adgytec/web-ui-components";

// Defaults to overflow at 1000 -> displays "999+"
<Badge count={1234} />

// Custom overflow threshold -> displays "99+"
<Badge count={150} overflowAt={100} />

// Overflow threshold of 50 -> displays "49+"
<Badge count={50} overflowAt={50} />
```

### 4. Anchoring to an Icon or Button with `BadgeAnchor`

Positions the badge over an icon or other control at the top-end corner.

```tsx
import { Badge, BadgeAnchor } from "@adgytec/web-ui-components";
import { Bell } from "lucide-react";

<BadgeAnchor badge={<Badge count={3} />}>
    <Bell size={24} />
</BadgeAnchor>;
```

### 5. In Navigation Items

Using `badge` directly on `NavigationLink` and `NavigationButton`.

```tsx
import {
    Badge,
    Navigation,
    NavigationLink,
    NavigationSection,
} from "@adgytec/web-ui-components";
import { Inbox, CreditCard } from "lucide-react";

<Navigation label="App">
    <NavigationSection>
        <NavigationLink
            href="/inbox"
            label="Inbox"
            icon={Inbox}
            badge={<Badge count={12} />}
        />
        <NavigationLink
            href="/billing"
            label="Billing"
            icon={CreditCard}
            badge={<Badge />}
        />
    </NavigationSection>
</Navigation>;
```

### 6. In Tabs

Embedding a badge in a tab header.

```tsx
import { Badge, Tab, TabList, Tabs } from "@adgytec/web-ui-components";
import { Bell } from "lucide-react";

<Tabs>
    <TabList aria-label="Notifications">
        <Tab
            id="notifications"
            label={
                <>
                    Notifications <Badge count={8} />
                </>
            }
            icon={Bell}
        />
    </TabList>
</Tabs>;
```

---

Generated by Gemini
