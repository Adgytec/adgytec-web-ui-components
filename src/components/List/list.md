# List

## Configurable CSS Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--md-list-color` | `var(--md-sys-color-on-surface-variant)` | Default color for icons, overline, supporting, and trailing text. |
| `--md-list-label-color` | `var(--md-sys-color-on-surface)` | Text color for the primary item label. |
| `--md-list-selected-color` | `var(--md-sys-color-on-secondary-container)` | Text and icon color when the list item is selected. |
| `--md-list-item-background` | `var(--md-sys-color-surface)` | Default background color of a list item container. |
| `--md-list-item-selected-background` | `var(--md-sys-color-secondary-container)` | Background color of a selected list item container. |
| `--md-list-avatar-background` | `var(--md-sys-color-primary-container)` | Background color of the `ListAvatar` container. |
| `--md-list-avatar-color` | `var(--md-sys-color-on-primary-container)` | Text and icon color inside `ListAvatar`. |

The `ListBox` and `ListItem` components are an implementation of [Material 3 Lists](https://m3.material.io/components/lists/overview). Lists are continuous, vertical indexes of text and images. They display related items and make actions easy to find and perform. The module supports single and multiple selection, interactive state layers, touch ripple effects, rich media formats, and flexible slot-based composition.

---

## Components

The List module consists of ten components:
1. `ListBox` - The main container component that coordinates list items, vertical alignment, and keyboard navigation.
2. `ListItem` - The interactive list item component managing slots (`leading`, `overline`, `label`, `supporting`, `trailing`), selection state, and ripple feedback.
3. `ListLabelText` - The primary headline/label text component using `typography.bodyLarge`.
4. `ListSupportingText` - A secondary descriptive text component placed beneath the label using `typography.bodyMedium`.
5. `ListOverlineText` - An eyebrow/overline text component placed above the label using `typography.labelSmall`.
6. `ListTrailingText` - A metadata or trailing text component placed at the end of the item using `typography.labelSmall`.
7. `ListIcon` - A standardized 20px icon wrapper that adapts to the item's state colors.
8. `ListAvatar` - A circular 40px avatar container with `typography.titleMedium` for user initials or profile images.
9. `ListMedia` - A styled container for leading thumbnail images or videos (`image`, `video`, `large-video`).
10. `ListAction` - A pre-configured `IconButton` variant (`size="small"`, 48px touch target) for trailing actions.

---

## ListBox Props

Extends the [React Aria ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html) component and accepts all of its props (e.g., `selectionMode`, `selectedKeys`, `onSelectionChange`, `items`, `disabledKeys`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `alignY` | `"start" \| "center" \| "end"` | `"center"` | Vertical alignment of elements (`leading`, `trailing`, and content) across list items. |

### Layout & Shape Behavior

- **Item spacing**: List items are spaced with a gap of `2px` (`calc(2 * var(--dp, 1px))`).
- **Rounded bounds**: The first and last items in the `ListBox` automatically inherit the list shape corner radius (`var(--md-sys-shape-corner-radius-large)`).
- **Responsive vertical alignment**: Controls `--md-list-align-y`, allowing elements to align to top (`start`), middle (`center`), or bottom (`end`).

---

## ListItem Props

Extends the [React Aria ListBoxItem](https://react-spectrum.adobe.com/react-aria/ListBox.html#listboxitem) component, omitting `children`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | — | **Required.** The primary label element of the list item, typically `ListLabelText`. |
| `leading` | `ReactNode` | — | Element rendered at the start of the list item (e.g., `ListIcon`, `ListAvatar`, `ListMedia`, or a `Checkbox`). |
| `overline` | `ReactNode` | — | Small text rendered above the label, typically `ListOverlineText`. |
| `supporting` | `ReactNode` | — | Secondary descriptive text rendered beneath the label, typically `ListSupportingText`. |
| `trailing` | `ReactNode[]` | — | An array of elements rendered at the end of the list item (e.g., `ListTrailingText`, `ListAction`, or a `Switch`). |

### State & Selection Integration

- **Checkbox and Switch slots**: When an embedded `Checkbox` or `Switch` with `slot="selection"` is provided in `leading` or `trailing`, `ListItem` automatically connects it to its `isSelected` and `isDisabled` states via React Aria context provider. The control is marked `isReadOnly: true` so interactions across the whole row seamlessly trigger item selection and ripple animation.
- **Ripple Effect**: Integrates with `useSplash` to display Material 3 touch ripple splash feedback on press.
- **Corner radius morphing**: Dynamically animates corner radius across interaction states (extra small at rest, medium on hover, large when selected, focused, or pressed).

---

## ListLabelText Props

Extends the [React Aria Text](https://react-spectrum.adobe.com/react-aria/Text.html) component, omitting the `slot` prop.

- Defaults to `slot="label"`.
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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"image" \| "video" \| "large-video"` | `"image"` | The dimension preset for the media container. |

### Variant Dimensions & Exported Constants

| Variant | Dimensions | Exported Constants |
|---------|------------|--------------------|
| `image` | `56px` × `56px` | `ListMediaImageWidth = 56`, `ListMediaImageHeight = 56` |
| `video` | `100px` × `56px` | `ListMediaVideoWidth = 100`, `ListMediaVideoHeight = 56` |
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
} from '@adgytec/web-ui-components';
import { Mail, MoreVertical } from 'lucide-react';

function InboxList() {
  return (
    <ListBox selectionMode="none">
      <ListItem
        id="item-1"
        leading={<ListIcon icon={Mail} />}
        overline={<ListOverlineText>Work</ListOverlineText>}
        label={<ListLabelText>Quarterly Planning</ListLabelText>}
        supporting={<ListSupportingText>Discuss roadmap updates with the product team.</ListSupportingText>}
        trailing={[
          <ListAction
            key="more"
            icon={MoreVertical}
            aria-label="More options"
            onPress={() => console.log('Action pressed')}
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
} from '@adgytec/web-ui-components';

function SettingsList() {
  return (
    <ListBox selectionMode="multiple">
      <ListItem
        id="notifications"
        leading={<Checkbox slot="selection" />}
        label={<ListLabelText>Enable Push Notifications</ListLabelText>}
        supporting={<ListSupportingText>Receive real-time alerts on your device.</ListSupportingText>}
      />
      <ListItem
        id="sync"
        label={<ListLabelText>Background Sync</ListLabelText>}
        supporting={<ListSupportingText>Keep data updated in the background.</ListSupportingText>}
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
} from '@adgytec/web-ui-components';

function ContactsList() {
  return (
    <ListBox selectionMode="single">
      <ListItem
        id="user-1"
        leading={<ListAvatar>JD</ListAvatar>}
        label={<ListLabelText>Jane Doe</ListLabelText>}
        supporting={<ListSupportingText>jane.doe@example.com</ListSupportingText>}
        trailing={[<ListTrailingText key="time">10:45 AM</ListTrailingText>]}
      />
      <ListItem
        id="user-2"
        leading={
          <ListAvatar>
            <img src="/avatars/alex.jpg" alt="Alex Smith" />
          </ListAvatar>
        }
        label={<ListLabelText>Alex Smith</ListLabelText>}
        supporting={<ListSupportingText>alex.smith@example.com</ListSupportingText>}
        trailing={[<ListTrailingText key="time">Yesterday</ListTrailingText>]}
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
} from '@adgytec/web-ui-components';

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
        supporting={<ListSupportingText>High-resolution landscape photo.</ListSupportingText>}
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
        supporting={<ListSupportingText>4:32 • Video overview of new features.</ListSupportingText>}
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
} from '@adgytec/web-ui-components';

function AlignedList() {
  return (
    <ListBox alignY="start">
      <ListItem
        id="multiline-item"
        leading={<ListAvatar>RD</ListAvatar>}
        label={<ListLabelText>Multi-line Review</ListLabelText>}
        supporting={
          <ListSupportingText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListSupportingText>
        }
        trailing={[<ListTrailingText key="date">Nov 12</ListTrailingText>]}
      />
    </ListBox>
  );
}
```

---

Generated by Gemini
