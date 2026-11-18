import { Variant as MaterialScheme } from "@material/material-color-utilities";
import { useLocalStorage, useTernaryDarkMode } from "usehooks-ts";
import type { ThemeOptions, ThemeReturn } from "./types";

const DEFAULT_CONTRAST = 0;
const DEFAULT_SCHEME = MaterialScheme.VIBRANT;

/**
 * Low-level/standalone React hook for managing global Material Design 3 theme state.
 *
 * Directly connects to `localStorage` and system media queries to manage:
 * 1. **Dark Mode**: Managed via `useTernaryDarkMode` supporting `"system"`, `"light"`, and `"dark"` modes.
 * 2. **Contrast**: Number between `-1.0` and `1.0` (standard: `0`), persisted in `localStorage` under `"material-contrast"`.
 * 3. **Source Color**: Seed color in hexadecimal format, persisted in `localStorage` under `"material-source-color"`.
 * 4. **Scheme Variant**: Dynamic scheme variant algorithm (defaults to `VIBRANT`), persisted in `localStorage` under `"material-scheme"`.
 *
 * > [!NOTE]
 * > For standard application components, prefer using the context-based `useTheme` hook from
 * > `@/components/Theme` (or `@adgytec/web-ui-components`) within a `<ThemeProvider>`.
 *
 * @param opts - Configuration options including the required default source seed color.
 * @returns An object conforming to {@link ThemeReturn} containing reactive values and setters for each theme property.
 *
 * @example
 * ```tsx
 * import { useThemeGlobal, COLOR_ADGYTEC_YELLOW } from "@adgytec/web-ui-components/utils";
 * import { Variant } from "@material/material-color-utilities";
 *
 * function StandaloneThemeController() {
 *     const {
 *         ternaryDarkMode: { ternaryDarkMode, setTernaryDarkMode },
 *         sourceColor: { value: color, setValue: setColor },
 *         contrast: { value: contrast, setValue: setContrast },
 *         scheme: { value: scheme, setValue: setScheme },
 *     } = useThemeGlobal({ defaultSourceColor: COLOR_ADGYTEC_YELLOW });
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
export function useThemeGlobal(opts: ThemeOptions): ThemeReturn {
    const ternaryDarkMode = useTernaryDarkMode(opts.ternaryDarkMode);

    const [contrast, setContrast] = useLocalStorage<number>(
        "material-contrast",
        opts.defaultContrast ?? DEFAULT_CONTRAST
    );

    const [sourceColor, setSourceColor] = useLocalStorage<string>(
        "material-source-color",
        opts.defaultSourceColor
    );

    const [scheme, setScheme] = useLocalStorage<MaterialScheme>(
        "material-scheme",
        opts.defaultScheme ?? DEFAULT_SCHEME
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
