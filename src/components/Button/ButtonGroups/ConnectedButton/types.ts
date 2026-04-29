import type { LucideIcon } from "lucide-react";
import type { ToggleButtonProps as AriaToggleButtonProps } from "react-aria-components";

export interface ConnectedButtonProps
    extends Omit<AriaToggleButtonProps, "className"> {
    icon?: LucideIcon;
    selectedIcon?: LucideIcon;
}
