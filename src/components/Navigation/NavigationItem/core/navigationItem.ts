import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { typography } from "@/utils";
import styles from "./navigationItem.module.css";

/**
 * Common configuration properties shared across navigation items ([`NavigationLink`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationItem/NavigationLink/NavigationLink.tsx)
 * and [`NavigationButton`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationItem/NavigationButton/NavigationButton.tsx)).
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
 * Standard typography style (`titleSmall`) for navigation item label text.
 */
export const NavigationItemLabelTypography = typography.titleSmall;

/**
 * CSS class for individual navigation item styling, interactive state layers, and padding.
 */
export const NavigationItemStyles = styles["item"];
