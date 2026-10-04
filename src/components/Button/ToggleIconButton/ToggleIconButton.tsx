import { clsx } from "clsx";
import { ToggleButton as AriaToggleButton } from "react-aria-components";
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
    newButtonBaseDataAttrs,
    useButtonConfig,
    withTooltip,
} from "../core";
import type { ToggleIconButtonProps } from "./types";

/**
 * A compact, icon-only toggle button implementing Material Design 3 Toggle Icon Buttons.
 *
 * Allows users to toggle between two states using a single icon button (e.g. mute/unmute, bookmark/unbookmark).
 * Switches between `icon` and `selectedIcon` based on the current selection state.
 *
 * Built on top of React Aria's `ToggleButton`. Always provide an accessible `aria-label`
 * or `aria-labelledby` attribute for screen reader accessibility.
 *
 * @example
 * ```tsx
 * <ToggleIconButton
 *     icon={Volume2}
 *     selectedIcon={VolumeX}
 *     isSelected={isMuted}
 *     onChange={setIsMuted}
 *     tooltip={isMuted ? "Unmute" : "Mute"}
 *     aria-label={isMuted ? "Unmute" : "Mute"}
 * />
 * ```
 */
export const ToggleIconButton: React.FC<ToggleIconButtonProps> = ({
    size,
    shape,
    color,
    width = "default",
    tooltip,
    selectedIcon,
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

    const iconButtonDataAttrs = {
        ...baseButtonDataAttrs,
        "data-width": width,
        "data-icon-button": true,
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
            {...iconButtonDataAttrs}
            data-button
        >
            {({
                isSelected,
                isDisabled,
                isFocusVisible,
                isFocused,
                isPressed,
                isHovered,
            }) => {
                const dataAttrs = {
                    ...iconButtonDataAttrs,
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

                const iconSize = IconButtonIconSizeMapping[buttonSize];
                return (
                    <span
                        className={clsx(
                            ButtonCore,
                            buttonColorBase,
                            ButtonSizeBase
                        )}
                        {...dataAttrs}
                    >
                        {splashInfo && <Splash {...splashInfo} />}

                        {iconToRender && (
                            <Icon icon={iconToRender} size={iconSize} />
                        )}
                    </span>
                );
            }}
        </AriaToggleButton>,
        tooltip
    );
};
