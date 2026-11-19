# List

## Configurable CSS Tokens

| Token                                | Default                                      | Description                                                       |
| ------------------------------------ | -------------------------------------------- | ----------------------------------------------------------------- |
| `--md-list-color`                    | `var(--md-sys-color-on-surface-variant)`     | Default color for icons, overline, supporting, and trailing text. |
| `--md-list-label-color`              | `var(--md-sys-color-on-surface)`             | Text color for the primary item label.                            |
| `--md-list-selected-color`           | `var(--md-sys-color-on-secondary-container)` | Text and icon color when the list item is selected.               |
| `--md-list-item-background`          | `var(--md-sys-color-surface)`                | Default background color of a list item container.                |
| `--md-list-item-selected-background` | `var(--md-sys-color-secondary-container)`    | Background color of a selected list item container.               |
| `--md-list-avatar-background`        | `var(--md-sys-color-primary-container)`      | Background color of the `ListAvatar` container.                   |
| `--md-list-avatar-color`             | `var(--md-sys-color-on-primary-container)`   | Text and icon color inside `ListAvatar`.                          |

The `ListBox`, `GridListBox`, `ListItem`, and `GridListItem` components are an implementation of [Material 3 Lists](https://m3.material.io/components/lists/overview). Lists are continuous, vertical indexes of text and images. They display related items and make actions easy to find and perform. The module supports single and multiple selection, interactive state layers, touch ripple effects, rich media formats, and flexible slot-based composition.

---

## Components

The List module consists of twelve components:
1. `ListBox` - The main container component for option selection lists, coordinating items, vertical alignment, and keyboard navigation.
2. `ListItem` - The interactive list item component managing slots (`leading`, `overline`, `label`, `supporting`, `trailing`), selection state, and ripple feedback.
3. `GridListBox` - Container component using React Aria's `GridList`, supporting interactive row controls, row actions, keyboard navigation, and vertical alignment without the `layout` prop.
4. `GridListItem` - The interactive grid list item component using React Aria's `GridListItem`, sharing the same slots, selection handling, and styling as `ListItem`.
5. `ListLabelText` - The primary headline/label text component using `typography.bodyLarge`.
6. `ListSupportingText` - A secondary descriptive text component placed beneath the label using `typography.bodyMedium`.
7. `ListOverlineText` - An eyebrow/overline text component placed above the label using `typography.labelSmall`.
8. `ListTrailingText` - A metadata or trailing text component placed at the end of the item using `typography.labelSmall`.
9. `ListIcon` - A standardized 20px icon wrapper that adapts to the item's state colors.
10. `ListAvatar` - A circular 40px avatar container with `typography.titleMedium` for user initials or profile images.
11. `ListMedia` - A styled container for leading thumbnail images or videos (`image`, `video`, `large-video`).
12. `ListAction` - A pre-configured `IconButton` variant (`size="small"`, 48px touch target) for trailing actions.

### ListBox vs. GridListBox

| Feature                         | `ListBox` + `ListItem`                                                                 | `GridListBox` + `GridListItem`                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **ARIA Pattern**                | `listbox` (`role="listbox"`, `role="option"`)                                          | `grid` (`role="grid"`, `role="row"`, `role="gridcell"`)                                         |
| **Primary Use Case**            | Option lists where the entire row is selectable without independent focusable controls | Interactive lists with nested focusable controls (buttons, switches, checkboxes) or row actions |
| **Keyboard Navigation**         | Vertical arrow navigation through options (single tab stop)                            | Two-dimensional arrow navigation across rows and into interactive row child controls            |
| **Row Actions (`onAction`)**    | Supported for item activation                                                          | Supported (`onAction`), distinct from row selection                                             |
| **Nested Interactive Elements** | Discouraged by ARIA spec (items are single focus targets)                              | Fully supported with keyboard access to each action control                                     |
| **`ListLabelText` Slot**        | Binds to `slot="label"`                                                                | Slot is omitted (`undefined`) to match RAC `GridListItem` semantics                             |

---

## ListBox Props

Extends the [React Aria ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html) component and accepts all of its props (e.g., `selectionMode`, `selectedKeys`, `onSelectionChange`, `items`, `disabledKeys`), omitting the `layout` prop in favor of Material 3 vertical list styling.

| Prop                 | Type                                | Default    | Description                                                                                                                                                  |
| -------------------- | ----------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `alignY`             | `"start" \| "center" \| "end"`      | `"center"` | Vertical alignment of elements (`leading`, `trailing`, and content) across list items.                                                                       |
| `selectionIndicator` | `"leading" \| "trailing" \| "none"` | `"none"`   | Placement of the checkmark selection icon when list items are selected. Replaces `leading` or `trailing` content with a `ListIcon` rendering a `Check` icon. |

### Layout & Shape Behavior

- **Item spacing**: List items are spaced with a gap of `2px` (`calc(2 * var(--dp, 1px))`).
- **Rounded bounds**: The first and last items in the `ListBox` automatically inherit the list shape corner radius (`var(--md-sys-shape-corner-radius-large)`).
- **Responsive vertical alignment**: Controls `--md-list-align-y`, allowing elements to align to top (`start`), middle (`center`), or bottom (`end`).

---

## GridListBox Props

Extends the [React Aria GridList](https://react-spectrum.adobe.com/react-aria/GridList.html) component and accepts its props (e.g., `selectionMode`, `selectedKeys`, `onSelectionChange`, `items`, `disabledKeys`, `onAction`), omitting the `layout` prop in favor of Material 3 vertical list styling. Uses the same CSS and visual styling as `ListBox`.

| Prop                 | Type                                | Default    | Description                                                                                                                                                  |
| -------------------- | ----------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `alignY`             | `"start" \| "center" \| "end"`      | `"center"` | Vertical alignment of elements (`leading`, `trailing`, and content) across list items.                                                                       |
| `selectionIndicator` | `"leading" \| "trailing" \| "none"` | `"none"`   | Placement of the checkmark selection icon when list items are selected. Replaces `leading` or `trailing` content with a `ListIcon` rendering a `Check` icon. |

---

## ListItem Props

Extends the [React Aria ListBoxItem](https://react-spectrum.adobe.com/react-aria/ListBox.html#listboxitem) component, omitting `children`.

| Prop                 | Type                                | Default               | Description                                                                                                                                                   |
| -------------------- | ----------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`              | `ReactNode`                         | —                     | **Required.** The primary label element of the list item, typically `ListLabelText`.                                                                          |
| `leading`            | `ReactNode`                         | —                     | Element rendered at the start of the list item (e.g., `ListIcon`, `ListAvatar`, `ListMedia`, or a `Checkbox`).                                                |
| `overline`           | `ReactNode`                         | —                     | Small text rendered above the label, typically `ListOverlineText`.                                                                                            |
| `supporting`         | `ReactNode`                         | —                     | Secondary descriptive text rendered beneath the label, typically `ListSupportingText`.                                                                        |
| `trailing`           | `ReactNode[]`                       | —                     | An array of elements rendered at the end of the list item (e.g., `ListTrailingText`, `ListAction`, or a `Switch`).                                            |
| `selectionIndicator` | `"leading" \| "trailing" \| "none"` | Inherited or `"none"` | Overrides selection indicator placement for this item. Replaces the corresponding `leading` or `trailing` element with a `ListIcon` check icon when selected. |

### State & Selection Integration

- **Selection Indicator**: When `selectionIndicator="leading"` or `"trailing"` is configured on `ListBox` (or overridden on a `ListItem`), selecting an item dynamically replaces the corresponding `leading` or `trailing` container's content with a `ListIcon` rendering a `Check` icon.
- **Checkbox slot**: When an embedded `Checkbox` with `slot="selection"` is provided in `leading` or `trailing`, `ListItem` automatically connects it to its `isSelected` state via React Aria context provider. The control is marked `isReadOnly: true` and is disabled when `selectionMode === "none"` or the item is disabled, allowing row interactions to seamlessly control item selection.
- **Ripple Splash Layer**: Integrates with `useSplash` to display touch ripple feedback on press, confined within an internal `.splash` container with `overflow: clip` and `pointer-events: none` so that outer focus outlines and drop shadows remain unclipped.
- **Hardware-Accelerated Elevation**: When dragging an item, elevation shadow (`var(--md-sys-elevation-shadow-4)`) is rendered using a pseudo-element (`.list-item::after`) transitioning `opacity` rather than animating `box-shadow` directly, ensuring 60fps GPU acceleration.
- **State Layers**: Hover, focus, and pressed state layers are applied via a pseudo-element (`.list-item::before`) transitioning opacity (`--_state-layer-opacity`) directly.
- **Corner radius morphing**: Dynamically animates corner radius across interaction states (extra small at rest, medium on hover, large when selected, focused, or pressed).

---

## GridListItem Props

Extends the [React Aria GridListItem](https://react-spectrum.adobe.com/react-aria/GridList.html#gridlistitem) component, omitting `children`. Uses the same slot-based API, CSS styling, ripple effects, corner radius morphing, and selection integration as `ListItem`.

| Prop                 | Type                                | Default               | Description                                                                                                                                                   |
| -------------------- | ----------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`              | `ReactNode`                         | —                     | **Required.** The primary label element of the list item, typically `ListLabelText`.                                                                          |
| `leading`            | `ReactNode`                         | —                     | Element rendered at the start of the list item (e.g., `ListIcon`, `ListAvatar`, `ListMedia`, or a `Checkbox`).                                                |
| `overline`           | `ReactNode`                         | —                     | Small text rendered above the label, typically `ListOverlineText`.                                                                                            |
| `supporting`         | `ReactNode`                         | —                     | Secondary descriptive text rendered beneath the label, typically `ListSupportingText`.                                                                        |
| `trailing`           | `ReactNode[]`                       | —                     | An array of elements rendered at the end of the list item (e.g., `ListTrailingText`, `ListAction`, or a `Switch`).                                            |
| `selectionIndicator` | `"leading" \| "trailing" \| "none"` | Inherited or `"none"` | Overrides selection indicator placement for this item. Replaces the corresponding `leading` or `trailing` element with a `ListIcon` check icon when selected. |

---

## ListLabelText Props

Extends the [React Aria Text](https://react-spectrum.adobe.com/react-aria/Text.html) component, omitting the `slot` prop.

- Defaults to `slot="label"` within `ListBox` / `ListItem`.
- Automatically omits the `slot` prop (`undefined`) when rendered inside `GridListBox` / `GridListItem` to conform to React Aria's `GridListItem` requirements.
- Typography: `typography.bodyLarge`.
- Color: `--_md-list-label-color` (defaults to `var(--md-sys-color-on-surface)`).

---

## ListSupportingText Props

Extends the [React Aria Text](https://react-spectrum.adobe.com/react-aria/Text.html) component, omitting the `slot` prop.

- Defaults to `slot="description"`.
- Typography: `typography.bodyMedium`.
- Color: `--_md-list-color` (defaults to `var(--md-sys-color-on-surface-variant)`).

---

## ListOverlineText Props

Extends the [React Aria Text](https://react-spectrum.adobe.com/react-aria/Text.html) component.

- Typography: `typography.labelSmall`.
- Color: `--_md-list-color` (defaults to `var(--md-sys-color-on-surface-variant)`).

---

## ListTrailingText Props

Extends the [React Aria Text](https://react-spectrum.adobe.com/react-aria/Text.html) component.

- Typography: `typography.labelSmall`.
- Color: `--_md-list-color` (defaults to `var(--md-sys-color-on-surface-variant)`).

---

## ListIcon Props

Extends the custom `Icon` component, omitting `size` and `withText`.

- Hardcodes `size={20}`.
- Color dynamically matches the list item's text color (`var(--_md-list-color)`), smoothly transitioning between resting, hovered, and selected states.

---

## ListAvatar Props

Extends standard `<div>` HTML attributes (`React.ComponentPropsWithRef<"div">`).

- Dimensions: `40px` × `40px` (`var(--md-sys-layout-space-40)`).
- Circular shape (`border-radius: 50%`).
- Typography: `typography.titleMedium`.
- Children can be initials or an `<img>` tag (which automatically scales with `object-fit: cover`).

---

## ListMedia Props

Extends standard `<div>` HTML attributes (`React.ComponentPropsWithRef<"div">`).

| Prop      | Type                                  | Default   | Description                                   |
| --------- | ------------------------------------- | --------- | --------------------------------------------- |
| `variant` | `"image" \| "video" \| "large-video"` | `"image"` | The dimension preset for the media container. |

### Variant Dimensions & Exported Constants

| Variant       | Dimensions       | Exported Constants                                                 |
| ------------- | ---------------- | ------------------------------------------------------------------ |
| `image`       | `56px` × `56px`  | `ListMediaImageWidth = 56`, `ListMediaImageHeight = 56`            |
| `video`       | `100px` × `56px` | `ListMediaVideoWidth = 100`, `ListMediaVideoHeight = 56`           |
| `large-video` | `114px` × `64px` | `ListMediaLargeVideoWidth = 114`, `ListMediaLargeVideoHeight = 64` |

Embedded `<img>` and `<video>` elements automatically inherit rounded corners (`var(--md-sys-shape-corner-radius-small)`) and apply `object-fit: cover`.

---

## ListAction Props

Extends the custom `IconButton` component, omitting the `size` prop.

- Defaults to `color="standard"`.
- Hardcodes `size="small"` with an accessible `48px` × `48px` touch target.

---

## Usage

### 1. Basic List with Icons and Trailing Actions

A standard list displaying items with icons, overlines, labels, supporting descriptions, and action buttons.

```tsx
import {
    ListBox,
    ListItem,
    ListIcon,
    ListLabelText,
    ListOverlineText,
    ListSupportingText,
    ListAction,
} from "@adgytec/web-ui-components";
import { Mail, MoreVertical } from "lucide-react";

function InboxList() {
    return (
        <ListBox selectionMode="none">
            <ListItem
                id="item-1"
                leading={<ListIcon icon={Mail} />}
                overline={<ListOverlineText>Work</ListOverlineText>}
                label={<ListLabelText>Quarterly Planning</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        Discuss roadmap updates with the product team.
                    </ListSupportingText>
                }
                trailing={[
                    <ListAction
                        key="more"
                        icon={MoreVertical}
                        aria-label="More options"
                        onPress={() => console.log("Action pressed")}
                    />,
                ]}
            />
        </ListBox>
    );
}
```

### 2. Selection List with Checkbox and Switch

`ListItem` automatically synchronizes selection state with nested `Checkbox` or `Switch` components having `slot="selection"`.

```tsx
import {
    ListBox,
    ListItem,
    ListLabelText,
    ListSupportingText,
    Checkbox,
    Switch,
} from "@adgytec/web-ui-components";

function SettingsList() {
    return (
        <ListBox selectionMode="multiple">
            <ListItem
                id="notifications"
                leading={<Checkbox slot="selection" />}
                label={<ListLabelText>Enable Push Notifications</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        Receive real-time alerts on your device.
                    </ListSupportingText>
                }
            />
            <ListItem
                id="sync"
                label={<ListLabelText>Background Sync</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        Keep data updated in the background.
                    </ListSupportingText>
                }
                trailing={[<Switch key="switch" slot="selection" />]}
            />
        </ListBox>
    );
}
```

### 3. List with Avatars and Trailing Metadata

Displaying user contacts or member lists with initials or profile images and trailing timestamp metadata.

```tsx
import {
    ListBox,
    ListItem,
    ListAvatar,
    ListLabelText,
    ListSupportingText,
    ListTrailingText,
} from "@adgytec/web-ui-components";

function ContactsList() {
    return (
        <ListBox selectionMode="single">
            <ListItem
                id="user-1"
                leading={<ListAvatar>JD</ListAvatar>}
                label={<ListLabelText>Jane Doe</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        jane.doe@example.com
                    </ListSupportingText>
                }
                trailing={[
                    <ListTrailingText key="time">10:45 AM</ListTrailingText>,
                ]}
            />
            <ListItem
                id="user-2"
                leading={
                    <ListAvatar>
                        <img src="/avatars/alex.jpg" alt="Alex Smith" />
                    </ListAvatar>
                }
                label={<ListLabelText>Alex Smith</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        alex.smith@example.com
                    </ListSupportingText>
                }
                trailing={[
                    <ListTrailingText key="time">Yesterday</ListTrailingText>,
                ]}
            />
        </ListBox>
    );
}
```

### 4. List with Media Thumbnails (Image & Video)

Using `ListMedia` with predefined variants (`image`, `video`, `large-video`) and exported dimensions.

```tsx
import {
    ListBox,
    ListItem,
    ListMedia,
    ListLabelText,
    ListSupportingText,
    ListMediaImageWidth,
    ListMediaImageHeight,
    ListMediaVideoWidth,
    ListMediaVideoHeight,
} from "@adgytec/web-ui-components";

function MediaList() {
    return (
        <ListBox selectionMode="single" alignY="start">
            <ListItem
                id="photo"
                leading={
                    <ListMedia variant="image">
                        <img
                            src="https://picsum.photos/56/56"
                            alt="Thumbnail"
                            width={ListMediaImageWidth}
                            height={ListMediaImageHeight}
                        />
                    </ListMedia>
                }
                label={<ListLabelText>Sunset on the Coast</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        High-resolution landscape photo.
                    </ListSupportingText>
                }
            />
            <ListItem
                id="video"
                leading={
                    <ListMedia variant="video">
                        <img
                            src="https://picsum.photos/100/56"
                            alt="Video Preview"
                            width={ListMediaVideoWidth}
                            height={ListMediaVideoHeight}
                        />
                    </ListMedia>
                }
                label={<ListLabelText>Product Walkthrough</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        4:32 • Video overview of new features.
                    </ListSupportingText>
                }
            />
        </ListBox>
    );
}
```

### 5. Vertical Alignment Variations

Align content, leading, and trailing elements to `start`, `center` (default), or `end`.

```tsx
import {
    ListBox,
    ListItem,
    ListAvatar,
    ListLabelText,
    ListSupportingText,
    ListTrailingText,
} from "@adgytec/web-ui-components";

function AlignedList() {
    return (
        <ListBox alignY="start">
            <ListItem
                id="multiline-item"
                leading={<ListAvatar>RD</ListAvatar>}
                label={<ListLabelText>Multi-line Review</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </ListSupportingText>
                }
                trailing={[
                    <ListTrailingText key="date">Nov 12</ListTrailingText>,
                ]}
            />
        </ListBox>
    );
}
```

### 6. Selection List with Automatic Check Indicators (`selectionIndicator`)

Use `selectionIndicator="leading"` or `"trailing"` on `ListBox` (or `ListItem`) to automatically display a checkmark icon when an item is selected, replacing the leading or trailing element.

```tsx
import {
    ListBox,
    ListItem,
    ListAvatar,
    ListLabelText,
    ListSupportingText,
} from "@adgytec/web-ui-components";

function SelectionIndicatorList() {
    return (
        <ListBox selectionMode="multiple" selectionIndicator="leading">
            <ListItem
                id="user-1"
                leading={<ListAvatar>JD</ListAvatar>}
                label={<ListLabelText>Jane Doe</ListLabelText>}
                supporting={<ListSupportingText>Engineer</ListSupportingText>}
            />
            <ListItem
                id="user-2"
                leading={<ListAvatar>AS</ListAvatar>}
                label={<ListLabelText>Alex Smith</ListLabelText>}
                supporting={<ListSupportingText>Designer</ListSupportingText>}
            />
        </ListBox>
    );
}
```

### 7. Interactive Grid List with Nested Actions (`GridListBox`, `GridListItem`)

`GridListBox` and `GridListItem` implement the ARIA `grid` pattern, providing full keyboard accessibility and independent focus stops for nested interactive controls (such as buttons, switches, or links) alongside row-level `onAction` handling.

```tsx
import {
    GridListBox,
    GridListItem,
    ListAction,
    ListIcon,
    ListLabelText,
    ListSupportingText,
    Switch,
} from "@adgytec/web-ui-components";
import { Wifi, Trash2, MoreVertical } from "lucide-react";

function NetworkSettingsGridList() {
    return (
        <GridListBox
            aria-label="Network connections"
            onAction={(key) => console.log(`Triggered item: ${key}`)}
        >
            <GridListItem
                id="wifi"
                leading={<ListIcon icon={Wifi} />}
                label={<ListLabelText>Wi-Fi</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        Connected to Office-5G
                    </ListSupportingText>
                }
                trailing={[
                    <Switch
                        key="toggle"
                        aria-label="Toggle Wi-Fi"
                        defaultSelected
                    />,
                    <ListAction
                        key="more"
                        icon={MoreVertical}
                        aria-label="Wi-Fi settings"
                        onPress={() => console.log("Open Wi-Fi settings")}
                    />,
                ]}
            />
            <GridListItem
                id="guest"
                leading={<ListIcon icon={Wifi} />}
                label={<ListLabelText>Guest Network</ListLabelText>}
                supporting={<ListSupportingText>Available</ListSupportingText>}
                trailing={[
                    <ListAction
                        key="delete"
                        icon={Trash2}
                        aria-label="Forget network"
                        onPress={() => console.log("Forget network")}
                    />,
                ]}
            />
        </GridListBox>
    );
}
```

### 8. Selection Grid List with Checkboxes and Indicators

Combining `GridListBox` multiple selection with embedded `Checkbox` components and dynamic selection indicators.

```tsx
import {
    Checkbox,
    GridListBox,
    GridListItem,
    ListAction,
    ListIcon,
    ListLabelText,
    ListSupportingText,
} from "@adgytec/web-ui-components";
import { Folder, MoreVertical } from "lucide-react";

function FileSelectorGridList() {
    return (
        <GridListBox
            aria-label="Select files"
            selectionMode="multiple"
            selectionIndicator="leading"
        >
            <GridListItem
                id="documents"
                leading={<Checkbox slot="selection" />}
                label={<ListLabelText>Documents</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        12 items • Updated 2h ago
                    </ListSupportingText>
                }
                trailing={[
                    <ListAction
                        key="more"
                        icon={MoreVertical}
                        aria-label="Document options"
                        onPress={() => console.log("Document options")}
                    />,
                ]}
            />
            <GridListItem
                id="pictures"
                leading={<ListIcon icon={Folder} />}
                label={<ListLabelText>Pictures</ListLabelText>}
                supporting={
                    <ListSupportingText>
                        84 items • Updated yesterday
                    </ListSupportingText>
                }
                trailing={[<Checkbox key="select" slot="selection" />]}
            />
        </GridListBox>
    );
}
```

---

Generated by Gemini
