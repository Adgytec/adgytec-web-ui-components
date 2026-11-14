import { clsx } from "clsx";
import { X } from "lucide-react";
import { Button } from "react-aria-components";
import { ButtonIconSizeMapping, withTooltip } from "@/components/Button/core";
import { Icon } from "@/components/Icon";
import { Splash, useSplash } from "@/components/Splash";
import { fabSizeConfig } from "../../core";
import { fabVariantBase, fabVariantConfig } from "../../core/fab";
import { useFABMenuVariant } from "../context";
import type { FABMenuButtonProps } from "./types";

export const FABMenuButton: React.FC<FABMenuButtonProps> = ({
    icon,
    size = "medium",
    onPress,
    className,
    tooltip,
    ...props
}) => {
    const variant = useFABMenuVariant();
    const { handlePress, splashInfo } = useSplash(onPress);

    return withTooltip(
        <Button
            onPress={handlePress}
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
            aria-label={props["aria-label"] || tooltip}
            data-icon
            data-fab-menu-button
        >
            {({ isPressed }) => (
                <>
                    {splashInfo && <Splash {...splashInfo} />}
                    {isPressed ? (
                        <Icon icon={X} size={ButtonIconSizeMapping["small"]} />
                    ) : (
                        <Icon icon={icon} size={ButtonIconSizeMapping[size]} />
                    )}
                </>
            )}
        </Button>,
        tooltip
    );
};
