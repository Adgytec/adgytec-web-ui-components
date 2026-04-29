import { clsx } from "clsx";
import { Link } from "react-aria-components";
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
    useButtonConfig,
    withTooltip,
} from "../core";
import type { LinkIconButtonProps } from "./types";

export const LinkIconButton: React.FC<LinkIconButtonProps> = ({
    size,
    shape,
    color,
    width = "default",
    tooltip,
    icon,
    onPress,
    ...props
}) => {
    const { buttonColor, buttonShape, buttonSize } = useButtonConfig({
        size,
        shape,
        color,
    });

    const { splashInfo, handlePress } = useSplash(onPress);

    return withTooltip(
        <Link
            onPress={handlePress}
            className={clsx(ButtonReset, TapTarget)}
            {...props}
        >
            {({
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
                    "data-shape": buttonShape,
                    "data-width": width,
                    "data-icon-button": true,
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
                        {icon && <Icon icon={icon} size={iconSize} />}
                    </span>
                );
            }}
        </Link>,
        tooltip
    );
};
