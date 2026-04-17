import { clsx } from "clsx";
import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Loader } from "@/components/Loader";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { Target } from "@/components/Target";
import {
    ButtonCore,
    ButtonIconSizeMapping,
    ButtonLabelTextMapping,
    ButtonReset,
    ButtonSizeBase,
    buttonColorBase,
    buttonColorConfig,
    buttonSizeConfig,
    withTooltip,
} from "../core";
import type { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    tooltip,
    icon,
    children,
    onPress,
    ...props
}) => {
    const { splashInfo, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    return withTooltip(
        <AriaButton
            onPress={handlePress}
            className={clsx(ButtonReset)}
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
                };

                const iconSize = ButtonIconSizeMapping[size];
                return (
                    <Target {...dataAttrs}>
                        <div
                            className={clsx(
                                ButtonCore,
                                buttonColorBase,
                                ButtonSizeBase,
                                buttonColorConfig(color),
                                buttonSizeConfig(size),
                                ButtonLabelTextMapping[size]
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
                        </div>
                    </Target>
                );
            }}
        </AriaButton>,
        tooltip
    );
};
