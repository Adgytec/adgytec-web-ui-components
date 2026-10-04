import type { LucideIcon } from "lucide-react";
import type { ToggleButton } from "react-aria-components";
import type { ButtonBaseProps, ToggleButtonColor } from "../core";

/**
 * Props for the {@link ToggleButton} component.
 * Extends React Aria's {@link ToggleButton} props with customized color options and toggle state icon support.
 */
export interface ToggleButtonProps
    extends React.ComponentPropsWithRef<typeof ToggleButton>,
        Omit<ButtonBaseProps, "color"> {
    /**
     * Optional icon to render when the toggle button is in the selected (`isSelected = true`) state.
     * If omitted, {@link ButtonBaseProps.icon} is used for both selected and unselected states.
     */
    selectedIcon?: LucideIcon;
    /**
     * Visual color style variant for the toggle button.
     * Note: Does not include `"text"` since toggle buttons require visual container state changes.
     *
     * @default "filled"
     */
    color?: ToggleButtonColor;
}
