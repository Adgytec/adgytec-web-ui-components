import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { typography } from "@/utils";
import type { Variant } from "../../core";
import styles from "./navigationItem.module.css";

/**
 * Common configuration properties shared across navigation items ([`NavigationLink`](src/components/Navigation/NavigationItem/NavigationLink/NavigationLink.tsx)
 * and [`NavigationButton`](src/components/Navigation/NavigationItem/NavigationButton/NavigationButton.tsx)).
 */
export interface NavigationItemProps {
    /**
     * Primary label content for the navigation item.
     */
    label: ReactNode;

    /**
     * Optional icon displayed when the navigation item is in its inactive state.
     */
    icon?: LucideIcon;

    /**
     * Optional alternate icon displayed when the navigation item is in its active state.
     */
    activeIcon?: LucideIcon;

    /**
     * Override flag or predicate function evaluating whether the item is currently active.
     */
    isActive?: boolean | ((value?: string) => boolean);
}

/**
 * CSS class for individual navigation item styling, interactive state layers, and padding.
 */
export const NavigationItemStyles = styles["item"];

export const NavigationItemCollapsedStyles = styles["collapsed"];

export function navigationItemLabelTypography(variant: Variant) {
    if (variant === "expanded") return typography.labelLarge;
    return typography.labelMedium;
}
