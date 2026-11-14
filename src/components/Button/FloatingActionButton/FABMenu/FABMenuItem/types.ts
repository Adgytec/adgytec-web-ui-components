import type { LucideIcon } from "lucide-react";
import type { MenuItem } from "react-aria-components";

export interface FABMenuItemProps
    extends React.ComponentPropsWithRef<typeof MenuItem> {
    icon: LucideIcon;
}
