interface ThemeBaseTranslations {
    heading: string;
    description?: string;
}

export interface ThemeModeTranslations extends ThemeBaseTranslations {
    system: string;
    light: string;
    dark: string;
}

export interface ThemeContrastTranslations extends ThemeBaseTranslations {
    standard: string;
    medium: string;
    high: string;
}

export interface ThemeMonochromeTranslations extends ThemeBaseTranslations {
    label: string;
}

export type ThemeSelectorProps = {
    modeDetails?: ThemeModeTranslations;
    contrastDetails?: ThemeContrastTranslations;
    monochromeDetails?: ThemeMonochromeTranslations;
};
