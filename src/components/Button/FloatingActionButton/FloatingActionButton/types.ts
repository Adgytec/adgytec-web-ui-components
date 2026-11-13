import type { LucideIcon } from "lucide-react";
import type { FABBaseProps } from "../core";

/**
 * Props for the {@link FloatingActionButton} component.
 * Extends {@link FABBaseProps} while omitting `children`.
 */
export interface FloatingActionButtonProps
    extends Omit<FABBaseProps, "children"> {
    /**
     * Lucide icon component to display within the FAB.
     */
    icon: LucideIcon;
}
