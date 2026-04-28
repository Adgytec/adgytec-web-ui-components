// TODO: this component if for trial purposes only
// its impl will be completly changed in next pr
// don't review this

import { useEffect } from "react";
import type { Key } from "react-aria-components";
import {
    type TernaryDarkMode,
    useLocalStorage,
    useTernaryDarkMode,
} from "usehooks-ts";
import { ToggleButton } from "@/components/Button";
import { ToggleButtonGroup } from "@/components/ToggleButtonGroup";
import type { ThemeSwitcherProps, ThemeValue } from "./types";

const defaultThemeValues: ThemeValue = {
    system: "System",
    light: "Light",
    dark: "Dark",
};

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
    ui = true,
    displayValue = defaultThemeValues,
}) => {
    const [themeType, setThemeType] = useLocalStorage(
        "data-theme-type",
        "normal"
    );

    const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
        useTernaryDarkMode();

    const themeTypes = [
        {
            id: "monochrome",
            value: "Monochrome",
        },
        {
            id: "normal",
            value: "Normal",
        },
    ];

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
        const themePrefix = themeType !== "normal" ? "monochrome-" : "";
        document.documentElement.setAttribute(
            "data-theme",
            `${themePrefix}${isDarkMode ? "dark" : "light"}`
        );

        document.documentElement.setAttribute("data-theme-type", themeType);
    }, [isDarkMode, themeType]);

    const handleThemeChange = (keys: Set<Key>) => {
        const theme = Array.from(keys)[0] as TernaryDarkMode;
        if (!theme) return;

        setTernaryDarkMode(theme);
    };

    const handleThemeTypeChange = (keys: Set<Key>) => {
        const selectedType = Array.from(keys)[0];
        if (typeof selectedType === "string") setThemeType(selectedType);
    };

    if (!ui) return null;

    return (
        <>
            <ToggleButtonGroup
                selectionMode="single"
                selectedKeys={[themeType]}
                onSelectionChange={handleThemeTypeChange}
            >
                {themeTypes.map((item) => (
                    <ToggleButton key={item.id} id={item.id} color="elevated">
                        {item.value}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>

            <ToggleButtonGroup
                selectionMode="single"
                selectedKeys={[ternaryDarkMode]}
                onSelectionChange={handleThemeChange}
            >
                {themeItems.map((item) => (
                    <ToggleButton key={item.id} id={item.id} color="tonal">
                        {item.value}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </>
    );
};
