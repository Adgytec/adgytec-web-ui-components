# ProgressIndicator

## Configurable CSS Tokens

| Token                                           | Default Value                             | Description                                                         |
| ----------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------- |
| `--md-circular-progress-indicator-active-color` | `var(--md-sys-color-primary)`             | The color of the active circular progress indicator arc.            |
| `--md-circular-progress-indicator-track-color`  | `var(--md-sys-color-secondary-container)` | The color of the inactive circular background track.                |
| `--md-linear-progress-indicator-active-color`   | `var(--md-sys-color-primary)`             | The color of the active linear progress bar and stop indicator dot. |
| `--md-linear-progress-indicator-track-color`    | `var(--md-sys-color-secondary-container)` | The color of the inactive linear background track segments.         |

The `ProgressIndicator` family implements [Material 3 Progress Indicators](https://m3.material.io/components/progress-indicators/overview) with support for modern, playful animated wavy tracks. Built on [React Aria Components ProgressBar](https://react-spectrum.adobe.com/react-aria/ProgressBar.html), both indicators provide comprehensive accessibility support (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and accessible labels).

There are two primary components available:
- `CircularProgressIndicator`: Renders a circular arc progress indicator or spinner.
- `LinearProgressIndicator`: Renders a horizontal progress bar.

> [!NOTE]
> **Indeterminate Mode & Waves**:
> In indeterminate mode (`isIndeterminate={true}`), **there are no waves** in the `LinearProgressIndicator` (it renders flat animated dual-bar segments following Material 3 motion specifications), regardless of the `wavy` prop. The `CircularProgressIndicator` preserves continuous wave motion during indeterminate state while animating arc length and rotation.

---

## CircularProgressIndicator

The `CircularProgressIndicator` displays progress along a circular path. It supports both determinate (0–100%) and indeterminate spinning modes.

### Props

The `CircularProgressIndicator` component extends [React Aria Components ProgressBar](https://react-spectrum.adobe.com/react-aria/ProgressBar.html).

| Prop              | Type                                                                       | Default     | Description                                                                                       |
| ----------------- | -------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| `value`           | `number`                                                                   | —           | Current progress value.                                                                           |
| `minValue`        | `number`                                                                   | `0`         | Minimum progress value.                                                                           |
| `maxValue`        | `number`                                                                   | `100`       | Maximum progress value.                                                                           |
| `isIndeterminate` | `boolean`                                                                  | `false`     | Whether the progress indicator represents an indeterminate loading state.                         |
| `thickness`       | `"default" \| "thick"`                                                     | `"default"` | Stroke thickness variant: `"default"` (4px) or `"thick"` (8px).                                   |
| `wavy`            | `boolean`                                                                  | `true`      | Whether the active progress track renders an animated sine wave. When `false`, renders flat ring. |
| `size`            | `number`                                                                   | `48`        | Diameter / bounding box of the circular indicator in pixels.                                      |
| `children`        | `React.ReactNode \| ((values: ProgressBarRenderProps) => React.ReactNode)` | —           | Optional content (such as a percentage label) rendered in the center of the ring.                 |
| `className`       | `string \| ((values: ProgressBarRenderProps) => string)`                   | —           | Additional CSS class names.                                                                       |
| `style`           | `React.CSSProperties`                                                      | —           | Custom inline styles.                                                                             |

### Usage

```tsx
import { CircularProgressIndicator } from "@adgytec/web-ui-components";

// Determinate wavy circular progress (60%)
<CircularProgressIndicator value={60} aria-label="Uploading file" />

// Determinate flat circular progress (no waves)
<CircularProgressIndicator value={60} wavy={false} />

// Indeterminate loading spinner
<CircularProgressIndicator isIndeterminate aria-label="Loading..." />

// Thick variant with custom size and centered label
<CircularProgressIndicator
    value={75}
    thickness="thick"
    size={64}
    aria-label="Storage used"
>
    {({ percentage }) => <span>{percentage}%</span>}
</CircularProgressIndicator>
```

---

## LinearProgressIndicator

The `LinearProgressIndicator` displays progress horizontally across the available width. It supports both determinate (0–100%) and indeterminate loading modes.

### Props

The `LinearProgressIndicator` component extends [React Aria Components ProgressBar](https://react-spectrum.adobe.com/react-aria/ProgressBar.html).

| Prop              | Type                                                                       | Default     | Description                                                                                                                                                                    |
| ----------------- | -------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`           | `number`                                                                   | —           | Current progress value.                                                                                                                                                        |
| `minValue`        | `number`                                                                   | `0`         | Minimum progress value.                                                                                                                                                        |
| `maxValue`        | `number`                                                                   | `100`       | Maximum progress value.                                                                                                                                                        |
| `isIndeterminate` | `boolean`                                                                  | `false`     | Whether the progress indicator represents an indeterminate loading state. **In indeterminate mode, there are no waves** (renders flat animated segments regardless of `wavy`). |
| `thickness`       | `"default" \| "thick"`                                                     | `"default"` | Height/thickness variant: `"default"` (4px) or `"thick"` (8px).                                                                                                                |
| `wavy`            | `boolean`                                                                  | `true`      | Whether the active determinate bar renders an animated sine wave. **Note: In indeterminate mode, there are no waves regardless of this prop.**                                 |
| `children`        | `React.ReactNode \| ((values: ProgressBarRenderProps) => React.ReactNode)` | —           | Optional content rendered alongside the progress bar (e.g. a label or status).                                                                                                 |
| `className`       | `string \| ((values: ProgressBarRenderProps) => string)`                   | —           | Additional CSS class names.                                                                                                                                                    |
| `style`           | `React.CSSProperties`                                                      | —           | Custom inline styles.                                                                                                                                                          |

### Usage

```tsx
import { LinearProgressIndicator } from "@adgytec/web-ui-components";

// Determinate wavy progress bar (40%)
<LinearProgressIndicator value={40} aria-label="Loading assets" />

// Determinate flat progress bar (no waves)
<LinearProgressIndicator value={40} wavy={false} />

// Indeterminate progress bar (no waves in indeterminate mode)
<LinearProgressIndicator isIndeterminate aria-label="Loading..." />

// Thick variant with label
<LinearProgressIndicator value={70} thickness="thick">
    {({ percentage }) => (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Synchronizing</span>
            <span>{percentage}%</span>
        </div>
    )}
</LinearProgressIndicator>
```

---

## Thickness Variants

Both circular and linear progress indicators support two thickness variants:
- **`default`**: 4px stroke/height. Best for standard inline UI elements and compact layouts.
- **`thick`**: 8px stroke/height. Best for hero cards, dashboards, or prominent loading screens.

```tsx
<LinearProgressIndicator thickness="thick" value={50} />
<CircularProgressIndicator thickness="thick" value={50} />
```

---

## Customizing Colors

You can customize the indicator and track colors using CSS variables:

```css
.custom-progress {
    --md-linear-progress-indicator-active-color: var(--md-sys-color-tertiary);
    --md-linear-progress-indicator-track-color: var(
        --md-sys-color-tertiary-container
    );
    --md-circular-progress-indicator-active-color: var(--md-sys-color-tertiary);
    --md-circular-progress-indicator-track-color: var(
        --md-sys-color-tertiary-container
    );
}
```

```tsx
<div className="custom-progress">
    <LinearProgressIndicator value={60} />
    <CircularProgressIndicator isIndeterminate />
</div>;
```

---

Generated by Gemini
