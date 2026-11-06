# Theme Selector

The `ThemeSelector` component provides a user interface for managing application theme settings, including theme mode (Light, Dark, System), contrast levels (Standard, Medium, High), and monochrome mode.

---

## Components

The Theme Selector module consists of:

1. **`ThemeSelector`**: The main settings UI component rendering controls for Theme Mode, Theme Contrast, and Monochrome mode. It connects internally to the `useTheme` hook.
2. **`ThemeItem`**: A layout helper component that renders a section heading (`typography.titleMedium`), optional description (`typography.bodyMedium`), and child interactive controls. Supports block and inline rendering, as well as disabled styling.
3. **`ThemeProvider`**: An application wrapper component that listens to theme changes via `useTheme` and synchronizes the computed theme string to the `data-theme` attribute on `document.documentElement`.

---

## Props

### `ThemeSelector`

The `ThemeSelector` accepts optional translation objects to customize labels and descriptions, as well as layout and appearance settings.

| Prop                | Type                          | Default        | Description                                                                                                    |
| ------------------- | ----------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------- |
| `modeDetails`       | `ThemeModeTranslations`       | Default labels | Customizes text for the Theme Mode section.                                                                    |
| `contrastDetails`   | `ThemeContrastTranslations`   | Default labels | Customizes text for the Theme Contrast section.                                                                |
| `monochromeDetails` | `ThemeMonochromeTranslations` | Default labels | Customizes text for the Monochrome section.                                                                    |
| `className`         | `string`                      | `undefined`    | Custom CSS class applied to the root container.                                                                |
| `buttonColor`       | `ConnectedButtonGroupColor`   | `"tonal"`      | Color variant for connected button groups (`"filled"`, `"tonal"`, `"outlined"`, `"elevated"`).                 |
| `buttonSize`        | `ButtonSize`                  | `"small"`      | Size variant for connected button groups (`"extra-small"`, `"small"`, `"medium"`, `"large"`, `"extra-large"`). |
| `showMode`          | `boolean`                     | `true`         | Whether to display the Theme Mode selection section.                                                           |
| `showContrast`      | `boolean`                     | `true`         | Whether to display the Theme Contrast selection section.                                                       |
| `showMonochrome`    | `boolean`                     | `true`         | Whether to display the Monochrome toggle section.                                                              |
| `showDividers`      | `boolean`                     | `false`        | Whether to render dividers between sections.                                                                   |

### `ThemeItem`

A layout component for grouping an individual setting's heading, description, and interactive controls.

| Prop          | Type        | Default      | Description                                                                                                      |
| ------------- | ----------- | ------------ | ---------------------------------------------------------------------------------------------------------------- |
| `heading`     | `string`    | **Required** | Section title heading text.                                                                                      |
| `description` | `string`    | `undefined`  | Optional explanatory text describing the setting.                                                                |
| `children`    | `ReactNode` | `undefined`  | Interactive control element(s) (e.g., connected button groups or switches).                                      |
| `className`   | `string`    | `undefined`  | Custom CSS class name applied to the container.                                                                  |
| `useInline`   | `boolean`   | `false`      | Whether to render inline `<span>` elements instead of block `<div>` elements (useful inside labels or switches). |
| `isDisabled`  | `boolean`   | `false`      | Whether the setting item is disabled (visually dimmed and sets `data-disabled="true"`).                          |

### `ThemeProvider`

| Prop       | Type        | Default     | Description                                             |
| ---------- | ----------- | ----------- | ------------------------------------------------------- |
| `children` | `ReactNode` | `undefined` | Application content to be rendered inside the provider. |

---

## Translation Interfaces and Defaults

### Interfaces

```ts
export interface ThemeBaseTranslations {
    heading: string;
    description?: string;
}

export interface ThemeModeTranslations extends ThemeBaseTranslations {
    system: string;
    light: string;
    dark: string;
}

export interface ThemeContrastTranslations extends ThemeBaseTranslations {
    standard: string;
    medium: string;
    high: string;
}

export interface ThemeMonochromeTranslations extends ThemeBaseTranslations {}
```

### Default Translations

If not provided, the following defaults are used:

