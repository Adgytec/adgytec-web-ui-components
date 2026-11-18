import { useEffect } from "react";
import { GenerateTheme, useTheme } from "@/utils/theme";
import type { ThemeProviderProps } from "./types";

/**
 * Top-level provider component that generates and synchronizes Material Design 3 theme
 * CSS variables across the document.
 *
 * Utilizes {@link useTheme} to maintain reactive theme state (source color, contrast,
 * dynamic scheme variant, and dark mode mode) persisted in `localStorage`. Automatically
 * invokes {@link GenerateTheme} whenever any theme property changes, applying the full suite
 * of Material Design 3 color tokens (`--md-sys-color-*`) directly to `document.body` along with
 * the appropriate CSS `color-scheme` attribute (`"light"` or `"dark"`).
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from "@adgytec/web-ui-components";
 * import { COLOR_ADGYTEC_YELLOW } from "@adgytec/web-ui-components/utils";
 *
 * export function App() {
 *     return (
 *         <ThemeProvider themeOptions={{ defaultSourceColor: COLOR_ADGYTEC_YELLOW }}>
 *             <MainContent />
 *         </ThemeProvider>
 *     );
 * }
 * ```
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    themeOptions,
}) => {
    const { ternaryDarkMode, contrast, sourceColor, scheme } =
        useTheme(themeOptions);

    useEffect(() => {
        GenerateTheme({
            sourceColor: sourceColor.value,
            contrast: contrast.value,
            variant: scheme.value,
            isDark: ternaryDarkMode.isDarkMode,
        });
    }, [
        ternaryDarkMode.isDarkMode,
        contrast.value,
        sourceColor.value,
        scheme.value,
    ]);

    return children;
};
