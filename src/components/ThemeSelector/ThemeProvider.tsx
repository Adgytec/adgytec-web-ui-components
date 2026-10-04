import { type ReactNode, useLayoutEffect } from "react";
import { buildThemeString, useTheme } from "@/utils";

/**
 * Props for the {@link ThemeProvider} component.
 */
export interface ThemeProviderProps {
    /**
     * Application content to be rendered inside the provider.
     */
    children?: ReactNode;
}

/**
 * Top-level provider component that synchronizes the application root with the current theme settings.
 *
 * Subscribes to the theme state via {@link useTheme} (mode, dark mode calculation,
 * contrast level, and monochrome setting) and dynamically assigns the computed theme
 * string to the `data-theme` attribute of `document.documentElement`.
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from "@adgytec/web-ui-components";
 *
 * export function App() {
 *     return (
 *         <ThemeProvider>
 *             <MainContent />
 *         </ThemeProvider>
 *     );
 * }
 * ```
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const { isDarkMode, isMonochrome, contrast } = useTheme();

    useLayoutEffect(() => {
        const themeString = buildThemeString({
            isDarkMode,
            isMonochrome,
            contrast,
        });
        document.documentElement.setAttribute("data-theme", themeString);
    }, [isDarkMode, isMonochrome, contrast]);

    return children;
};
