import { clsx } from "clsx";
import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Loader } from "@/components/Loader";
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
import type { IconButtonProps } from "./types";

export const IconButton: React.FC<IconButtonProps> = ({
    size,
    shape,
    color,
    width = "default",
    tooltip,
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

    return withTooltip(
        <AriaButton
            onPress={handlePress}
            className={(renderProps) =>
                clsx(
                    ButtonReset,
                    TapTarget,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            {...baseButtonDataAttrs}
            data-width={width}
            data-icon-button={true}
        >
            {({
                isPending,
                isDisabled,
                isFocusVisible,
                isFocused,
                isPressed,
                isHovered,
            }) => {
                const dataAttrs = {
                    ...baseButtonDataAttrs,
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-visual": true,
                };

                const iconSize = IconButtonIconSizeMapping[buttonSize];
                return (
                    <span
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
                        {isPending ? (
                            <Loader size={iconSize} />
                        ) : (
                            icon && <Icon icon={icon} size={iconSize} />
                        )}
                    </span>
                );
            }}
        </AriaButton>,
        tooltip
    );
};
