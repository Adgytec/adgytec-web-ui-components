import type { LucideIcon } from "lucide-react";
import type { Button } from "react-aria-components";

export interface SplitButtonPrimaryProps
    extends Omit<React.ComponentPropsWithRef<typeof Button>, "className"> {
    tooltip?: string;
    icon?: LucideIcon;
}
