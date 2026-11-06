import type { ButtonSize, ConnectedButtonGroupColor } from "../Button";

/**
 * Base translation interface providing a section heading and optional description.
 */
export interface ThemeBaseTranslations {
    /**
     * Section title heading text.
     */
    heading: string;

    /**
     * Optional explanatory text describing the setting.
     */
    description?: string;
}

/**
 * Translations for the Theme Mode section of {@link ThemeSelector}.
 */
export interface ThemeModeTranslations extends ThemeBaseTranslations {
    /**
     * Label for the system preference mode.
     */
    system: string;

    /**
     * Label for the light theme mode.
     */
    light: string;

    /**
     * Label for the dark theme mode.
     */
    dark: string;
}

/**
 * Translations for the Theme Contrast section of {@link ThemeSelector}.
 */
export interface ThemeContrastTranslations extends ThemeBaseTranslations {
    /**
     * Label for the standard contrast option.
     */
    standard: string;

    /**
     * Label for the medium contrast option.
     */
    medium: string;

    /**
     * Label for the high contrast option.
     */
    high: string;
}

/**
 * Translations for the Monochrome toggle section of {@link ThemeSelector}.
 */
export interface ThemeMonochromeTranslations extends ThemeBaseTranslations {}

/**
 * Props for the {@link ThemeSelector} component.
 * Allows customization and localization of headings, descriptions, and button labels.
 *
 * @example
 * ```tsx
 * import { ThemeSelector } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return (
 *         <ThemeSelector
 *             modeDetails={{
 *                 heading: "Appearance",
 *                 description: "Customize how the app looks.",
 *                 system: "Auto",
 *                 light: "Day",
 *                 dark: "Night",
 *             }}
 *         />
 *     );
 * }
 * ```
 */
export type ThemeSelectorProps = {
    /**
     * Custom text and translations for the Theme Mode section.
     */
    modeDetails?: ThemeModeTranslations;

    /**
     * Custom text and translations for the Theme Contrast section.
     */
    contrastDetails?: ThemeContrastTranslations;

    /**
     * Custom text and translations for the Monochrome toggle section.
     */
    monochromeDetails?: ThemeMonochromeTranslations;

    /**
     * Optional custom CSS class name applied to the root container.
     */
    className?: string;

    /**
     * Color styling variant for the connected button groups.
     *
     * @default "tonal"
     */
    buttonColor?: ConnectedButtonGroupColor;

    /**
     * Size of the connected button groups.
     *
     * @default "small"
     */
    buttonSize?: ButtonSize;

    /**
     * Whether to show the Theme Mode selection section.
     *
     * @default true
     */
    showMode?: boolean;

    /**
     * Whether to show the Theme Contrast selection section.
     *
     * @default true
     */
    showContrast?: boolean;

    /**
     * Whether to show the Monochrome toggle section.
     *
     * @default true
     */
    showMonochrome?: boolean;

    /**
     * Whether to render dividers between sections.
     *
     * @default false
     */
    showDividers?: boolean;
};
