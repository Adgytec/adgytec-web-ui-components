# AppBar

## Configurable CSS Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--md-app-bar-background` | `var(--md-sys-color-surface)` | Background color of the AppBar container. |
| `--md-app-bar-on-scroll-background` | `var(--md-sys-color-surface-container)` | Background color of the AppBar container when scrolled. |
| `--md-app-bar-title-color` | `var(--md-sys-color-on-surface)` | Text and icon color inside the AppBar and headline. |

The `AppBar` component (also known as a Top App Bar) is an implementation of the [Material 3 Top App Bar](https://m3.material.io/components/top-app-bar/overview). It displays information and actions relating to the current screen, supporting expressive layouts with flexible sizes (Small, Medium, Large) and alignment types (Default, Centered).

---

## Components

The AppBar module consists of five primary components:
1. `AppBar` - The main container component that coordinates the layout, actions, and headline.
2. `AppBarHeadline` - A styled title component that automatically aligns and sizes itself based on the AppBar context.
3. `AppBarAction` - A pre-configured standard `IconButton` variant optimized for AppBar navigation and actions.
4. `AppBarAvatar` - An interactive, circular avatar button that supports ripple effects and visual state changes.
5. `AppBarState` - A context provider that manages and shares the scrolling state of the AppBar to toggle its scrolled visual style.

---

## AppBar Props

The `AppBar` component acts as a `<header>` element and accepts standard header attributes.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"small" \| "medium" \| "large"` | `"small"` | The layout height and typography size variant of the AppBar. |
| `alignment` | `"default" \| "centered"` | `"default"` | The text alignment of the headline. |
| `leadingAction` | `ReactElement` | — | The action element rendered at the start (left) of the AppBar, typically a navigation `AppBarAction`. |
| `trailingActions` | `ReactElement[]` | — | A list of actions rendered at the end (right) of the AppBar, such as `AppBarAction` or `AppBarAvatar` items. |
| `headline` | `ReactElement` | — | The headline element of the AppBar, typically an `AppBarHeadline`. |

### Responsive Design / Layout Behavior

- **Small size**: Renders all content in a single row. The headline is placed in the center space between the leading action and the trailing actions.
- **Medium & Large sizes**: Renders as a two-row layout. The primary row holds the leading and trailing actions, while the secondary (bottom) row holds the `AppBarHeadline`, allowing the typography to expand expressively.

---

## AppBarHeadline Props

Extends the [React Aria Heading](https://react-spectrum.adobe.com/react-aria/Heading.html) component and accepts all of its props.

Based on the parent `AppBar`'s size, `AppBarHeadline` automatically adjusts its height and typography scale:

| AppBar Size | Height | Typography Style |
|-------------|--------|------------------|
| `small` | `28px` | Title Large (`typography.titleLarge`) |
| `medium` | `36px` | Headline Medium (`typography.headlineMedium`) |
| `large` | `44px` | Display Small (`typography.displaySmall`) |

---

## AppBarAction Props

Extends the custom `IconButton` component, omitting the `size` prop.

- Defaults to `color="standard"`.
- Hardcodes `size="small"` to align with the Material 3 specifications for app bar actions.

---

## AppBarAvatar Props

Extends the [React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html) component and accepts all of its props.

- Renders as a circular (`50%` border-radius) interactive container.
- Height & Width: `32px` (`var(--md-sys-layout-space-32)`).
- Automatically manages active, hovered, pressed, and disabled states.
- Utilizes the `filled` button color preset and includes smooth ripple/splash feedback on tap.

---

## AppBarState Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialScrolling` | `boolean` | `false` | Sets the initial scrolling state of the AppBar. |
| `children` | `ReactNode` | — | The child components to render within the state provider context. |

---

## Usage

### 1. Standard Small AppBar (Default Alignment)

A classic application header containing a menu button, title, and action buttons.

```tsx
import { AppBar, AppBarAction, AppBarHeadline } from '@adgytec/web-ui-components';
import { Menu, Search, MoreVertical } from 'lucide-react';

function Header() {
  return (
    <AppBar
      size="small"
      leadingAction={
        <AppBarAction icon={Menu} aria-label="Open menu" onPress={() => {}} />
      }
      headline={
        <AppBarHeadline>Dashboard</AppBarHeadline>
      }
      trailingActions={[
        <AppBarAction key="search" icon={Search} aria-label="Search" />,
        <AppBarAction key="more" icon={MoreVertical} aria-label="More options" />
      ]}
    />
  );
}
```

### 2. Centered Small AppBar with Avatar

Ideal for single-page contexts or profile-focused headers.

```tsx
import { AppBar, AppBarAction, AppBarHeadline, AppBarAvatar } from '@adgytec/web-ui-components';
import { ArrowLeft } from 'lucide-react';

function UserProfileHeader() {
  return (
    <AppBar
      size="small"
      alignment="centered"
      leadingAction={
        <AppBarAction icon={ArrowLeft} aria-label="Go back" />
      }
      headline={
        <AppBarHeadline>User Profile</AppBarHeadline>
      }
      trailingActions={[
        <AppBarAvatar key="profile" aria-label="View profile">
          <img src="/avatar-placeholder.png" alt="User initials/avatar" />
        </AppBarAvatar>
      ]}
    />
  );
}
```

### 3. Medium & Large Expressive AppBar

Perfect for main entry points or details pages with large titles, providing additional visual hierarchy.

```tsx
import { AppBar, AppBarAction, AppBarHeadline } from '@adgytec/web-ui-components';
import { Menu, Search, Share2, Star } from 'lucide-react';

function ArticleHeader() {
  return (
    <AppBar
      size="large"
      leadingAction={
        <AppBarAction icon={Menu} aria-label="Menu" />
      }
      headline={
        <AppBarHeadline>Expressive Typography in Material Design</AppBarHeadline>
      }
      trailingActions={[
        <AppBarAction key="star" icon={Star} aria-label="Bookmark" />,
        <AppBarAction key="share" icon={Share2} aria-label="Share" />,
        <AppBarAction key="search" icon={Search} aria-label="Search" />
      ]}
    />
  );
}
```

### 4. AppBar with Scroll States

Wrap the layout in an `AppBarState` to automatically toggle styling (background color change and shadow elevation) when scrolling. Use `AppBarStateContext` inside scroll containers to update the scrolling state.

```tsx
import { AppBar, AppBarAction, AppBarHeadline, AppBarState, AppBarStateContext } from '@adgytec/web-ui-components';
import { Menu, Search } from 'lucide-react';
import { useContext, useEffect } from 'react';

function ScrollHandler() {
  const appBarState = useContext(AppBarStateContext);

  useEffect(() => {
    const handleScroll = () => {
      appBarState?.updateScrolling(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [appBarState]);

  return null;
}

function Page() {
  return (
    <AppBarState>
      <AppBar
        leadingAction={<AppBarAction icon={Menu} aria-label="Menu" />}
        headline={<AppBarHeadline>Scroll to See Background Change</AppBarHeadline>}
        trailingActions={[<AppBarAction key="search" icon={Search} aria-label="Search" />]}
      />
      <ScrollHandler />
      <div style={{ height: '2000px', padding: '16px' }}>
        Scroll down to observe the background change and shadow elevation.
      </div>
    </AppBarState>
  );
}
```

---

Generated by Gemini
