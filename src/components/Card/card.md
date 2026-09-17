# Card

## Configurable CSS Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--md-card-background` | Variant-dependent (see variants below) | Background color of the Card container. |
| `--md-card-icon-color` | `var(--md-sys-color-primary)` | Color of icons rendered inside the Card (applied via `CardIcon`). |
| `--md-card-elevation` | Variant-dependent (see variants below) | Box shadow and elevation level of the Card container. |
| `--md-card-outline` | `var(--md-sys-color-outline-variant)` | Border outline color for the `outlined` variant. |

The `Card` component is an implementation of [Material 3 Cards](https://m3.material.io/components/cards/overview). Cards contain content and actions about a single subject. They present information in a clear, digestible format and support three distinct visual variants (Filled, Elevated, Outlined), interactive press effects with ripple animation, and comprehensive accessibility and interaction states.

---

## Components

The Card module consists of two primary components:
1. `Card` - The main container component built on React Aria Components `GridListItem`, providing accessible keyboard navigation, interaction states, and ripple splash feedback.
2. `CardIcon` - A styled icon component pre-configured with the card's theme icon color and a fixed 24px icon size.

---

## Card Props

The `Card` component extends the [React Aria GridListItem](https://react-spectrum.adobe.com/react-aria/GridList.html#gridlistitem) component and accepts all of its props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"filled" \| "elevated" \| "outlined"` | `"filled"` | The visual style and elevation variant of the Card. |
| `onPress` | `(e: PressEvent) => void` | — | Handler called when the Card is pressed. Triggers the interactive ripple splash effect. |
| `onAction` | `() => void` | — | Handler called when the Card is activated via press or Enter key. |
| `isDisabled` | `boolean` | `false` | Whether the Card is disabled. Disables interaction states and reduces opacity. |
| `textValue` | `string` | — | Plain text representation of the card content for accessibility and keyboard typeahead. |
| `className` | `string \| ((values: GridListItemRenderProps & { defaultClassName: string \| undefined }) => string)` | — | CSS class name or render function based on the card's interaction states. |
| `children` | `ReactNode \| ((values: GridListItemRenderProps & { defaultChildren: ReactNode \| undefined }) => ReactNode)` | — | The content rendered inside the Card. Supports render props for state-based rendering. |

### Card Variants

Material 3 defines three card variants, each designed for different visual hierarchy and contrast requirements:

| Variant | Background Default | Elevation Default | Outline | Description |
|---------|-------------------|-------------------|---------|-------------|
| `filled` | `var(--md-sys-color-surface-container-highest)` | `var(--md-sys-elevation-shadow-0)` | None | Default variant. Provides subtle contrast against a surface without elevation shadows. |
| `elevated` | `var(--md-sys-color-surface-container-low)` | `var(--md-sys-elevation-shadow-1)` | None | Displays a drop shadow to create visual separation from the background. Elevates further on hover and drag. |
| `outlined` | `var(--md-sys-color-surface)` | `var(--md-sys-elevation-shadow-0)` | `1px solid var(--md-sys-color-outline-variant)` | Features a clean border stroke with no shadow, ideal for dense layouts where shadows create clutter. Outline darkens to `on-surface` when focused. |

### Interactive States & Visual Feedback

- **Ripple Splash Feedback**: Integrated with `useSplash`, pressing or tapping an interactive card displays a Material Design ripple effect at the pointer location.
- **Hover (`[data-hovered]`)**: Adds a semi-transparent state layer (`--md-sys-state-hover`) and increases elevation shadow (`elevation-shadow-1` for filled/outlined, `elevation-shadow-2` for elevated).
- **Focus Indicator (`[data-focus-visible]`)**: Displays a distinct 3px outline with 2px offset in `var(--md-sys-color-secondary)`.
- **Pressed (`[data-pressed]`)**: Activates the pressed state layer (`--md-sys-state-pressed`) alongside the ripple animation.
- **Dragging (`[data-dragging]`)**: Elevates the card (`elevation-shadow-3` for filled/outlined, `elevation-shadow-4` for elevated) with the drag state layer.
- **Disabled (`[data-disabled]`)**: Sets background and foreground content to disabled container and text opacities (`--md-sys-state-disabled-content` / `--md-sys-state-disabled-container`).
- **Motion**: Transitions box-shadow and state layers smoothly with Material 3 spatial motion curves, respecting `prefers-reduced-motion`.

---

## CardIcon Props

Extends the custom `Icon` component, omitting the `size` and `withText` props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `LucideIcon` | **Required** | The Lucide icon component to display. |

- Fixed dimensions: `24px` (`CardIconSize`).
- Color: Automatically inherits `--_md-card-icon-color` (defaults to `var(--md-sys-color-primary)`, customizable via `--md-card-icon-color`).

---

## Constants

The Card module also exports the following layout and dimension constants:

| Constant | Type | Value | Description |
|----------|------|-------|-------------|
| `CardIconSize` | `number` | `24` | Default icon size in pixels used by `CardIcon`. |
| `PaddingBetweenCards` | `number` | `12` | Recommended gap/spacing in pixels between adjacent cards in a grid layout. |

---

## Usage

### 1. Basic Card Variants

Display cards with different visual hierarchy levels: filled (default), elevated, and outlined.

```tsx
import { Card } from '@adgytec/web-ui-components';

function CardVariantsExample() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      {/* Filled Card (Default) */}
      <Card variant="filled" style={{ padding: '16px', width: '240px' }}>
        <h3>Filled Card</h3>
        <p>Subtle surface contrast without elevation.</p>
      </Card>

      {/* Elevated Card */}
      <Card variant="elevated" style={{ padding: '16px', width: '240px' }}>
        <h3>Elevated Card</h3>
        <p>Visual separation using drop shadow elevation.</p>
      </Card>

      {/* Outlined Card */}
      <Card variant="outlined" style={{ padding: '16px', width: '240px' }}>
        <h3>Outlined Card</h3>
        <p>Clean border stroke without drop shadow.</p>
      </Card>
    </div>
  );
}
```

### 2. Interactive Card with Ripple Feedback

Cards support press events with Material 3 ripple splash animations out of the box.

```tsx
import { Card } from '@adgytec/web-ui-components';

function InteractiveCardExample() {
  return (
    <Card
      variant="elevated"
      style={{ padding: '16px', width: '280px', cursor: 'pointer' }}
      onPress={() => {
        alert('Card pressed!');
      }}
    >
      <h3>Interactive Project Card</h3>
      <p>Click or tap anywhere on the card to see the ripple animation.</p>
    </Card>
  );
}
```

### 3. Card with CardIcon and Content

Use `CardIcon` to render an icon styled with the card's primary icon color and standard 24px sizing.

```tsx
import { Card, CardIcon } from '@adgytec/web-ui-components';
import { Folder, ArrowRight } from 'lucide-react';

function FolderCard() {
  return (
    <Card variant="outlined" style={{ padding: '16px', width: '300px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <CardIcon icon={Folder} />
        <div>
          <h4 style={{ margin: 0 }}>Design Assets</h4>
          <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>24 items</span>
        </div>
      </div>
      <p style={{ marginTop: '12px', marginBottom: '16px' }}>
        Contains vector logos, typography guides, and brand color swatches.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--md-sys-color-primary)' }}>
        <span>View folder</span>
        <ArrowRight size={16} />
      </div>
    </Card>
  );
}
```

### 4. Cards in a GridList Layout

Because `Card` extends React Aria `GridListItem`, it integrates seamlessly with `GridList` for full keyboard navigation, selection, and accessibility.

```tsx
import { Card, CardVariant, PaddingBetweenCards } from '@adgytec/web-ui-components';
import { GridList } from 'react-aria-components';

const items = [
  { id: '1', title: 'Analytics', description: 'Real-time performance metrics.' },
  { id: '2', title: 'Deployments', description: 'Manage environments and builds.' },
  { id: '3', title: 'Settings', description: 'Configure workspace preferences.' },
];

function CardGrid() {
  return (
    <GridList
      aria-label="Dashboard Overview"
      layout="grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: `calc(${PaddingBetweenCards} * var(--dp, 1px))`,
      }}
    >
      {items.map((item) => (
        <Card key={item.id} id={item.id} variant="elevated" style={{ padding: '16px' }}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Card>
      ))}
    </GridList>
  );
}
```

---

Generated by Gemini
