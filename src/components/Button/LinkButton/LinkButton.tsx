import { clsx } from "clsx";
import { Link } from "react-aria-components";
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
import type { LinkButtonProps } from "./types";

export const LinkButton: React.FC<LinkButtonProps> = ({
    size,
    shape,
    color,
    tooltip,
    icon,
    children,
    onPress,
    className,
    iconPlacement = "start",
    ...props
}) => {
    const { buttonColor, buttonShape, buttonSize } = useButtonConfig({
        size,
        shape,
        color,
    });

    const { splashInfo, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    const baseButtonDataAttrs = newButtonBaseDataAttrs({
        shape: buttonShape,
        size: buttonSize,
        color: buttonColor,
    });

    return withTooltip(
        <Link
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
        >
            {(renderProps) => {
                const {
                    isDisabled,
                    isFocusVisible,
                    isFocused,
                    isPressed,
                    isHovered,
                } = renderProps;

                const dataAttrs = {
                    ...baseButtonDataAttrs,
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-visual-button": true,
                };

                const iconSize = ButtonIconSizeMapping[buttonSize];
                const iconComp = icon && <Icon icon={icon} size={iconSize} />;

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

                        {iconPlacement === "start" && iconComp}

                        {isChildFunc ? children(renderProps) : children}

                        {iconPlacement === "end" && iconComp}
                    </span>
                );
            }}
        </Link>,
        tooltip
    );
};
