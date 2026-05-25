import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { MenuItem } from "react-aria-components";

export interface MenuItemProps
    extends Omit<React.ComponentPropsWithRef<typeof MenuItem>, "children"> {
    leadingIcon?: LucideIcon;
    label: string;
    supportingText?: string;
    trailingText?: ReactNode;
    trailingIcon?: LucideIcon;
}
