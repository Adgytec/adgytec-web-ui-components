import { type ReactNode, useLayoutEffect } from "react";
import { buildThemeString, useTheme } from "@/utils";

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
    const { isDarkMode, isMonochrome, contrast } = useTheme();

    useLayoutEffect(() => {
        const themeString = buildThemeString({
            isDarkMode,
            isMonochrome,
            contrast,
        });
        document.documentElement.setAttribute("data-theme", themeString);
    }, [isDarkMode, isMonochrome, contrast]);

    return children;
};
