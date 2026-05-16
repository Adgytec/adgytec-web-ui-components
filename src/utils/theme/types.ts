export type ThemeMode = "system" | "dark" | "light";

export type ThemeContrast = "standard" | "medium" | "high";

export type ThemeOptions = {
    defaultThemeMode?: ThemeMode;
    defaultContrast?: ThemeContrast;
    isMonochrome?: boolean;
    localStorageKey?: string;
    initializeWithValue?: boolean;
};

export type ThemeStorage = {
    mode: ThemeMode;
    contrast: ThemeContrast;
    isMonochrome: boolean;
};

export type ThemeReturn = ThemeStorage & {
    isDarkMode: boolean;

    setMode: (mode: ThemeMode) => void;
    setContrast: (contrast: ThemeContrast) => void;
    setMonochrome: (isMonochrome: boolean) => void;
};

export type ThemeBuildOptions = {
    contrast: ThemeContrast;
    isDarkMode: boolean;
    isMonochrome: boolean;
};
