import type { LucideIcon } from "lucide-react";
import type { ToggleButton } from "react-aria-components";
import type { ButtonBaseProps, ToggleButtonColor } from "../core";

export interface ToggleButtonProps
    extends React.ComponentPropsWithRef<typeof ToggleButton>,
        Omit<ButtonBaseProps, "color"> {
    selectedIcon?: LucideIcon;
    color?: ToggleButtonColor;
}
