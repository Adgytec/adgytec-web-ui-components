import type { LucideIcon } from "lucide-react";
import type { Switch } from "react-aria-components";

export interface SwitchProps
    extends React.ComponentPropsWithRef<typeof Switch> {
    icon?: "none" | "selected" | "both";
    labelPlacement?: "start" | "end";
    containerStateLayer?: boolean;
    unselectedIcon?: LucideIcon;
    selectedIcon?: LucideIcon;
}
