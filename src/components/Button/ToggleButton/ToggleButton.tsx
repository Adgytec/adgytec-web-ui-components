import { clsx } from "clsx";
import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { TapTarget } from "@/utils/tapTarget";
import {
    ButtonCore,
    ButtonIconSizeMapping,
    ButtonLabelTextMapping,
    ButtonReset,
    ButtonSizeBase,
    buttonColorBase,
    buttonColorConfig,
    buttonSizeConfig,
    newButtonBaseDataAttrs,
    useButtonConfig,
    withTooltip,
} from "../core";
import type { ToggleButtonProps } from "./types";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
    size,
    shape,
    color,
    tooltip,
    selectedIcon,
    icon,
    children,
    onPress,
    className,
    iconPlacement,
    ...props
}) => {
    const { buttonColor, buttonShape, buttonSize, buttonIconPlacement } =
        useButtonConfig({
            size,
            shape,
            color,
            iconPlacement,
        });

    const { splashInfo, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    const baseButtonDataAttrs = newButtonBaseDataAttrs({
        shape: buttonShape,
        size: buttonSize,
        color: buttonColor,
    });

    const toggleButtonDataAttrs = {
        ...baseButtonDataAttrs,
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
            {...toggleButtonDataAttrs}
        >
            {(renderProps) => {
                const {
                    isSelected,
                    isDisabled,
                    isFocusVisible,
                    isFocused,
                    isPressed,
                    isHovered,
                } = renderProps;

                const dataAttrs = {
                    ...toggleButtonDataAttrs,
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

                const iconSize = ButtonIconSizeMapping[buttonSize];

                const iconComp = iconToRender && (
                    <Icon icon={iconToRender} size={iconSize} />
                );

                return (
                    <span
                        className={clsx(
                            ButtonCore,
                            buttonColorBase,
                            ButtonSizeBase,
                            ButtonLabelTextMapping[buttonSize]
                        )}
                        {...dataAttrs}
                    >
                        {splashInfo && <Splash {...splashInfo} />}

                        {buttonIconPlacement === "start" && iconComp}

                        {isChildFunc ? children(renderProps) : children}

                        {buttonIconPlacement === "end" && iconComp}
                    </span>
                );
            }}
        </AriaToggleButton>,
        tooltip
    );
};
