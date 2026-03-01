import { useTernaryDarkMode, type TernaryDarkMode } from "usehooks-ts";
import type { Key } from "react-aria-components";
import { useEffect } from "react";
import type { ThemeSwitcherProps, ThemeValue } from "./types";
import {
    type ToggleButtonGroupItem,
    ToggleButtonGroup,
} from "@/components/ToggleButtonGroup";

const defaultThemeValues: ThemeValue = {
    system: "System",
    light: "Light",
    dark: "Dark",
};

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
    ui = true,
    theme = "primary",
    displayValue = defaultThemeValues,
}) => {
    const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
        useTernaryDarkMode();

    const themeItems: ToggleButtonGroupItem[] = [
        {
            id: "system",
            value: displayValue.system,
        },
        {
            id: "light",
            value: displayValue.light,
        },
        {
            id: "dark",
            value: displayValue.dark,
        },
    ];

    const updateTheme = () => {
        document.documentElement.setAttribute(
            "data-theme",
            isDarkMode ? "dark" : "light"
        );
    };

    useEffect(() => {
        updateTheme();
    }, [isDarkMode]);

    const handleThemeChange = (keys: Set<Key>) => {
        const theme = Array.from(keys)[0] as TernaryDarkMode;
        if (!theme) return;

        setTernaryDarkMode(theme);
    };

    if (!ui) {
        return <></>;
    }

    return (
        <ToggleButtonGroup
            items={themeItems}
            selectionMode="single"
            selectedKeys={[ternaryDarkMode]}
            onSelectionChange={handleThemeChange}
            theme={theme}
        />
    );
};
