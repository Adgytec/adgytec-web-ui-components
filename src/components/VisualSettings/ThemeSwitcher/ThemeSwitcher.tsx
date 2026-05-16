// TODO: updating visual components
// don't review this

import { useEffect } from "react";
import type { Key } from "react-aria-components";
import {
    type TernaryDarkMode,
    useLocalStorage,
    useTernaryDarkMode,
} from "usehooks-ts";
import {
    ButtonGroup,
    ConnectedButton,
    ConnectedButtonGroup,
    ToggleButton,
} from "@/components/Button";
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
    const [themeContrast, setThemeContrast] = useLocalStorage(
        "data-theme-contrast",
        "standard"
    );

    const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
        useTernaryDarkMode();

    const themeContrastTypes = [
        {
            id: "standard",
            value: "Standard",
        },
        {
            id: "medium",
            value: "Medium",
        },
        {
            id: "high",
            value: "High",
        },
    ];

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
        let theme = isDarkMode ? "dark" : "light";

        if (themeType === "monochrome") {
            theme = `monochrome-${theme}`;
        } else if (themeContrast !== "standard") {
            theme = `${theme}-${themeContrast}-contrast`;
        }

        document.documentElement.setAttribute("data-theme", theme);

        document.documentElement.setAttribute("data-theme-type", themeType);
        document.documentElement.setAttribute(
            "data-theme-contrast",
            themeContrast
        );
    }, [isDarkMode, themeType, themeContrast]);

    const handleThemeChange = (keys: Set<Key>) => {
        const theme = Array.from(keys)[0] as TernaryDarkMode;
        if (!theme) return;

        setTernaryDarkMode(theme);
    };

    const handleThemeTypeChange = (keys: Set<Key>) => {
        const selectedType = Array.from(keys)[0];
        if (typeof selectedType === "string") setThemeType(selectedType);
    };

    const handleThemeContrastChange = (keys: Set<Key>) => {
        const selectedContrast = Array.from(keys)[0];
        if (typeof selectedContrast === "string")
            setThemeContrast(selectedContrast);
    };

    if (!ui) return null;

    return (
        <>
            <ConnectedButtonGroup
                selectionMode="single"
                selectedKeys={[themeType]}
                onSelectionChange={handleThemeTypeChange}
                color="elevated"
            >
                {themeTypes.map((item) => (
                    <ConnectedButton key={item.id} id={item.id}>
                        {item.value}
                    </ConnectedButton>
                ))}
            </ConnectedButtonGroup>

            <ButtonGroup
                selectionMode="single"
                selectedKeys={[ternaryDarkMode]}
                onSelectionChange={handleThemeChange}
                color="outlined"
            >
                {themeItems.map((item) => (
                    <ToggleButton key={item.id} id={item.id}>
                        {item.value}
                    </ToggleButton>
                ))}
            </ButtonGroup>

            <ButtonGroup
                selectionMode="single"
                selectedKeys={[themeContrast]}
                onSelectionChange={handleThemeContrastChange}
                color="outlined"
            >
                {themeContrastTypes.map((item) => (
                    <ToggleButton key={item.id} id={item.id}>
                        {item.value}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
};
