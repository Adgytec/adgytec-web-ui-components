import type { LucideIcon } from "lucide-react";
import type { ToggleButton } from "react-aria-components";
import type { IconButtonBaseProps } from "../core";

/**
 * Props for the {@link ToggleIconButton} component.
 * Extends React Aria's {@link ToggleButton} props (omitting `children`) with {@link IconButtonBaseProps}
 * and support for a distinct icon in the selected state.
 */
export interface ToggleIconButtonProps
    extends Omit<React.ComponentPropsWithRef<typeof ToggleButton>, "children">,
        IconButtonBaseProps {
    /**
     * Optional icon to render when the toggle button is in the selected (`isSelected = true`) state.
     * If omitted, {@link IconButtonBaseProps.icon} is used for both selected and unselected states.
     */
    selectedIcon?: LucideIcon;
}
