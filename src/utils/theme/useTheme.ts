import { Variant as MaterialScheme } from "@material/material-color-utilities";
import { useLocalStorage, useTernaryDarkMode } from "usehooks-ts";
import { COLOR_ADGYTEC_BLUE } from "./colors";
import type { ThemeOptions, ThemeReturn } from "./types";

const DEFAULT_CONTRAST = 0;
const DEFAULT_SCHEME = MaterialScheme.VIBRANT;

/**
 * Custom React hook for inspecting and mutating the active Material Design 3 theme settings.
 *
 * Manages four key theme dimensions:
 * 1. **Dark Mode**: Managed via `useTernaryDarkMode` supporting `"system"`, `"light"`, and `"dark"` modes.
 * 2. **Contrast**: Number between `-1.0` and `1.0` (standard: `0`), persisted in `localStorage` under `"material-contrast"`.
 * 3. **Source Color**: Seed color in hexadecimal format (defaults to {@link COLOR_ADGYTEC_BLUE}), persisted in `localStorage` under `"material-source-color"`.
 * 4. **Scheme Variant**: Dynamic scheme variant algorithm (defaults to `VIBRANT`), persisted in `localStorage` under `"material-scheme"`.
 *
 * @param opts - Optional default values and configuration for theme state.
 * @returns An object conforming to {@link ThemeReturn} containing reactive values and setters for each theme property.
 *
 * @example
 * ```tsx
 * import { useTheme, COLOR_ADGYTEC_YELLOW } from "@adgytec/web-ui-components";
 * import { Variant } from "@material/material-color-utilities";
 *
 * function MyThemeController() {
 *     const {
 *         ternaryDarkMode: { ternaryDarkMode, setTernaryDarkMode },
 *         sourceColor: { value: color, setValue: setColor },
 *         contrast: { value: contrast, setValue: setContrast },
 *         scheme: { value: scheme, setValue: setScheme },
 *     } = useTheme({ defaultSourceColor: COLOR_ADGYTEC_YELLOW });
 *
 *     return (
 *         <div>
 *             <button onClick={() => setTernaryDarkMode("dark")}>Toggle Dark</button>
 *             <button onClick={() => setColor("#FF0000")}>Change to Red</button>
 *             <button onClick={() => setContrast(0.5)}>High Contrast</button>
 *             <button onClick={() => setScheme(Variant.EXPRESSIVE)}>Expressive</button>
 *         </div>
 *     );
 * }
 * ```
 */
export function useTheme(opts?: ThemeOptions): ThemeReturn {
    const ternaryDarkMode = useTernaryDarkMode(opts?.ternaryDarkMode);

    const [contrast, setContrast] = useLocalStorage<number>(
        "material-contrast",
        opts?.defaultContrast ?? DEFAULT_CONTRAST
    );

    const [sourceColor, setSourceColor] = useLocalStorage<string>(
        "material-source-color",
        opts?.defaultSourceColor ?? COLOR_ADGYTEC_BLUE
    );

    const [scheme, setScheme] = useLocalStorage<MaterialScheme>(
        "material-scheme",
        opts?.defaultScheme ?? DEFAULT_SCHEME
    );

    return {
        ternaryDarkMode,
        contrast: {
            value: contrast,
            setValue: setContrast,
        },
        sourceColor: {
            value: sourceColor,
            setValue: setSourceColor,
        },
        scheme: {
            value: scheme,
            setValue: setScheme,
        },
    };
}
