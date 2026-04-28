import { clsx } from "clsx";
import { Link } from "react-aria-components";
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
    const { size: buttonGroupSize } = useButtonGroupContext();
    const buttonSize = buttonGroupSize ?? size;

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
                    "data-icon-button": true,
                };

                const iconSize = IconButtonIconSizeMapping[buttonSize];
                return (
                    <Target {...dataAttrs}>
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
                            {icon && <Icon icon={icon} size={iconSize} />}
                        </div>
                    </Target>
                );
            }}
        </Link>,
        tooltip
    );
};
