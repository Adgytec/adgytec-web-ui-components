import type { ColorTheme } from "@/utils/types";

export type ThemeValue = {
    system: string;
    light: string;
    dark: string;
};

export interface ThemeSwitcherProps {
    ui?: boolean;
    theme?: ColorTheme;
    displayValue?: ThemeValue;
}
