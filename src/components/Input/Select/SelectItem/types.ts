import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ListBoxItemProps } from "react-aria-components";

export interface SelectItemProps extends Omit<ListBoxItemProps, "children"> {
    leadingIcon?: LucideIcon;
    label: string;
    supportingText?: string;
    trailingText?: ReactNode;
    trailingIcon?: LucideIcon;
}
