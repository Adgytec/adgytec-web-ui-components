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
        <Link
            onPress={handlePress}
            className={clsx(ButtonReset, TapTarget)}
            {...props}
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
                    <div
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
                        {icon && <Icon icon={icon} size={iconSize} />}

                        {isChildFunc ? children(renderProps) : children}
                    </div>
                );
            }}
        </Link>,
        tooltip
    );
};
