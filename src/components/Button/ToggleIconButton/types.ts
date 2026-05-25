import type { LucideIcon } from "lucide-react";
import type { ToggleButton } from "react-aria-components";
import type { IconButtonBaseProps } from "../core";

export interface ToggleIconButtonProps
    extends Omit<React.ComponentPropsWithRef<typeof ToggleButton>, "children">,
        IconButtonBaseProps {
    selectedIcon?: LucideIcon;
}
