import type { ToggleButtonGroup } from "react-aria-components";
import type {
    ButtonIconPlacement,
    ButtonShape,
    ButtonSize,
    CoreButtonColor,
} from "../../core";

/**
 * Props for the {@link ButtonGroup} component.
 * Extends React Aria's {@link ToggleButtonGroup} (excluding orientation) with button styling presets.
 */
export interface ButtonGroupProps
    extends Omit<
        React.ComponentPropsWithRef<typeof ToggleButtonGroup>,
        "orientation"
    > {
    /**
     * Size preset inherited by buttons within the group.
     *
     * @default "small"
     */
    size?: ButtonSize;
    /**
     * Corner rounding shape inherited by buttons within the group.
     *
     * @default "round"
     */
    shape?: ButtonShape;
    /**
     * Visual color style variant inherited by buttons within the group.
     *
     * @default "filled"
     */
    color?: CoreButtonColor;
    /**
     * Default icon placement relative to label for buttons within the group.
     *
     * @default "start"
     */
    iconPlacement?: ButtonIconPlacement;
}
