import { clsx } from "clsx";
import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
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
import type { ToggleButtonProps } from "./types";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    tooltip,
    selectedIcon,
    icon,
    children,
    onPress,
    ...props
}) => {
    const { splashInfo, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    return withTooltip(
        <AriaToggleButton
            onPress={handlePress}
            className={clsx(ButtonReset)}
            {...props}
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
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-selected": isSelected || undefined,
                    "data-toggle-button": true,
                };

                let iconToRender = icon;
                if (isSelected && selectedIcon) iconToRender = selectedIcon;

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

                            {iconToRender && (
                                <Icon icon={iconToRender} size={iconSize} />
                            )}

                            {isChildFunc ? children(renderProps) : children}
                        </div>
                    </Target>
                );
            }}
        </AriaToggleButton>,
        tooltip
    );
};
