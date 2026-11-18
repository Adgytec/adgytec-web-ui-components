import { Variant as MaterialScheme } from "@material/material-color-utilities";
import { useLocalStorage, useTernaryDarkMode } from "usehooks-ts";
import { COLOR_ADGYTEC_BLUE } from "./colors";
import type { ThemeOptions, ThemeReturn } from "./types";

const DEFAULT_CONTRAST = 0;
const DEFAULT_SCHEME = MaterialScheme.VIBRANT;

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
