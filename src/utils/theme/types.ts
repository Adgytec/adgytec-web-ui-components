/**
 * Supported theme modes:
 * - `"system"`: Follows the operating system / browser `(prefers-color-scheme: dark)` preference.
 * - `"dark"`: Forces dark theme mode.
 * - `"light"`: Forces light theme mode.
 */
export type ThemeMode = "system" | "dark" | "light";

/**
 * Supported theme contrast levels:
 * - `"standard"`: Default Material You contrast level.
 * - `"medium"`: Increased contrast for improved legibility.
 * - `"high"`: Highest contrast level for maximum accessibility.
 */
export type ThemeContrast = "standard" | "medium" | "high";

/**
 * Configuration options for the {@link useTheme} hook.
 */
export type ThemeOptions = {
    /**
     * Initial theme mode. Defaults to `"system"`.
     */
    defaultThemeMode?: ThemeMode;
    /**
     * Initial contrast level. Defaults to `"standard"`.
     */
    defaultContrast?: ThemeContrast;
    /**
     * Whether monochrome mode is initially enabled. Defaults to `false`.
     */
    isMonochrome?: boolean;
    /**
     * Key used to persist theme settings in `localStorage`. Defaults to `"application-theme"`.
     */
    localStorageKey?: string;
    /**
     * Whether to initialize state with the stored `localStorage` / media query value during hydration. Defaults to `true`.
     */
    initializeWithValue?: boolean;
};

/**
 * Persisted theme state stored in `localStorage`.
 */
export type ThemeStorage = {
    /**
     * Configured theme mode (`"system"`, `"dark"`, or `"light"`).
     */
    mode: ThemeMode;
    /**
     * Configured contrast level (`"standard"`, `"medium"`, or `"high"`).
     */
    contrast: ThemeContrast;
    /**
     * Whether monochrome mode is enabled.
     */
    isMonochrome: boolean;
};

/**
 * Object returned by the {@link useTheme} hook providing theme state and updater functions.
 */
export type ThemeReturn = ThemeStorage & {
    /**
     * Resolved boolean indicating whether dark mode is currently active
     * (evaluates the OS preference when `mode === "system"`).
     */
    isDarkMode: boolean;

    /**
     * Updates the theme mode (`"system"`, `"dark"`, or `"light"`).
     */
    setMode: (mode: ThemeMode) => void;
    /**
     * Updates the contrast level (`"standard"`, `"medium"`, or `"high"`).
     */
    setContrast: (contrast: ThemeContrast) => void;
    /**
     * Toggles monochrome mode on or off.
     */
    setMonochrome: (isMonochrome: boolean) => void;
};

/**
 * Options passed to {@link buildThemeString} to generate the theme identifier.
 */
export type ThemeBuildOptions = {
    /**
     * Contrast level (`"standard"`, `"medium"`, or `"high"`).
     */
    contrast: ThemeContrast;
    /**
     * Whether dark mode is active.
     */
    isDarkMode: boolean;
    /**
     * Whether monochrome mode is active.
     */
    isMonochrome: boolean;
};
