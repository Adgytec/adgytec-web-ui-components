import type { ToggleButtonGroup } from "react-aria-components";
import type {
    ButtonIconPlacement,
    ButtonShape,
    ButtonSize,
    ConnectedButtonGroupColor,
} from "../../core";

/**
 * Props for the {@link ConnectedButtonGroup} component.
 * Extends React Aria's {@link ToggleButtonGroup} (excluding orientation) with connected button styling presets.
 */
export interface ConnectedButtonGroupProps
    extends Omit<
        React.ComponentPropsWithRef<typeof ToggleButtonGroup>,
        "orientation"
    > {
    /**
     * Size preset applied across all connected buttons in the group.
     *
     * @default "small"
     */
    size?: ButtonSize;
    /**
     * Corner rounding shape for the outer boundaries of the connected group.
     *
     * @default "round"
     */
    shape?: ButtonShape;
    /**
     * Visual color style variant applied to buttons in the connected group.
     *
     * @default "filled"
     */
    color?: ConnectedButtonGroupColor;
    /**
     * Default icon placement relative to label for connected buttons.
     *
     * @default "start"
     */
    iconPlacement?: ButtonIconPlacement;
}
