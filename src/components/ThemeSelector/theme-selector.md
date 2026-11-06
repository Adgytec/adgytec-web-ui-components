# Theme Selector

The `ThemeSelector` component provides a user interface for managing application theme settings, including theme mode (Light, Dark, System), contrast levels (Standard, Medium, High), and monochrome mode.

## Components

### `ThemeSelector`

The UI component that renders the settings controls. It uses the `useTheme` hook internally to manage state.

### `ThemeItem`

A layout helper component that renders a section title heading, optional description, and child interactive controls. Also supports inline rendering and disabled visual styling.

### `ThemeProvider`

A component that should wrap your application. It listens to theme changes from the `useTheme` hook and applies the corresponding `data-theme` attribute to the `document.documentElement`.

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

#### Translation Interfaces

```ts
interface ThemeBaseTranslations {
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

## Usage

To use the theme selection system, wrap your app in `ThemeProvider` and then render the `ThemeSelector` where needed (e.g., in a settings menu).

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

### Custom Translations and Dividers

```tsx
<ThemeSelector
    showDividers
    buttonColor="tonal"
    modeDetails={{
        heading: "Appearance",
        description: "Customize how the app looks.",
        system: "Auto",
        light: "Day",
        dark: "Night",
    }}
/>;
```
