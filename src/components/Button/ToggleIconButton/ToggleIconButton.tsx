import { clsx } from "clsx";
import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { TapTarget } from "@/utils/tapTarget";
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
    size,
    shape,
    color,
    width = "default",
    tooltip,
    selectedIcon,
    icon,
    onPress,
    ...props
}) => {
    const {
        size: buttonGroupSize,
        shape: buttonGroupShape,
        color: buttonGroupColor,
    } = useButtonGroupContext();
    const buttonSize = size ?? buttonGroupSize ?? "small";
    const buttonShape = shape ?? buttonGroupShape ?? "round";
    const buttonColor = color ?? buttonGroupColor ?? "filled";

    const { splashInfo, handlePress } = useSplash(onPress);

    return withTooltip(
        <AriaToggleButton
            onPress={handlePress}
            className={clsx(ButtonReset, TapTarget)}
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
                    <div
                        className={clsx(
                            ButtonCore,
                            buttonColorBase,
                            ButtonSizeBase,
                            buttonColorConfig(buttonColor),
                            buttonSizeConfig(buttonSize)
                        )}
                        {...dataAttrs}
                    >
                        {splashInfo && <Splash {...splashInfo} />}

                        {iconToRender && (
                            <Icon icon={iconToRender} size={iconSize} />
                        )}
                    </div>
                );
            }}
        </AriaToggleButton>,
        tooltip
    );
};
