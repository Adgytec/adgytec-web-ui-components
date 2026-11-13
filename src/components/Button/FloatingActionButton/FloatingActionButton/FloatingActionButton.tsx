import clsx from "clsx";
import { Button } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash, useSplash } from "@/components/Splash";
import { withTooltip } from "../../core";
import { FABIconSizeMapping, fabSizeConfig } from "../core";
import { fabVariantBase, fabVariantConfig } from "../core/fab";
import type { FloatingActionButtonProps } from "./types";

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
