import type { LucideIcon } from "lucide-react";
import type { ToggleButtonProps as AriaToggleButtonProps } from "react-aria-components";
import type { ButtonBaseProps, ToggleButtonColor } from "../core";

export interface ToggleButtonProps
    extends Omit<AriaToggleButtonProps, "className">,
        Omit<ButtonBaseProps, "color"> {
    selectedIcon?: LucideIcon;
    color?: ToggleButtonColor;
}
