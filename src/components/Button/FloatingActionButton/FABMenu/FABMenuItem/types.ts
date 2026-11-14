import type { LucideIcon } from "lucide-react";
import type { MenuItem } from "react-aria-components";

/**
 * Props for the {@link FABMenuItem} component.
 * Extends React Aria Components `MenuItem` props.
 */
export interface FABMenuItemProps
    extends React.ComponentPropsWithRef<typeof MenuItem> {
    /**
     * Lucide icon to display alongside the action label.
     */
    icon: LucideIcon;
}
