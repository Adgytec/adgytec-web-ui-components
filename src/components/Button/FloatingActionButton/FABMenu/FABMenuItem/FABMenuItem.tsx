import { clsx } from "clsx";
import { MenuItem } from "react-aria-components";
import { Icon } from "@/components/Icon";
import {
    ExtendedFABLabelTextMapping,
    FABIconSizeMapping,
    fabSizeConfig,
} from "../../core";
import { fabVariantBase, fabVariantConfig } from "../../core/fab";
import { useFABMenuVariant } from "../context";
import type { FABMenuItemProps } from "./types";

export const FABMenuItem: React.FC<FABMenuItemProps> = ({
    icon,
    className,
    children,
    ...props
}) => {
    const variant = useFABMenuVariant();
    return (
        <MenuItem
            className={(renderProps) =>
                clsx(
                    fabVariantConfig(variant),
                    fabVariantBase,
                    fabSizeConfig("small"),
                    ExtendedFABLabelTextMapping["small"],
                    typeof className === "function"
                        ? clsx(renderProps)
                        : className
                )
            }
            {...props}
            data-fab-menu-item
        >
            {(renderProps) => (
                <>
                    <Icon icon={icon} size={FABIconSizeMapping["small"]} />

                    {typeof children === "function"
                        ? children(renderProps)
                        : children}
                </>
            )}
        </MenuItem>
    );
};
