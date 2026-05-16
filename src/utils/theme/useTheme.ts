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

export function useTheme({
    defaultThemeMode = "system",
    defaultContrast = "standard",
    isMonochrome = false,
    localStorageKey = LOCAL_STORAGE_KEY,
    initializeWithValue = true,
}: ThemeOptions = {}): ThemeReturn {
    const defaultValue: ThemeStorage = {
        mode: defaultThemeMode,
        contrast: defaultContrast,
        isMonochrome,
    };

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

    const setMode = (mode: ThemeMode) => {
        setTheme((prev) => ({ ...prev, mode }));
    };

    const setContrast = (contrast: ThemeContrast) => {
        setTheme((prev) => ({ ...prev, contrast }));
    };

    const setMonochrome = (isMonochrome: boolean) => {
        setTheme((prev) => ({ ...prev, isMonochrome }));
    };

    return {
        ...theme,
        isDarkMode,
        setMode,
        setContrast,
        setMonochrome,
    };
}
