import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { typography } from "@/utils";
import styles from "./navigationItem.module.css";

export interface NavigationItemProps {
    label: ReactNode;
    icon?: LucideIcon;
    activeIcon?: LucideIcon;
    isActive?: boolean;
}

export const NavigationItemLabelTypography = typography.titleSmall;
export const NavigationItemStyles = styles["item"];
