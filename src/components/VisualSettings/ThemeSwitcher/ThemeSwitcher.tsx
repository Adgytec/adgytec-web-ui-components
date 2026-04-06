import { useEffect } from "react";
import type { Key } from "react-aria-components";
import { type TernaryDarkMode, useTernaryDarkMode } from "usehooks-ts";
import { ToggleButton } from "@/components/ToggleButton";
import { ToggleButtonGroup } from "@/components/ToggleButtonGroup";
import type { ThemeSwitcherProps, ThemeValue } from "./types";

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

    const themeItems = [
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

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            isDarkMode ? "dark" : "light"
        );
    }, [isDarkMode]);

    const handleThemeChange = (keys: Set<Key>) => {
        const theme = Array.from(keys)[0] as TernaryDarkMode;
        if (!theme) return;

        setTernaryDarkMode(theme);
    };

    if (!ui) return null;

    return (
        <ToggleButtonGroup
            selectionMode="single"
            selectedKeys={[ternaryDarkMode]}
            onSelectionChange={handleThemeChange}
        >
            {themeItems.map((item) => (
                <ToggleButton key={item.id} id={item.id} theme={theme}>
                    {item.value}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};
