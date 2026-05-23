import { clsx } from "clsx";
import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { TapTarget } from "@/utils/tapTarget";
import {
    ButtonCore,
    ButtonReset,
    ButtonSizeBase,
    buttonColorBase,
    buttonColorConfig,
    buttonSizeConfig,
    IconButtonIconSizeMapping,
    newButtonBaseDataAttrs,
    useButtonConfig,
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
    className,
    ...props
}) => {
    const { buttonColor, buttonShape, buttonSize } = useButtonConfig({
        size,
        shape,
        color,
    });

    const { splashInfo, handlePress } = useSplash(onPress);

    const baseButtonDataAttrs = newButtonBaseDataAttrs({
        shape: buttonShape,
        size: buttonSize,
        color: buttonColor,
    });

    const iconButtonDataAttrs = {
        ...baseButtonDataAttrs,
        "data-width": width,
        "data-icon-button": true,
        "data-toggle-button": true,
    };

    return withTooltip(
        <AriaToggleButton
            onPress={handlePress}
            className={(renderProps) =>
                clsx(
                    ButtonReset,
                    TapTarget,
                    buttonSizeConfig(buttonSize),
                    buttonColorConfig(buttonColor),
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            {...iconButtonDataAttrs}
            data-button
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
                    ...iconButtonDataAttrs,
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-selected": isSelected || undefined,
                    "data-visual-button": true,
                };

                let iconToRender = icon;
                if (isSelected && selectedIcon) iconToRender = selectedIcon;

                const iconSize = IconButtonIconSizeMapping[buttonSize];
                return (
                    <span
                        className={clsx(
                            ButtonCore,
                            buttonColorBase,
                            ButtonSizeBase
                        )}
                        {...dataAttrs}
                    >
                        {splashInfo && <Splash {...splashInfo} />}

                        {iconToRender && (
                            <Icon icon={iconToRender} size={iconSize} />
                        )}
                    </span>
                );
            }}
        </AriaToggleButton>,
        tooltip
    );
};
