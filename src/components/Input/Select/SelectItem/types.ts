import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ListBoxItem } from "react-aria-components";

export interface SelectItemProps
    extends Omit<React.ComponentPropsWithRef<typeof ListBoxItem>, "children"> {
    leadingIcon?: LucideIcon;
    label: string;
    supportingText?: string;
    trailingText?: ReactNode;
    trailingIcon?: LucideIcon;
}
