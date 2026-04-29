import { clsx } from "clsx";
import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Loader } from "@/components/Loader";
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
    useButtonConfig,
    withTooltip,
} from "../core";
import type { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
    size,
    shape,
    color,
    tooltip,
    icon,
    children,
    onPress,
    ...props
}) => {
    const { buttonColor, buttonShape, buttonSize } = useButtonConfig({
        size,
        shape,
        color,
    });

    const { splashInfo, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    return withTooltip(
        <AriaButton
            onPress={handlePress}
            className={clsx(ButtonReset, TapTarget)}
            {...props}
        >
            {(renderProps) => {
                const {
                    isPending,
                    isDisabled,
                    isFocusVisible,
                    isFocused,
                    isPressed,
                    isHovered,
                } = renderProps;

                const dataAttrs = {
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-shape": buttonShape,
                    "data-visual": true,
                };

                const iconSize = ButtonIconSizeMapping[buttonSize];
                return (
                    <span
                        className={clsx(
                            ButtonCore,
                            buttonColorBase,
                            ButtonSizeBase,
                            buttonColorConfig(buttonColor),
                            buttonSizeConfig(buttonSize),
                            ButtonLabelTextMapping[buttonSize]
                        )}
                        {...dataAttrs}
                    >
                        {splashInfo && <Splash {...splashInfo} />}
                        {isPending ? (
                            <Loader size={iconSize} />
                        ) : (
                            icon && <Icon icon={icon} size={iconSize} />
                        )}

                        {isChildFunc ? children(renderProps) : children}
                    </span>
                );
            }}
        </AriaButton>,
        tooltip
    );
};
