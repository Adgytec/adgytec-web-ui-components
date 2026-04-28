import type { LucideIcon } from "lucide-react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

export interface SplitButtonPrimaryProps
    extends Omit<AriaButtonProps, "className"> {
    tooltip?: string;
    icon?: LucideIcon;
}
