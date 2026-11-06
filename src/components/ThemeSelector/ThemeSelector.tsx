import clsx from "clsx";
import { Palette } from "lucide-react";
import { useMemo } from "react";
import { useTheme } from "@/utils";
import { ConnectedButton, ConnectedButtonGroup } from "../Button";
import { Divider } from "../Divider";
import { Switch } from "../Input";
import {
    ListBox,
    ListIcon,
    ListItem,
    ListLabelText,
    ListSupportingText,
} from "../List";
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

/**
 * Settings UI component for managing application theme appearance.
 *
 * Provides user controls for:
 * - **Theme Mode**: Connected button group with `"System"`, `"Light"`, and `"Dark"` options, featuring dedicated icons.
 * - **Theme Contrast**: Connected button group with `"Standard"`, `"Medium"`, and `"High"` options (disabled when monochrome is active).
 * - **Monochrome Mode**: An interactive {@link ListItem} with {@link Switch} and {@link ListIcon} to toggle neutral grayscale styling.
 *
 * Directly connects to {@link useTheme} to read and update theme settings, which are
 * persisted to local storage and applied to `document.documentElement` by {@link ThemeProvider}.
 *
 * @example
 * ```tsx
 * import { ThemeProvider, ThemeSelector } from "@adgytec/web-ui-components";
 *
 * export function SettingsMenu() {
 *     return (
 *         <ThemeProvider>
 *             <ThemeSelector />
 *         </ThemeProvider>
 *     );
 * }
 * ```
 */
export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
    modeDetails = defaultMode,
    contrastDetails = defaultContrast,
    monochromeDetails = defaultMonochrome,
    className,
    buttonColor = "tonal",
    buttonSize = "small",
    showMode = true,
    showContrast = true,
    showMonochrome = true,
    showDividers = false,
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
        <div className={clsx(styles["selector"], className)}>
            {showMode && (
                <ThemeItem
                    heading={modeDetails.heading}
                    description={modeDetails.description}
                >
                    <ConnectedButtonGroup
                        color={buttonColor}
                        size={buttonSize}
                        selectionMode="single"
                        selectedKeys={[mode]}
                        onSelectionChange={(keys) => {
                            const themeMode = Array.from(keys)[0];
                            if (!isThemeMode(themeMode)) return;

                            setMode(themeMode);
                        }}
                    >
                        {themeModeItems.map((item) => (
                            <ConnectedButton
                                key={item.id}
                                id={item.id}
                                icon={item.icon}
                            >
                                {item.value}
                            </ConnectedButton>
                        ))}
                    </ConnectedButtonGroup>
                </ThemeItem>
            )}

            {showDividers && showMode && (showContrast || showMonochrome) && (
                <Divider />
            )}

            {showContrast && (
                <ThemeItem
                    heading={contrastDetails.heading}
                    description={contrastDetails.description}
                    isDisabled={isMonochrome}
                >
                    <ConnectedButtonGroup
                        color={buttonColor}
                        size={buttonSize}
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
            )}

            {showDividers && showContrast && showMonochrome && <Divider />}

            {showMonochrome && (
                <ListBox aria-label={monochromeDetails.heading}>
                    <ListItem
                        onAction={() => setMonochrome(!isMonochrome)}
                        leading={<ListIcon icon={Palette} />}
                        label={
                            <ListLabelText>
                                {monochromeDetails.heading}
                            </ListLabelText>
                        }
                        supporting={
                            <ListSupportingText>
                                {monochromeDetails.description}
                            </ListSupportingText>
                        }
                        trailing={[
                            <Switch
                                key="selection"
                                isSelected={isMonochrome}
                                onChange={setMonochrome}
                                aria-label={monochromeDetails.heading}
                            />,
                        ]}
                    />
                </ListBox>
            )}
        </div>
    );
};
