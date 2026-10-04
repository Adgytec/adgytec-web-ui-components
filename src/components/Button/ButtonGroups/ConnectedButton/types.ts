import type { LucideIcon } from "lucide-react";
import type { ToggleButton } from "react-aria-components";
import type { ButtonIconPlacement } from "../../core";

/**
 * Props for the {@link ConnectedButton} component.
 * Extends React Aria's {@link ToggleButton} props with toggle icon, placement, and tooltip support.
 */
export interface ConnectedButtonProps
    extends React.ComponentPropsWithRef<typeof ToggleButton> {
    /**
     * An optional icon to display within the button.
     */
    icon?: LucideIcon;
    /**
     * An optional icon to display when the button is in the selected (`isSelected = true`) state.
     * If omitted, {@link icon} is used for both states.
     */
    selectedIcon?: LucideIcon;
    /**
     * Overrides the group's default icon placement relative to label.
     */
    iconPlacement?: ButtonIconPlacement;
    /**
     * Optional tooltip text displayed on hover/focus.
     */
    tooltip?: string;
}
