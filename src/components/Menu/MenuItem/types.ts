import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { MenuItemProps as AriaMenuItemProps } from "react-aria-components";

export interface MenuItemProps extends Omit<AriaMenuItemProps, "children"> {
    leadingIcon?: LucideIcon;
    children: string;
    supportingText?: string;
    trailingText?: ReactNode;
}
