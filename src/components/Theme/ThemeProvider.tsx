import { useEffect } from "react";
import { GenerateTheme, useThemeGlobal } from "@/utils/theme";
import { ThemeContext } from "./context";
import type { ThemeProviderProps } from "./types";

/**
 * Top-level provider component that generates and synchronizes Material Design 3 theme
 * CSS variables across the document and exposes theme state through React Context.
 *
 * Utilizes {@link useThemeGlobal} to maintain reactive theme state (source color, contrast,
 * dynamic scheme variant, and dark mode), persisted in `localStorage`. Automatically
 * invokes {@link GenerateTheme} whenever any theme property changes, applying the full suite
 * of Material Design 3 color tokens (`--md-sys-color-*`) directly to `document.documentElement` along with
 * the appropriate CSS `color-scheme` attribute (`"light"` or `"dark"`).
 *
 * Child components can access and modify the active theme via the {@link useTheme} hook.
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
    target,
}) => {
    const theme = useThemeGlobal(themeOptions);

    useEffect(() => {
        GenerateTheme({
            sourceColor: theme.sourceColor.value,
            contrast: theme.contrast.value,
            variant: theme.scheme.value,
            isDark: theme.ternaryDarkMode.isDarkMode,
            target,
        });
    }, [
        theme.ternaryDarkMode.isDarkMode,
        theme.contrast.value,
        theme.sourceColor.value,
        theme.scheme.value,
        target,
    ]);

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};
