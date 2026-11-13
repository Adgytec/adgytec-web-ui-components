import clsx from "clsx";
import { Button } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash, useSplash } from "@/components/Splash";
import { withTooltip } from "../../core";
import {
    ExtendedFABLabelTextMapping,
    FABIconSizeMapping,
    fabSizeConfig,
} from "../core";
import { fabVariantBase, fabVariantConfig } from "../core/fab";
import type { ExtendedFloatingActionButtonProps } from "./types";

/**
 * An Extended Floating Action Button (Extended FAB) implementing [Material Design 3 Extended FAB](https://m3.material.io/components/floating-action-button/overview).
 *
 * Extended FABs display an icon alongside a text label (or text only), providing clearer context
 * than a standard icon-only FAB. They appear above primary screen content for key actions.
 *
 * Supports filled and tonal color schemes, primary/secondary/tertiary variants,
 * small/medium/large sizes, start/end icon placement, ripple splash animations, and optional tooltips.
 *
 * Configurable CSS tokens:
 * - `--md-fab-background`: Background color of the Extended FAB container.
 * - `--md-fab-color`: Text and icon color of the Extended FAB.
 *
 * @example
 * ```tsx
 * import { ExtendedFloatingActionButton } from "@adgytec/web-ui-components";
 * import { Pencil } from "lucide-react";
 *
 * <ExtendedFloatingActionButton
 *     icon={Pencil}
 *     onPress={() => handleCompose()}
 * >
 *     Compose
 * </ExtendedFloatingActionButton>
 * ```
 */
export const ExtendedFloatingActionButton: React.FC<
    ExtendedFloatingActionButtonProps
> = ({
    color = "filled",
    variant = "primary",
    size = "medium",
    children,
    className,
    tooltip,
    icon,
    iconPlacement = "start",
    onPress,
    ...props
}) => {
    const { handlePress, splashInfo } = useSplash(onPress);

    return withTooltip(
        <Button
            onPress={handlePress}
            className={(renderProps) =>
                clsx(
                    fabVariantConfig(variant),
                    fabVariantBase,
                    fabSizeConfig(size),
                    ExtendedFABLabelTextMapping[size],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            data-color={color}
            data-extended
            {...props}
        >
            {(renderProps) => (
                <>
                    {splashInfo && <Splash {...splashInfo} />}

                    {iconPlacement === "start" && icon && (
                        <Icon icon={icon} size={FABIconSizeMapping[size]} />
                    )}

                    {typeof children === "function"
                        ? children(renderProps)
                        : children}

                    {iconPlacement === "end" && icon && (
                        <Icon icon={icon} size={FABIconSizeMapping[size]} />
                    )}
                </>
            )}
        </Button>,
        tooltip
    );
};
