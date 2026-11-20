import { clsx } from "clsx";
import {
    Button as AriaButton,
    composeRenderProps,
} from "react-aria-components";
import { BadgeAnchor } from "@/components/Badge";
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
    IconButtonSplash,
    newButtonBaseDataAttrs,
    useButtonConfig,
    withTooltip,
} from "../core";
import type { IconButtonProps } from "./types";

/**
 * A compact, icon-only button implementing Material Design 3 Icon Buttons.
 *
 * Designed for space-constrained UI elements, actions, toolbars, and controls that can
 * be clearly represented by an icon alone. Automatically swaps the icon with a `Loader`
 * spinner when `isPending` is active (during which any `badge` is hidden).
 *
 * Extends React Aria's `Button`. Always provide an accessible `aria-label` or `aria-labelledby`
 * attribute for screen reader accessibility.
 *
 * @example
 * ```tsx
 * import { Badge, IconButton } from "@adgytec/web-ui-components";
 * import { Bell, Settings } from "lucide-react";
 *
 * <IconButton
 *     icon={Settings}
 *     color="tonal"
 *     tooltip="Settings"
 *     aria-label="Settings"
 *     onPress={() => openSettings()}
 * />
 *
 * // With notification badge
 * <IconButton
 *     icon={Bell}
 *     badge={<Badge count={4} />}
 *     aria-label="Notifications"
 * />
 * ```
 */
export const IconButton: React.FC<IconButtonProps> = ({
    size,
    shape,
    color,
    width = "default",
    tooltip,
    icon,
    onPress,
    badge,
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
    };

    return withTooltip(
        <AriaButton
            onPress={handlePress}
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(
                    ButtonReset,
                    TapTarget,
                    buttonSizeConfig(buttonSize),
                    buttonColorConfig(buttonColor),
                    className
                )
            )}
            {...iconButtonDataAttrs}
            data-button
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
                    ...iconButtonDataAttrs,
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-visual-button": true,
                };

                const iconSize = IconButtonIconSizeMapping[buttonSize];
                const renderedIcon = isPending ? (
                    <Loader size={iconSize} />
                ) : (
                    icon && <Icon icon={icon} size={iconSize} />
                );

                return (
                    <span
                        className={clsx(
                            ButtonCore,
                            buttonColorBase,
                            ButtonSizeBase
                        )}
                        {...dataAttrs}
                    >
                        {splashInfo && (
                            <span className={clsx(IconButtonSplash)}>
                                <Splash {...splashInfo} />
                            </span>
                        )}

                        {badge && !isPending ? (
                            <BadgeAnchor badge={badge}>
                                {renderedIcon}
                            </BadgeAnchor>
                        ) : (
                            renderedIcon
                        )}
                    </span>
                );
            }}
        </AriaButton>,
        tooltip
    );
};
