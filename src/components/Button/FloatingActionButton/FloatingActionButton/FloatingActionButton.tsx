import clsx from "clsx";
import { Button } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash, useSplash } from "@/components/Splash";
import { withTooltip } from "../../core";
import { FABIconSizeMapping, fabSizeConfig } from "../core";
import { fabVariantBase, fabVariantConfig } from "../core/fab";
import type { FloatingActionButtonProps } from "./types";

/**
 * A Floating Action Button (FAB) implementing [Material Design 3 Floating Action Button](https://m3.material.io/components/floating-action-button/overview).
 *
 * FABs represent the primary or most common action on a screen. They appear in front of all
 * screen content, typically as a circular or squircle container with an icon.
 *
 * Supports filled and tonal color schemes, primary/secondary/tertiary variants,
 * small/medium/large sizes, ripple splash animations, and integrated tooltips.
 *
 * Configurable CSS tokens:
 * - `--md-fab-background`: Background color of the FAB container.
 * - `--md-fab-color`: Icon color of the FAB.
 *
 * @example
 * ```tsx
 * import { FloatingActionButton } from "@adgytec/web-ui-components";
 * import { Plus } from "lucide-react";
 *
 * <FloatingActionButton
 *     icon={Plus}
 *     tooltip="Add item"
 *     aria-label="Add item"
 *     onPress={() => handleAdd()}
 * />
 * ```
 */
export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
    color = "filled",
    variant = "primary",
    size = "medium",
    onPress,
    className,
    tooltip,
    icon,
    ...props
}) => {
    const { handlePress, splashInfo } = useSplash(onPress);

    return withTooltip(
        <Button
            onPress={handlePress}
            data-color={color}
            className={(renderProps) =>
                clsx(
                    fabVariantConfig(variant),
                    fabVariantBase,
                    fabSizeConfig(size),
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {splashInfo && <Splash {...splashInfo} />}
            <Icon icon={icon} size={FABIconSizeMapping[size]} />
        </Button>,
        tooltip
    );
};
