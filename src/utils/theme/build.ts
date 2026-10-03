import type { ThemeBuildOptions } from "./types";

/**
 * Generates the theme string suffix or identifier based on current theme settings.
 *
 * This identifier corresponds to the theme definition classes and data attributes
 * (such as `data-theme="..."`) applied to the root element (`document.documentElement` or body).
 *
 * - Monochrome modes produce `"monochrome-dark"` or `"monochrome-light"`.
 * - Standard contrast modes produce `"dark"` or `"light"`.
 * - Elevated contrast modes produce `"dark-medium-contrast"`, `"dark-high-contrast"`,
 *   `"light-medium-contrast"`, or `"light-high-contrast"`.
 *
 * @param options - Theme configuration flags (dark mode, monochrome, contrast).
 * @returns Formatted theme string (e.g. `"dark"`, `"light-high-contrast"`, `"monochrome-dark"`).
 *
 * @example
 * ```ts
 * const themeString = buildThemeString({
 *     isDarkMode: true,
 *     isMonochrome: false,
 *     contrast: "high",
 * });
 * // returns "dark-high-contrast"
 * ```
 */
export const buildThemeString = ({
    isDarkMode,
    isMonochrome,
    contrast,
}: ThemeBuildOptions): string => {
    const mode = isDarkMode ? "dark" : "light";
    if (isMonochrome) return `monochrome-${mode}`;

    const contrastSuffix =
        contrast === "standard"
            ? ""
            : contrast === "medium"
              ? "-medium-contrast"
              : "-high-contrast";

    return `${mode}${contrastSuffix}`;
};
