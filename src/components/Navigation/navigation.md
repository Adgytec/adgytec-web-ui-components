# Navigation

## Configurable CSS Tokens

### Navigation Container
| Token | Default Value | Description |
|-------|---------------|-------------|
| `--md-navigation-background` | `var(--md-sys-color-surface)` | Background color of the Navigation container. |
| `--md-navigation-drawer-background` | `var(--md-sys-color-surface-container)` | Background color when the Navigation is rendered inside a drawer modal. |

### Navigation Items
| Token | Default Value | Description |
|-------|---------------|-------------|
| `--md-navigation-item-active-background` | `var(--md-sys-color-secondary-container)` | Background color of an active navigation item. |
| `--md-navigation-item-label-color` | `var(--md-sys-color-on-surface-variant)` | Text color of an inactive item label. |
| `--md-navigation-item-icon-color` | `var(--md-sys-color-on-surface-variant)` | Icon color of an inactive item. |
| `--md-navigation-item-active-label-color` | `var(--md-sys-color-secondary)` | Text color of an active item label. |
| `--md-navigation-item-active-icon-color` | `var(--md-sys-color-on-secondary-container)` | Icon color of an active item. |
| `--md-navigation-item-state-layer-color` | `var(--md-sys-color-on-secondary-container)` | Color of the state layer overlay (hover/focus). |

### Navigation Sections
| Token | Default Value | Description |
|-------|---------------|-------------|
| `--md-navigation-section-label-color` | `var(--md-sys-color-on-surface-variant)` | Text color of the section heading labels. |

---

## Components

The Navigation module consists of:
1. `Navigation` - The main layout container for navigation. It manages the container DOM reference and root navigation context.
2. `NavigationLink` - A navigation item component that renders as an anchor link.
3. `NavigationButton` - A button-style navigation item, used to toggle nested sub-navigation.
4. `NavigationSection` - A container component used to group related navigation items.
5. `NavigationSectionLabel` - A styled title component for label groups inside a section.
6. `SubNavigation` - A secondary navigation panel that slides into view. It is rendered via a React Portal to keep the DOM output clean and isolated.
7. `SubNavigationTrigger` - A wrapper component that ties together an action trigger (like a `NavigationButton`) and its corresponding `SubNavigation` child.
8. `NavigationState` - A wrapper/provider that coordinates transition states, depth level tracking, and synchronized scrolling across multiple instances of navigation.

---

## Props

### `Navigation`

Extends standard HTML `<nav>` attribute types.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | — | Title text or element for the navigation header. |
| `isLinkActive` | `(href: string) => boolean` | — | Callback function to determine if a given URL matching `href` is currently active. |
| `isButtonActive` | `(prefix: string) => boolean` | — | Callback function to determine if an action button matching `prefix` is active. |
| `stateid` | `string` | `"__root__"` | state identifier for syncing transitions. |
| `containerClassName` | `string` | — | css class for navigation container. |

### `NavigationLink`

Extends the [React Aria Link](https://react-spectrum.adobe.com/react-aria/Link.html) component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | — | The text or node label of the item. |
| `icon` | `LucideIcon` | — | Optional icon display when the item is inactive. |
| `activeIcon` | `LucideIcon` | — | Optional icon display when the item is active. |
| `isActive` | `boolean` | — | Force override active state. |
| `href` | `string` | — | URL link location. |

### `NavigationButton`

Extends the [React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html) component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | — | The button label content. |
| `icon` | `LucideIcon` | — | Optional icon display when the item is inactive. |
| `activeIcon` | `LucideIcon` | — | Optional icon display when the item is active. |
| `isActive` | `boolean` | — | Force override active state. |
| `prefix` | `string` | — | Prefix string compared in active checks. |

### `SubNavigation`

Extends standard HTML `<nav>` element attributes.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | — | Heading label rendered at the top of the sub-menu. |

### `SubNavigationTrigger`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `stateID` | `string` | — | A unique key for referencing this sub-navigation panel's visibility. |
| `label` | `ReactNode` | — | The text label passed down to sub-components. |

---

## Usage

### Simple Flat Side Navigation

```tsx
import { Navigation, NavigationLink, NavigationSection, NavigationSectionLabel } from '@adgytec/web-ui-components';
import { Home, Users, Settings } from 'lucide-react';

function SideNav() {
  const currentPath = window.location.pathname;

  return (
    <Navigation
      label="My Application"
      isLinkActive={(href) => currentPath === href}
    >
      <NavigationSection>
        <NavigationLink href="/" label="Home" icon={Home} />
        <NavigationLink href="/users" label="Users" icon={Users} />
      </NavigationSection>

      <NavigationSection>
        <NavigationSectionLabel>Settings</NavigationSectionLabel>
        <NavigationLink href="/settings" label="App Settings" icon={Settings} />
      </NavigationSection>
    </Navigation>
  );
}
```

### Multi-Level Navigation using SubNavigation

To handle nested options or deep structures, combine `SubNavigationTrigger`, `NavigationButton`, and `SubNavigation`.

```tsx
import { 
  Navigation, 
  NavigationLink, 
  NavigationButton, 
  NavigationSection, 
  SubNavigation, 
  SubNavigationTrigger 
} from '@adgytec/web-ui-components';
import { Home, Briefcase, Plus, Settings, ChevronRight } from 'lucide-react';

function EnterpriseSideNav() {
  const currentPath = window.location.pathname;

  return (
    <Navigation
      label="Admin Portal"
      isLinkActive={(href) => currentPath === href}
      isButtonActive={(prefix) => currentPath.startsWith(prefix)}
    >
      <NavigationSection>
        <NavigationLink href="/dashboard" label="Dashboard" icon={Home} />
        
        {/* Nesting under Projects */}
        <SubNavigationTrigger stateID="projects" label="Projects">
          <NavigationButton icon={Briefcase} prefix="/projects" />
          
          <SubNavigation>
            <NavigationLink href="/projects/all" label="All Projects" icon={Briefcase} />
            <NavigationLink href="/projects/new" label="New Project" icon={Plus} />
          </SubNavigation>
        </SubNavigationTrigger>
      </NavigationSection>

      <NavigationSection>
        <NavigationLink href="/settings" label="Settings" icon={Settings} />
      </NavigationSection>
    </Navigation>
  );
}
```

### Integrated Scroll State Synchronization

If you have different responsive layouts (e.g. one sidebar for desktop and a temporary slide-out sheet drawer for mobile) and want scroll positions to sync smoothly when toggled, wrap both in a single `NavigationState` component.

```tsx
import { NavigationState, Navigation } from '@adgytec/web-ui-components';

function AppLayout() {
  return (
    <NavigationState>
      {/* Desktop Sidebar */}
      <aside className="desktop-only">
        <Navigation label="Desktop Side Menu">
          {/* Navigation Items */}
        </Navigation>
      </aside>

      {/* Mobile Drawer */}
      <div className="mobile-only">
        <Navigation label="Mobile Drawer Menu">
          {/* Navigation Items */}
        </Navigation>
      </div>
    </NavigationState>
  );
}
```

---

Generated by Gemini
