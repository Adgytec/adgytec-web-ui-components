import type { Key } from "react-aria-components";
import type { ThemeContrast, ThemeMode } from "@/utils";
import type { ThemeContrastTranslations, ThemeModeTranslations } from "./types";

export const modeItems = (
    modeDetails: ThemeModeTranslations
): {
    id: ThemeMode;
    value: string;
}[] => {
    return [
        { id: "system", value: modeDetails.system },
        { id: "light", value: modeDetails.light },
        { id: "dark", value: modeDetails.dark },
    ];
};

export const contrastItems = (
    contrastDetails: ThemeContrastTranslations
): {
    id: ThemeContrast;
    value: string;
}[] => {
    return [
        { id: "standard", value: contrastDetails.standard },
        { id: "medium", value: contrastDetails.medium },
        { id: "high", value: contrastDetails.high },
    ];
};

export function isThemeMode(value: Key): value is ThemeMode {
    return value === "system" || value === "dark" || value === "light";
}

export function isThemeContrast(value: Key): value is ThemeContrast {
    return value === "standard" || value === "medium" || value === "high";
}
