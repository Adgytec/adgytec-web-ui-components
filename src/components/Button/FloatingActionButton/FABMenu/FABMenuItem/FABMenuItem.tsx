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

/**
 * Action item component rendered inside a {@link FABMenu}.
 *
 * Implements Material 3 Speed Dial menu item design:
 * - Rendered as a small, pill-shaped Extended FAB with an icon and label text.
 * - Inherits the active semantic `variant` color scheme from {@link FABMenuTrigger}.
 * - Integrates React Aria Components `MenuItem` for full keyboard navigation and selection handling.
 *
 * @example
 * ```tsx
 * import { FABMenuItem } from "@adgytec/web-ui-components";
 * import { FileText } from "lucide-react";
 *
 * <FABMenuItem id="document" icon={FileText}>
 *     Document
 * </FABMenuItem>
 * ```
 */
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
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-fab-menu-item
            data-extended
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
