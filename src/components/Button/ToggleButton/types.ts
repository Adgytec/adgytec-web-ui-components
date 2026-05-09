import type { LucideIcon } from "lucide-react";
import type { ToggleButton } from "react-aria-components";
import type { ButtonBaseProps, ToggleButtonColor } from "../core";

export interface ToggleButtonProps
    extends Omit<React.ComponentPropsWithRef<typeof ToggleButton>, "className">,
        Omit<ButtonBaseProps, "color"> {
    selectedIcon?: LucideIcon;
    color?: ToggleButtonColor;
}
