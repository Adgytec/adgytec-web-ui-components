import type { LucideIcon } from "lucide-react";
import type { ToggleButton } from "react-aria-components";
import type { ButtonIconPlacement } from "../../core";

export interface ConnectedButtonProps
    extends Omit<
        React.ComponentPropsWithRef<typeof ToggleButton>,
        "className"
    > {
    icon?: LucideIcon;
    selectedIcon?: LucideIcon;
    iconPlacement?: ButtonIconPlacement;
}
