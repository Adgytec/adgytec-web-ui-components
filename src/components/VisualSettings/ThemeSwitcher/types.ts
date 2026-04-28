export type ThemeValue = {
    system: string;
    light: string;
    dark: string;
};

export interface ThemeSwitcherProps {
    ui?: boolean;
    displayValue?: ThemeValue;
}
