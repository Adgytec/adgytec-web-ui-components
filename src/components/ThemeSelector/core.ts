import type { Key } from "react-aria-components";
import type { ThemeContrast, ThemeMode } from "@/utils";
import type { ThemeContrastTranslations, ThemeModeTranslations } from "./types";

/**
 * Generates an array of theme mode options with translated labels.
 *
 * @param modeDetails - Translations for theme mode labels (`system`, `light`, `dark`).
 * @returns Array of mode items with `id` and localized `value`.
 *
 * @example
 * ```tsx
 * const items = modeItems({
 *     heading: "Theme Mode",
 *     system: "System",
 *     light: "Light",
 *     dark: "Dark",
 * });
 * ```
 */
export const modeItems = (
    modeDetails: ThemeModeTranslations
): {
    id: ThemeMode;
    value: string;
}[] => {
    return [
        { id: "system", value: modeDetails.system },
        { id: "light", value: modeDetails.light },
        { id: "dark", value: modeDetails.dark },
    ];
};

/**
 * Generates an array of theme contrast options with translated labels.
 *
 * @param contrastDetails - Translations for contrast level labels (`standard`, `medium`, `high`).
 * @returns Array of contrast items with `id` and localized `value`.
 *
 * @example
 * ```tsx
 * const items = contrastItems({
 *     heading: "Contrast",
 *     standard: "Standard",
 *     medium: "Medium",
 *     high: "High",
 * });
 * ```
 */
export const contrastItems = (
    contrastDetails: ThemeContrastTranslations
): {
    id: ThemeContrast;
    value: string;
}[] => {
    return [
        { id: "standard", value: contrastDetails.standard },
        { id: "medium", value: contrastDetails.medium },
        { id: "high", value: contrastDetails.high },
    ];
};

/**
 * Type guard function to check if a React Aria `Key` is a valid {@link ThemeMode}.
 *
 * @param value - The key to test.
 * @returns `true` if `value` is `"system"`, `"light"`, or `"dark"`.
 *
 * @example
 * ```tsx
 * if (isThemeMode(selectedKey)) {
 *     setMode(selectedKey);
 * }
 * ```
 */
export function isThemeMode(value: Key): value is ThemeMode {
    return value === "system" || value === "dark" || value === "light";
}

/**
 * Type guard function to check if a React Aria `Key` is a valid {@link ThemeContrast}.
 *
 * @param value - The key to test.
 * @returns `true` if `value` is `"standard"`, `"medium"`, or `"high"`.
 *
 * @example
 * ```tsx
 * if (isThemeContrast(selectedKey)) {
 *     setContrast(selectedKey);
 * }
 * ```
 */
export function isThemeContrast(value: Key): value is ThemeContrast {
    return value === "standard" || value === "medium" || value === "high";
}