- **Theme Mode (`defaultMode`)**:
  - `heading`: `"Theme Mode"`
  - `description`: `"Choose how the interface appearance is displayed across the app. You can follow your system settings or manually use light or dark mode."`
  - `system`: `"System"`, `light`: `"Light"`, `dark`: `"Dark"`
- **Theme Contrast (`defaultContrast`)**:
  - `heading`: `"Theme Contrast"`
  - `description`: `"Adjust the interface contrast level to improve visibility and readability based on your visual preference and viewing environment."`
  - `standard`: `"Standard"`, `medium`: `"Medium"`, `high`: `"High"`
- **Monochrome (`defaultMonochrome`)**:
  - `heading`: `"Monochrome"`
  - `description`: `"Use a monochrome appearance with neutral tones instead of the default colorful theme. This can provide a cleaner and more focused visual experience."`

---

## Behavior and Features

- **Monochrome Disables Contrast**: When monochrome mode is activated (`isMonochrome === true`), the Theme Contrast section is automatically dimmed and disabled (`isDisabled={true}`) because contrast options do not apply in monochrome mode.
- **Monochrome UI**: Rendered using a `ListBox` and `ListItem` containing a leading `Palette` icon (`ListIcon`), heading as label, description as supporting text, and a trailing `Switch`.
- **Conditional Dividers**: When `showDividers` is `true`, dividers are only rendered between visible sections (e.g. between Mode and Contrast, or between Contrast and Monochrome).
- **DOM Synchronization**: `ThemeProvider` uses `useLayoutEffect` to compute the theme string (via `buildThemeString`) and set the `data-theme` attribute on `document.documentElement`.
- **State Persistence**: Theme selections are managed by the `useTheme` hook and automatically persisted to `localStorage` under the `"application-theme"` key.

---

## Helper Functions and Utilities

The module also exports helper functions and type guards from `core.ts`:

| Function / Guard                                            | Return Type              | Description                                                                                           |
| ----------------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `modeItems(modeDetails: ThemeModeTranslations)`             | `ThemeModeItem[]`        | Generates theme mode option items with translated labels and Lucide icons (`SunMoon`, `Sun`, `Moon`). |
| `contrastItems(contrastDetails: ThemeContrastTranslations)` | `ThemeContrastItem[]`    | Generates theme contrast option items with translated labels.                                         |
| `isThemeMode(value: Key)`                                   | `value is ThemeMode`     | Type guard checking whether a React Aria `Key` is `"system"`, `"light"`, or `"dark"`.                 |
| `isThemeContrast(value: Key)`                               | `value is ThemeContrast` | Type guard checking whether a React Aria `Key` is `"standard"`, `"medium"`, or `"high"`.              |

---

## Usage

### 1. Basic Application Setup

Wrap your application in `ThemeProvider` and render `ThemeSelector` where needed (e.g., in a settings menu or dialog).

```tsx
import { ThemeProvider, ThemeSelector } from "@adgytec/web-ui-components";

function App() {
    return (
        <ThemeProvider>
            <MainLayout>
                {/* ... app content ... */}
                <SettingsDialog>
                    <ThemeSelector />
                </SettingsDialog>
            </MainLayout>
        </ThemeProvider>
    );
}
```

### 2. Custom Translations and Dividers

```tsx
import { ThemeSelector } from "@adgytec/web-ui-components";

export function CustomThemeSelector() {
    return (
        <ThemeSelector
            showDividers
            buttonColor="tonal"
            buttonSize="medium"
            modeDetails={{
                heading: "Appearance",
                description: "Customize how the app looks on your device.",
                system: "Auto",
                light: "Day",
                dark: "Night",
            }}
        />
    );
}
```

### 3. Using `ThemeItem` Independently

`ThemeItem` can also be used as a standalone layout block for custom settings items:

```tsx
import { ThemeItem, Switch } from "@adgytec/web-ui-components";
import { useState } from "react";

export function CustomSetting() {
    const [enabled, setEnabled] = useState(false);

    return (
        <ThemeItem
            heading="Sound Effects"
            description="Play sound notifications on critical events."
        >
            <Switch isSelected={enabled} onChange={setEnabled} />
        </ThemeItem>
    );
}
```
