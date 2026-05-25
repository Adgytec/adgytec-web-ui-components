# Menu

The `Menu` component is an implementation of [Material 3 Menus](https://m3.material.io/components/menus/overview). It displays a list of choices on a temporary surface when users interact with a button, action, or other control.

## Configurable CSS Tokens

| Token | Default (Standard) | Default (Vibrant) | Description |
|-------|-------------------|------------------|-------------|
| `--md-menu-background` | `var(--md-sys-color-surface-container-low)` | `var(--md-sys-color-tertiary-container)` | Background color of the menu surface. |
| `--md-menu-section-label-color` | `var(--md-sys-color-on-surface-variant)` | `var(--md-sys-color-on-tertiary-container)` | Color of the menu section headers. |
| `--md-menu-item-background` | `var(--md-sys-color-surface-container-low)` | `var(--md-sys-color-tertiary-container)` | Default background color of a menu item. |
| `--md-menu-item-selected-background` | `var(--md-sys-color-tertiary-container)` | `var(--md-sys-color-tertiary)` | Background color of a selected menu item. |
| `--md-menu-item-color` | `var(--md-sys-color-on-surface-variant)` | `var(--md-sys-color-on-tertiary-container)` | Color for icons and trailing text in a menu item. |
| `--md-menu-item-selected-color` | `var(--md-sys-color-on-tertiary-container)` | `var(--md-sys-color-on-tertiary)` | Color for icons and trailing text in a selected menu item. |
| `--md-menu-item-label-color` | `var(--md-sys-color-on-surface)` | `var(--md-sys-color-on-tertiary-container)` | Text color for the menu item label. |
| `--menu-item-selected-label-color` | `var(--md-sys-color-on-tertiary-container)` | `var(--md-sys-color-on-tertiary)` | Text color for the selected menu item label. |

## Components

The `Menu` system is composed of several components that extend [React Aria Components](https://react-spectrum.adobe.com/react-aria/Menu.html):

- `MenuTrigger`: The container that manages the visibility of the menu.
- `Menu`: The main list of menu items.
- `MenuItem`: An individual item within the menu.
- `MenuSection`: A way to group related menu items.
- `MenuSectionHeader`: A header for a menu section.
- `MenuPopover`: The container that handles the positioning and layout of the menu surface.
- `SubmenuPopover`: Specifically for nested submenus.
- `MenuShortcut`: Displays keyboard shortcuts for menu items.
- `MenuTrailingText`: Displays additional text at the end of a menu item.

## Props

### `MenuTrigger`
Extends `React.ComponentPropsWithRef<typeof AriaMenuTrigger>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `"standard" \| "vibrant"` | `"standard"` | Sets the color scheme for the menu. |
| `layout` | `"standard" \| "grouped"` | `"standard"` | Sets the layout density for the menu. |

### `Menu`
Extends [React Aria Components Menu](https://react-spectrum.adobe.com/react-aria/Menu.html).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `"standard" \| "vibrant"` | — | Overrides the color scheme set by `MenuTrigger`. |
| `layout` | `"standard" \| "grouped"` | — | Overrides the layout set by `MenuTrigger`. |

### `MenuItem`
Extends [React Aria Components MenuItem](https://react-spectrum.adobe.com/react-aria/Menu.html#menuitem).

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | **Required.** The primary text for the menu item. |
| `leadingIcon` | `LucideIcon` | An optional icon displayed at the start of the item. |
| `supportingText` | `string` | Optional text displayed below the label. |
| `trailingText` | `string` | Optional text displayed at the end of the item. |
| `trailingIcon` | `LucideIcon` | An optional icon displayed at the end of the item. |

### `MenuPopover`
Extends `React.ComponentPropsWithRef<typeof Popover>`.

### `SubmenuPopover`
Extends `React.ComponentPropsWithRef<typeof Popover>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `offset` | `number` | `-1` | The distance between the submenu and its trigger. |

### `MenuSection`
Extends [React Aria Components MenuSection](https://react-spectrum.adobe.com/react-aria/Menu.html#menusection).

### `MenuSectionHeader`
Extends `React.ComponentPropsWithRef<"header">`.

### `MenuShortcut`
Extends `React.ComponentPropsWithRef<"kbd">`.

### `MenuTrailingText`
Extends `React.ComponentPropsWithRef<"p">`.

## Usage

```tsx
import { 
  MenuTrigger, 
  Menu, 
  MenuItem, 
  MenuPopover,
  Button 
} from '@adgytec/web-ui-components';
import { Settings, User, LogOut } from 'lucide-react';

<MenuTrigger>
  <Button label="Actions" />
  <MenuPopover>
    <Menu>
      <MenuItem 
        label="Profile" 
        leadingIcon={User} 
        supportingText="View your profile"
      />
      <MenuItem 
        label="Settings" 
        leadingIcon={Settings} 
      />
      <MenuItem 
        label="Logout" 
        leadingIcon={LogOut} 
        trailingText="⌘Q"
      />
    </Menu>
  </MenuPopover>
</MenuTrigger>
```

### Sections and Headers

```tsx
import { MenuSection, MenuSectionHeader } from '@adgytec/web-ui-components';

<Menu>
  <MenuSection>
    <MenuSectionHeader>File</MenuSectionHeader>
    <MenuItem label="New Tab" />
    <MenuItem label="New Window" />
  </MenuSection>
  <MenuSection>
    <MenuSectionHeader>Edit</MenuSectionHeader>
    <MenuItem label="Undo" />
    <MenuItem label="Redo" />
  </MenuSection>
</Menu>
```


Generated by Gemini
