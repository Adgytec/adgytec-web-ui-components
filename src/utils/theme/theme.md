# Theme Utility

The theme utility provides a comprehensive set of functions, hooks, types, and constants for generating, managing, and applying [Material Design 3 Dynamic Color Themes](https://m3.material.io/styles/color/dynamic-color/overview) using `@material/material-color-utilities`.

---

## Constants

Brand color constants for default themes:

| Constant               | Type     | Hex Value | Description                                                             |
| ---------------------- | -------- | --------- | ----------------------------------------------------------------------- |
| `COLOR_ADGYTEC_BLUE`   | `string` | `#00ADEE` | Primary brand blue color. Used as the default seed color for the theme. |
| `COLOR_ADGYTEC_YELLOW` | `string` | `#FFD900` | Secondary brand yellow accent color.                                    |

---

## Functions & Hooks

### `useThemeGlobal(opts)`

A low-level custom React hook for inspecting and mutating the global Material Design 3 theme state with direct `localStorage` persistence.

> **Note:** Within standard application component trees wrapped with `ThemeProvider`, prefer using the context-based [`useTheme`](../../components/Theme/useTheme.ts) hook from `@adgytec/web-ui-components`. Use `useThemeGlobal` when managing theme state outside of a provider hierarchy or when building custom providers.

#### Options (`ThemeOptions`)

| Option               | Type                     | Default                                      | Description                                                               |
| -------------------- | ------------------------ | -------------------------------------------- | ------------------------------------------------------------------------- |
| `defaultSourceColor` | `string`                 | — _(Required)_                               | Seed color in hexadecimal format used to generate the color palette.      |
| `defaultContrast`    | `number`                 | `0`                                          | Initial/fallback contrast level (`-1.0` to `1.0`, where `0` is standard). |
| `defaultScheme`      | `MaterialScheme`         | `MaterialScheme.VIBRANT` (`Variant.VIBRANT`) | Initial dynamic scheme variant algorithm from Material Color Utilities.   |
| `ternaryDarkMode`    | `TernaryDarkModeOptions` | —                                            | Configuration options passed to `usehooks-ts` `useTernaryDarkMode`.       |

#### Return Value (`ThemeReturn`)

| Property          | Type                               | Description                                                                                                    |
| ----------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ternaryDarkMode` | `TernaryDarkModeReturn`            | Dark mode controls and state (`ternaryDarkMode`, `setTernaryDarkMode`, `toggleTernaryDarkMode`, `isDarkMode`). |
| `contrast`        | `ThemeReturnValue<number>`         | Current numeric contrast level (`value`) and its reactive state updater function (`setValue`).                 |
| `sourceColor`     | `ThemeReturnValue<string>`         | Current seed hex color string (`value`) and its reactive state updater function (`setValue`).                  |
| `scheme`          | `ThemeReturnValue<MaterialScheme>` | Current dynamic scheme variant (`value`) and its reactive state updater function (`setValue`).                 |

#### Persisted Storage Keys

- `"material-source-color"`: Persists the active seed color.
- `"material-contrast"`: Persists the active contrast level.
- `"material-scheme"`: Persists the active dynamic scheme variant enum.
- Dark mode preference managed by `useTernaryDarkMode` (system, light, or dark).

---

### `GenerateTheme(options)`

A standalone function that generates a Material Design 3 `DynamicScheme` and injects all resulting color tokens (`--md-sys-color-*`) directly into `document.body.style`, as well as updating the `color-scheme` CSS property (`"dark"` or `"light"`).

Can be used without React components (e.g. during application bootstrap or in vanilla JavaScript environments).

#### Options (`GenerateThemeOptions`)

| Option        | Type                  | Description                                                                                                                                   |
| ------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceColor` | `string`              | Seed color in hexadecimal format used to generate the color palette (e.g. `"#00ADEE"`).                                                       |
| `contrast`    | `number`              | Contrast adjustment level (`-1.0` to `1.0`, where `0.0` is standard).                                                                         |
| `variant`     | `Variant`             | Dynamic scheme variant algorithm from `@material/material-color-utilities` (e.g. `Variant.VIBRANT`).                                          |
| `isDark`      | `boolean`             | Whether to produce dark mode (`true`) or light mode (`false`) colors.                                                                         |
| `target`      | `HTMLElement \| null` | Optional DOM element to receive CSS properties. Defaults to `document.body`. Safely no-ops in SSR environments where `document` is undefined. |

#### Applied CSS Variables

Sets all Material 3 system color roles on `document.body`:
- **Primary**: `--md-sys-color-primary`, `--md-sys-color-on-primary`, `--md-sys-color-primary-container`, `--md-sys-color-on-primary-container`
- **Secondary**: `--md-sys-color-secondary`, `--md-sys-color-on-secondary`, `--md-sys-color-secondary-container`, `--md-sys-color-on-secondary-container`
- **Tertiary**: `--md-sys-color-tertiary`, `--md-sys-color-on-tertiary`, `--md-sys-color-tertiary-container`, `--md-sys-color-on-tertiary-container`
- **Error**: `--md-sys-color-error`, `--md-sys-color-on-error`, `--md-sys-color-error-container`, `--md-sys-color-on-error-container`
- **Surface**: `--md-sys-color-surface`, `--md-sys-color-surface-tint`, `--md-sys-color-on-surface`, `--md-sys-color-surface-variant`, `--md-sys-color-on-surface-variant`
- **Surface Containers**: `--md-sys-color-surface-container-lowest`, `--md-sys-color-surface-container-low`, `--md-sys-color-surface-container`, `--md-sys-color-surface-container-high`, `--md-sys-color-surface-container-highest`, `--md-sys-color-surface-dim`, `--md-sys-color-surface-bright`
- **Outline & Utility**: `--md-sys-color-outline`, `--md-sys-color-outline-variant`, `--md-sys-color-shadow`, `--md-sys-color-scrim`, `--md-sys-color-inverse-surface`, `--md-sys-color-inverse-on-surface`, `--md-sys-color-inverse-primary`
- **Fixed Roles**: `--md-sys-color-primary-fixed`, `--md-sys-color-on-primary-fixed`, `--md-sys-color-primary-fixed-dim`, `--md-sys-color-on-primary-fixed-variant`, etc.

---

## Usage

### 1. Building a Standalone / Custom Theme Controller

Use `useThemeGlobal` to create controls for dark mode, brand seed colors, and contrast independently of a provider:

```tsx
import {
    useThemeGlobal,
    COLOR_ADGYTEC_YELLOW,
    COLOR_ADGYTEC_BLUE,
} from "@adgytec/web-ui-components/utils";
import { Variant } from "@material/material-color-utilities";

export function ThemeControls() {
    const {
        ternaryDarkMode: { ternaryDarkMode, setTernaryDarkMode },
        sourceColor: { value: color, setValue: setColor },
        contrast: { value: contrast, setValue: setContrast },
        scheme: { value: variant, setValue: setVariant },
    } = useThemeGlobal({ defaultSourceColor: COLOR_ADGYTEC_YELLOW });

    return (
        <div>
            <h3>Dark Mode</h3>
            <button onClick={() => setTernaryDarkMode("system")}>System</button>
            <button onClick={() => setTernaryDarkMode("light")}>Light</button>
            <button onClick={() => setTernaryDarkMode("dark")}>Dark</button>

            <h3>Seed Color</h3>
            <button onClick={() => setColor(COLOR_ADGYTEC_YELLOW)}>
                Yellow
            </button>
            <button onClick={() => setColor(COLOR_ADGYTEC_BLUE)}>Blue</button>

            <h3>Contrast Level: {contrast}</h3>
            <input
                type="range"
                min="-1"
                max="1"
                step="0.1"
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
            />

            <h3>Dynamic Scheme Variant</h3>
            <select
                value={variant}
                onChange={(e) => setVariant(Number(e.target.value) as Variant)}
            >
                <option value={Variant.VIBRANT}>Vibrant</option>
                <option value={Variant.EXPRESSIVE}>Expressive</option>
                <option value={Variant.CONTENT}>Content</option>
                <option value={Variant.TONAL_SPOT}>Tonal Spot</option>
            </select>
        </div>
    );
}
```

### 2. Standalone / Imperative Theme Generation

Generate and apply theme tokens without React:

```ts
import { GenerateTheme, COLOR_ADGYTEC_BLUE } from "@adgytec/web-ui-components";
import { Variant } from "@material/material-color-utilities";

// Apply theme to document.body immediately
GenerateTheme({
    sourceColor: COLOR_ADGYTEC_BLUE,
    contrast: 0,
    variant: Variant.VIBRANT,
    isDark: true,
});
```
