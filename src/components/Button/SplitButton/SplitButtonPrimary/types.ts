import type { LucideIcon } from "lucide-react";
import type { Button } from "react-aria-components";

export interface SplitButtonPrimaryProps
    extends React.ComponentPropsWithRef<typeof Button> {
    tooltip?: string;
    icon?: LucideIcon;
    iconPlacement?: "start" | "end";
}
