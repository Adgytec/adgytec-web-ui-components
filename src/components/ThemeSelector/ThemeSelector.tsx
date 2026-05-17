import clsx from "clsx";
import { useMemo } from "react";
import { useTheme } from "@/utils";
import { ConnectedButton, ConnectedButtonGroup } from "../Button";
import { Switch } from "../Input";
import { contrastItems, isThemeContrast, isThemeMode, modeItems } from "./core";
import { ThemeItem } from "./ThemeItem";
import styles from "./themeSelector.module.css";
import type {
    ThemeContrastTranslations,
    ThemeModeTranslations,
    ThemeMonochromeTranslations,
    ThemeSelectorProps,
} from "./types";

const defaultMode: ThemeModeTranslations = {
    heading: "Theme Mode",
    description:
        "Choose how the interface appearance is displayed across the app. You can follow your system settings or manually use light or dark mode.",

    system: "System",
    dark: "Dark",
    light: "Light",
};

const defaultContrast: ThemeContrastTranslations = {
    heading: "Theme Contrast",
    description:
        "Adjust the interface contrast level to improve visibility and readability based on your visual preference and viewing environment.",

    standard: "Standard",
    medium: "Medium",
    high: "High",
};

const defaultMonochrome: ThemeMonochromeTranslations = {
    heading: "Monochrome",
    description:
        "Use a monochrome appearance with neutral tones instead of the default colorful theme. This can provide a cleaner and more focused visual experience.",
};

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
    modeDetails = defaultMode,
    contrastDetails = defaultContrast,
    monochromeDetails = defaultMonochrome,
}) => {
    const {
        mode,
        isMonochrome,
        contrast,
        setContrast,
        setMode,
        setMonochrome,
    } = useTheme();

    const themeModeItems = useMemo(() => modeItems(modeDetails), [modeDetails]);
    const themeContrastItems = useMemo(
        () => contrastItems(contrastDetails),
        [contrastDetails]
    );

    return (
        <div className={clsx(styles["selector"])}>
            <ThemeItem
                heading={modeDetails.heading}
                description={modeDetails.description}
            >
                <ConnectedButtonGroup
                    selectionMode="single"
                    selectedKeys={[mode]}
                    onSelectionChange={(keys) => {
                        const themeMode = Array.from(keys)[0];
                        if (!isThemeMode(themeMode)) return;

                        setMode(themeMode);
                    }}
                >
                    {themeModeItems.map((item) => (
                        <ConnectedButton key={item.id} id={item.id}>
                            {item.value}
                        </ConnectedButton>
                    ))}
                </ConnectedButtonGroup>
            </ThemeItem>

            <ThemeItem
                heading={contrastDetails.heading}
                description={contrastDetails.description}
            >
                <ConnectedButtonGroup
                    color="tonal"
                    selectionMode="single"
                    selectedKeys={[contrast]}
                    onSelectionChange={(keys) => {
                        const themeContrast = Array.from(keys)[0];
                        if (!isThemeContrast(themeContrast)) return;

                        setContrast(themeContrast);
                    }}
                    isDisabled={isMonochrome}
                >
                    {themeContrastItems.map((item) => (
                        <ConnectedButton key={item.id} id={item.id}>
                            {item.value}
                        </ConnectedButton>
                    ))}
                </ConnectedButtonGroup>
            </ThemeItem>

            <Switch
                isSelected={isMonochrome}
                onChange={setMonochrome}
                containerStateLayer
            >
                <ThemeItem
                    heading={monochromeDetails.heading}
                    description={monochromeDetails.description}
                    useInline
                ></ThemeItem>
            </Switch>
        </div>
    );
};
