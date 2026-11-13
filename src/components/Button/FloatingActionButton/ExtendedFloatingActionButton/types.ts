import type { LucideIcon } from "lucide-react";
import type { ButtonIconPlacement } from "../../core";
import type { FABBaseProps } from "../core";

/**
 * Props for the {@link ExtendedFloatingActionButton} component.
 * Extends {@link FABBaseProps} with optional icon and icon placement.
 */
export interface ExtendedFloatingActionButtonProps extends FABBaseProps {
    /**
     * An optional icon component to display alongside the label.
     */
    icon?: LucideIcon;

    /**
     * The position of the icon relative to the label content.
     * @default "start"
     */
    iconPlacement?: ButtonIconPlacement;
}
