import { useEffect } from "react";
import { GenerateTheme, useTheme } from "@/utils/theme";
import type { ThemeProviderProps } from "./types";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    themeOptions,
}) => {
    const { ternaryDarkMode, contrast, sourceColor, scheme } =
        useTheme(themeOptions);

    useEffect(() => {
        GenerateTheme({
            sourceColor: sourceColor.value,
            contrast: contrast.value,
            variant: scheme.value,
            isDark: ternaryDarkMode.isDarkMode,
        });
    }, [
        ternaryDarkMode.isDarkMode,
        contrast.value,
        sourceColor.value,
        scheme.value,
    ]);

    return children;
};
