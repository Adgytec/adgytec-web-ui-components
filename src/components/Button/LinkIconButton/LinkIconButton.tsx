import { clsx } from "clsx";
import { Link } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { Target } from "@/components/Target";
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
import type { LinkIconButtonProps } from "./types";

export const LinkIconButton: React.FC<LinkIconButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    width = "default",
    tooltip,
    icon,
    onPress,
    ...props
}) => {
    const { splashInfo, handlePress } = useSplash(onPress);

    return withTooltip(
        <Link onPress={handlePress} className={clsx(ButtonReset)} {...props}>
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
                    "data-shape": shape,
                    "data-width": width,
                    "data-icon": true,
                };

                const iconSize = IconButtonIconSizeMapping[size];
                return (
                    <Target {...dataAttrs}>
                        <div
                            className={clsx(
                                ButtonCore,
                                buttonColorBase,
                                ButtonSizeBase,
                                buttonColorConfig(color),
                                buttonSizeConfig(size)
                            )}
                            {...dataAttrs}
                        >
                            {splashInfo && <Splash {...splashInfo} />}
                            {icon && <Icon icon={icon} size={iconSize} />}
                        </div>
                    </Target>
                );
            }}
        </Link>,
        tooltip
    );
};
