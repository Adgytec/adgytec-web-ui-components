import type { LucideIcon } from "lucide-react";
import type { SwitchField } from "react-aria-components";

/**
 * Props for the [`Switch`](src/components/Input/Switch/Switch.tsx) component.
 *
 * Extends all properties from React Aria's `SwitchField`, including form submission (`name`, `value`),
 * selection states (`isSelected`, `defaultSelected`, `onChange`), validation, and accessibility.
 */
export interface SwitchProps
    extends React.ComponentPropsWithRef<typeof SwitchField> {
    /**
     * Determines which icons to render within the switch handle.
     *
     * - `"none"`: No icons rendered.
     * - `"selected"`: Icon rendered only when the switch is selected (default).
     * - `"both"`: Render selected icon when on, and unselected icon when off.
     *
     * @default "selected"
     */
    icon?: "none" | "selected" | "both";

    /**
     * Alignment of the label text relative to the switch track.
     *
     * - `"start"`: Label appears before (to the left of) the switch track.
     * - `"end"`: Label appears after (to the right of) the switch track.
     *
     * @default "start"
     */
    labelPlacement?: "start" | "end";

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
