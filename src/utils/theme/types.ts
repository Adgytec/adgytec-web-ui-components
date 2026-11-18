import type { Variant as MaterialScheme } from "@material/material-color-utilities";
import type { Dispatch, SetStateAction } from "react";
import type {
    TernaryDarkModeOptions,
    TernaryDarkModeReturn,
} from "usehooks-ts";

/**
 * Options used to initialize and configure the theme state via {@link useThemeGlobal}
 * or {@link ThemeProvider}.
 */
export type ThemeOptions = {
    /**
     * Configuration options passed to `usehooks-ts` `useTernaryDarkMode`
     * (e.g. custom localStorage key or default mode).
     */
    ternaryDarkMode?: TernaryDarkModeOptions;

    /**
     * Default contrast level for dynamic scheme calculation, ranging from `-1.0` (reduced)
     * to `1.0` (increased). Defaults to `0` (standard contrast).
     *
     * @default 0
     */
    defaultContrast?: number;

    /**
     * Default seed color in hexadecimal format used to generate the Material 3 color palette
     * (e.g. `COLOR_ADGYTEC_BLUE` or `COLOR_ADGYTEC_YELLOW`).
     */
    defaultSourceColor: string;

    /**
     * Default dynamic scheme variant algorithm from Material Color Utilities
     * (e.g. `VIBRANT`, `TONAL_SPOT`, `EXPRESSIVE`, etc.).
     *
     * @default MaterialScheme.VIBRANT
     */
    defaultScheme?: MaterialScheme;
};

/**
 * Container representing a reactive theme value coupled with its state setter.
 *
 * @template T - The type of the theme property value.
 */
export type ThemeReturnValue<T> = {
    /**
     * The current value of the theme property.
     */
    value: T;

    /**
     * Function to update the theme property, updating reactive state and localStorage.
     */
    setValue: Dispatch<SetStateAction<T>>;
};

/**
 * Complete theme control interface returned by {@link useThemeGlobal} or {@link useTheme}.
 */
export type ThemeReturn = {
    /**
     * Dark mode state and controls provided by `usehooks-ts` `useTernaryDarkMode`.
     */
    ternaryDarkMode: TernaryDarkModeReturn;

    /**
     * Reactive contrast level state and setter (persisted under `"material-contrast"`).
     */
    contrast: ThemeReturnValue<number>;

    /**
     * Reactive source seed color state and setter (persisted under `"material-source-color"`).
     */
    sourceColor: ThemeReturnValue<string>;

    /**
     * Reactive dynamic scheme variant state and setter (persisted under `"material-scheme"`).
     */
    scheme: ThemeReturnValue<MaterialScheme>;
};
