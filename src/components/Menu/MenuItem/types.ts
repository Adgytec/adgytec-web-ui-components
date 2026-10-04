import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { MenuItem } from "react-aria-components";

/**
 * Props for the [`MenuItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuItem/MenuItem.tsx) component.
 *
 * Provides dedicated props for icons, labels, descriptions, and trailing metadata.
 */
export interface MenuItemProps
    extends Omit<React.ComponentPropsWithRef<typeof MenuItem>, "children"> {
    /**
     * Optional icon displayed at the start of the item.
     * When the item is in a selected state, a checkmark icon automatically replaces this.
     */
    leadingIcon?: LucideIcon;

    /**
     * The primary text content for the menu item.
     */
    label: string;

    /**
     * Optional secondary descriptive text displayed beneath the primary label.
     */
    supportingText?: string;

    /**
     * Optional metadata or shortcut text displayed at the trailing edge of the item,
     * such as [`MenuShortcut`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuShortcut/MenuShortcut.tsx)
     * or [`MenuTrailingText`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuTrailingText/MenuTrailingText.tsx).
     */
    trailingText?: ReactNode;

    /**
     * Optional icon displayed at the trailing end of the item.
     * When the item triggers a nested submenu, a chevron icon automatically takes precedence.
     */
    trailingIcon?: LucideIcon;
}
