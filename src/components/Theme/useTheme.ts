import { useContext } from "react";
import type { ThemeReturn } from "@/utils/theme";
import { ThemeContext } from "./context";

/**
 * Accesses the active Material Design 3 theme state and controller functions provided by {@link ThemeProvider}.
 *
 * Provides reactive access and updater functions for the active seed color (`sourceColor`),
 * contrast level (`contrast`), dynamic scheme variant (`scheme`), and dark mode controls (`ternaryDarkMode`).
 *
 * @throws {Error} If invoked outside of a {@link ThemeProvider} hierarchy.
 * @returns The active {@link ThemeReturn} context state.
 *
 * @example
 * ```tsx
 * import { useTheme } from "@adgytec/web-ui-components";
 *
 * export function ThemeToggle() {
 *     const {
 *         ternaryDarkMode: { toggleTernaryDarkMode, isDarkMode },
 *     } = useTheme();
 *
 *     return (
 *         <button onClick={toggleTernaryDarkMode}>
 *             {isDarkMode ? "Light Mode" : "Dark Mode"}
 *         </button>
 *     );
 * }
 * ```
 */
export function useTheme(): ThemeReturn {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider.");
    }

    return context;
}
