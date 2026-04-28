import { clsx } from "clsx";
import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { Target } from "@/components/Target";
import { useButtonGroupContext } from "../ButtonGroups";
import {
    ButtonCore,
    ButtonReset,
    ButtonSizeBase,
    buttonColorBase,
    buttonColorConfig,
    buttonSizeConfig,
    IconButtonIconSizeMapping,
    withTooltip,
} from "../core";
import type { ToggleIconButtonProps } from "./types";

export const ToggleIconButton: React.FC<ToggleIconButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    width = "default",
    tooltip,
    selectedIcon,
    icon,
    onPress,
    ...props
}) => {
    const { size: buttonGroupSize, shape: buttonGroupShape } =
        useButtonGroupContext();
    const buttonSize = buttonGroupSize ?? size;
    const buttonShape = buttonGroupShape ?? shape;

    const { splashInfo, handlePress } = useSplash(onPress);

    return withTooltip(
        <AriaToggleButton
            onPress={handlePress}
            className={clsx(ButtonReset)}
            {...props}
        >
            {({
                isSelected,
                isDisabled,
                isFocusVisible,
                isFocused,
                isPressed,
                isHovered,
            }) => {
                const dataAttrs = {
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-selected": isSelected || undefined,
                    "data-toggle-button": true,
                    "data-shape": buttonShape,
                    "data-width": width,
                    "data-icon-button": true,
                    "data-visual": true,
                };

                let iconToRender = icon;
                if (isSelected && selectedIcon) iconToRender = selectedIcon;

                const iconSize = IconButtonIconSizeMapping[buttonSize];
                return (
                    <Target>
                        <div
                            className={clsx(
                                ButtonCore,
                                buttonColorBase,
                                ButtonSizeBase,
                                buttonColorConfig(color),
                                buttonSizeConfig(buttonSize)
                            )}
                            {...dataAttrs}
                        >
                            {splashInfo && <Splash {...splashInfo} />}

                            {iconToRender && (
                                <Icon icon={iconToRender} size={iconSize} />
                            )}
                        </div>
                    </Target>
                );
            }}
        </AriaToggleButton>,
        tooltip
    );
};
