import { useCallback, useMemo } from "react";
import { useLocalStorage, useMediaQuery } from "usehooks-ts";
import type {
    ThemeContrast,
    ThemeMode,
    ThemeOptions,
    ThemeReturn,
    ThemeStorage,
} from "./types";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_KEY = "application-theme";

/**
 * React hook that manages the application theme state with `localStorage` persistence
 * and automatic synchronization with system preferences.
 *
 * Tracks theme mode (`"system"`, `"dark"`, `"light"`), contrast level (`"standard"`,
 * `"medium"`, `"high"`), and monochrome mode. When `mode` is set to `"system"`,
 * `isDarkMode` dynamically listens to the OS `(prefers-color-scheme: dark)` media query.
 *
 * All setter callbacks (`setMode`, `setContrast`, `setMonochrome`) are referentially stable
 * via `useCallback`.
 *
 * @param options - Configuration options for initial defaults and storage key.
 * @returns Current theme state and updater functions.
 *
 * @example
 * ```tsx
 * import { useTheme, buildThemeString } from '@adgytec/web-ui-components';
 * import { useEffect } from 'react';
 *
 * function App() {
 *     const theme = useTheme();
 *
 *     useEffect(() => {
 *         const themeString = buildThemeString({
 *             isDarkMode: theme.isDarkMode,
 *             isMonochrome: theme.isMonochrome,
 *             contrast: theme.contrast,
 *         });
 *         document.documentElement.setAttribute('data-theme', themeString);
 *     }, [theme.isDarkMode, theme.isMonochrome, theme.contrast]);
 *
 *     return (
 *         <div>
 *             <button onClick={() => theme.setMode('dark')}>Dark Mode</button>
 *             <button onClick={() => theme.setContrast('high')}>High Contrast</button>
 *         </div>
 *     );
 * }
 * ```
 */
export function useTheme({
    defaultThemeMode = "system",
    defaultContrast = "standard",
    isMonochrome = false,
    localStorageKey = LOCAL_STORAGE_KEY,
    initializeWithValue = true,
}: ThemeOptions = {}): ThemeReturn {
    const defaultValue: ThemeStorage = useMemo(
        () => ({
            mode: defaultThemeMode,
            contrast: defaultContrast,
            isMonochrome,
        }),
        [defaultThemeMode, defaultContrast, isMonochrome]
    );

    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, { initializeWithValue });
    const [theme, setTheme] = useLocalStorage<ThemeStorage>(
        localStorageKey,
        defaultValue,
        {
            initializeWithValue,
        }
    );

    const isDarkMode =
        theme.mode === "dark" || (theme.mode === "system" && isDarkOS);

    const setMode = useCallback(
        (mode: ThemeMode) => {
            setTheme((prev) => ({ ...prev, mode }));
        },
        [setTheme]
    );

    const setContrast = useCallback(
        (contrast: ThemeContrast) => {
            setTheme((prev) => ({ ...prev, contrast }));
        },
        [setTheme]
    );

    const setMonochrome = useCallback(
        (isMonochrome: boolean) => {
            setTheme((prev) => ({ ...prev, isMonochrome }));
        },
        [setTheme]
    );

    return {
        ...theme,
        isDarkMode,
        setMode,
        setContrast,
        setMonochrome,
    };
}
