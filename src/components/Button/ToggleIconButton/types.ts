import type { LucideIcon } from "lucide-react";
import type { ToggleButtonProps as AriaToggleButtonProps } from "react-aria-components";
import type { IconButtonBaseProps } from "../core";

export interface ToggleIconButtonProps
    extends Omit<AriaToggleButtonProps, "children" | "className">,
        IconButtonBaseProps {
    selectedIcon?: LucideIcon;
}
