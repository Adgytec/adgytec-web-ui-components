import { clsx } from "clsx";
import { composeRenderProps, Link } from "react-aria-components";
import { BadgeAnchor } from "@/components/Badge";
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
    IconButtonSplash,
    newButtonBaseDataAttrs,
    useButtonConfig,
    withTooltip,
} from "../core";
import type { LinkIconButtonProps } from "./types";

/**
 * A link component styled as a compact Material Design 3 icon button.
 *
 * Used for icon-only navigation actions (such as external social links, repository links,
 * or compact icon navigation). Built on top of React Aria's `Link`.
 *
 * Always provide an accessible `aria-label` or `aria-labelledby` attribute for screen reader accessibility.
 *
 * @example
 * ```tsx
 * import { Badge, LinkIconButton } from "@adgytec/web-ui-components";
 * import { Github, MessageSquare } from "lucide-react";
 *
 * <LinkIconButton
 *     href="https://github.com"
 *     target="_blank"
 *     icon={Github}
 *     tooltip="GitHub Profile"
 *     aria-label="GitHub Profile"
 * />
 *
 * // With notification badge
 * <LinkIconButton
 *     href="/messages"
 *     icon={MessageSquare}
 *     badge={<Badge count={3} />}
 *     aria-label="Messages"
 * />
 * ```
 */
export const LinkIconButton: React.FC<LinkIconButtonProps> = ({
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
        <Link
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
            data-link-button
        >
            {({
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
                const renderedIcon = icon && (
                    <Icon icon={icon} size={iconSize} />
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
                        {badge ? (
                            <BadgeAnchor badge={badge}>
                                {renderedIcon}
                            </BadgeAnchor>
                        ) : (
                            renderedIcon
                        )}
                    </span>
                );
            }}
        </Link>,
        tooltip
    );
};
