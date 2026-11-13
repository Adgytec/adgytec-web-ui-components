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
