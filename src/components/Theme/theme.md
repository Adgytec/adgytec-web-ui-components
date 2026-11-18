# ThemeProvider

The `ThemeProvider` component provides dynamic Material Design 3 theming across the entire application. It integrates with [`useThemeGlobal`](../../utils/theme/useThemeGlobal.ts) and [`GenerateTheme`](../../utils/theme/generate.ts) to calculate accessible color palettes from a seed color, contrast setting, and dynamic scheme variant, injecting CSS custom properties into `document.body` and providing reactive theme state to child components through React Context (accessible via [`useTheme`](./useTheme.ts)).

---

## Props

| Prop           | Type                  | Default         | Description                                                                                          |
| -------------- | --------------------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| `children`     | `ReactNode`           | —               | Child components rendered within the themed application tree.                                        |
| `themeOptions` | `ThemeOptions`        | —               | Configuration object defining the required seed color, and optional contrast, scheme, and dark mode. |
| `target`       | `HTMLElement \| null` | `document.body` | Optional target DOM element to receive CSS variables and color-scheme.                               |

### `ThemeOptions` Details

| Option               | Type                     | Default                                      | Description                                                                       |
| -------------------- | ------------------------ | -------------------------------------------- | --------------------------------------------------------------------------------- |
| `defaultSourceColor` | `string`                 | — _(Required)_                               | Hex string representing the seed color used to compute dynamic color roles.       |
| `defaultContrast`    | `number`                 | `0`                                          | Numeric contrast level (`-1.0` to `1.0`, where `0.0` represents standard).        |
| `defaultScheme`      | `MaterialScheme`         | `MaterialScheme.VIBRANT` (`Variant.VIBRANT`) | Dynamic color scheme algorithm variant from `@material/material-color-utilities`. |
| `ternaryDarkMode`    | `TernaryDarkModeOptions` | —                                            | Dark mode configuration options passed to `useTernaryDarkMode`.                   |

---

## Injected CSS Custom Properties

Whenever the theme state changes (e.g. toggling dark mode or updating the seed color), `ThemeProvider` recalculates all Material 3 color roles and sets them on `document.body`:

- **Document Color Scheme**: `color-scheme: "dark"` or `color-scheme: "light"`.
- **Primary Roles**: `--md-sys-color-primary`, `--md-sys-color-on-primary`, `--md-sys-color-primary-container`, `--md-sys-color-on-primary-container`, etc.
- **Secondary Roles**: `--md-sys-color-secondary`, `--md-sys-color-on-secondary`, `--md-sys-color-secondary-container`, `--md-sys-color-on-secondary-container`, etc.
- **Tertiary Roles**: `--md-sys-color-tertiary`, `--md-sys-color-on-tertiary`, `--md-sys-color-tertiary-container`, `--md-sys-color-on-tertiary-container`, etc.
- **Error Roles**: `--md-sys-color-error`, `--md-sys-color-on-error`, `--md-sys-color-error-container`, `--md-sys-color-on-error-container`, etc.
- **Surface & Background**: `--md-sys-color-surface`, `--md-sys-color-on-surface`, `--md-sys-color-surface-variant`, `--md-sys-color-on-surface-variant`, `--md-sys-color-background`, `--md-sys-color-on-background`, etc.
- **Surface Containers**: `--md-sys-color-surface-container-lowest`, `--md-sys-color-surface-container-low`, `--md-sys-color-surface-container`, `--md-sys-color-surface-container-high`, `--md-sys-color-surface-container-highest`, `--md-sys-color-surface-dim`, `--md-sys-color-surface-bright`.
- **Outline & Utility**: `--md-sys-color-outline`, `--md-sys-color-outline-variant`, `--md-sys-color-shadow`, `--md-sys-color-scrim`, `--md-sys-color-inverse-surface`, `--md-sys-color-inverse-on-surface`, `--md-sys-color-inverse-primary`.
- **Fixed Roles**: `--md-sys-color-primary-fixed`, `--md-sys-color-primary-fixed-dim`, `--md-sys-color-on-primary-fixed`, `--md-sys-color-on-primary-fixed-variant`, etc.

---

## State Persistence

All theme preferences are automatically persisted in `localStorage` under standard keys:
- `"material-source-color"`: Selected seed color hex string.
- `"material-contrast"`: Selected contrast level number.
- `"material-scheme"`: Selected Material dynamic scheme variant numeric enum.
- Dark mode preference managed by `useTernaryDarkMode` (system, light, or dark).

---

## Usage

### 1. Basic Application Setup

Wrap the root of your application with `ThemeProvider`:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, COLOR_ADGYTEC_BLUE } from "@adgytec/web-ui-components";
import App from "./App";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider
            themeOptions={{ defaultSourceColor: COLOR_ADGYTEC_BLUE }}
        >
            <App />
        </ThemeProvider>
    </StrictMode>
);
```

### 2. Custom Initial Seed Color & Contrast

Initialize the theme with custom defaults (such as a brand yellow accent and high contrast):

```tsx
import {
    ThemeProvider,
    COLOR_ADGYTEC_YELLOW,
} from "@adgytec/web-ui-components";

export function Root() {
    return (
        <ThemeProvider
            themeOptions={{
                defaultSourceColor: COLOR_ADGYTEC_YELLOW,
                defaultContrast: 0.5,
            }}
        >
            <App />
        </ThemeProvider>
    );
}
```

### 3. Pairing with `useTheme` for a Theme Switcher

Any child component within the `ThemeProvider` hierarchy can call `useTheme` to inspect and modify the active theme settings:

```tsx
import { useTheme } from "@adgytec/web-ui-components";

export function ThemeSwitcher() {
    const {
        ternaryDarkMode: { ternaryDarkMode, setTernaryDarkMode },
        sourceColor: { value: color, setValue: setColor },
    } = useTheme();

    return (
        <div>
            <button onClick={() => setTernaryDarkMode("dark")}>
                Dark Mode
            </button>
            <button onClick={() => setTernaryDarkMode("light")}>
                Light Mode
            </button>
            <button onClick={() => setColor("#FF0055")}>Set Pink Theme</button>
        </div>
    );
}
```
