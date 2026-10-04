import type { LucideIcon } from "lucide-react";
import type { Switch } from "react-aria-components";

/**
 * Props for the {@link Switch} component.
 * Extends React Aria's {@link Switch} props.
 */
export interface SwitchProps
    extends React.ComponentPropsWithRef<typeof Switch> {
    /**
     * Determines which icons to render within the switch handle.
     *
     * - `"none"`: No icons.
     * - `"selected"`: Icon rendered only when selected (default).
     * - `"both"`: Render selected icon when on, and unselected icon when off.
     *
     * @default "selected"
     */
    icon?: "none" | "selected" | "both";

    /**
     * Alignment of the label text relative to the switch track.
     *
     * @default "start"
     */
    labelPlacement?: "start" | "end";

    /**
     * When `true`, displays the state layer across the whole component container.
     *
     * @default false
     */
    containerStateLayer?: boolean;

    /**
     * Custom icon rendered when the switch is unselected (used when `icon="both"`).
     *
     * @default X
     */
    unselectedIcon?: LucideIcon;

    /**
     * Custom icon rendered when the switch is selected (used when `icon="selected"` or `"both"`).
     *
     * @default Check
     */
    selectedIcon?: LucideIcon;
}
