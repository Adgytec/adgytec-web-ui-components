import type { ToggleButtonGroupProps as AriaToggleButtonGroupProps } from "react-aria-components";
import type { ButtonShape, ButtonSize, CoreButtonColor } from "../../core";

export interface ButtonGroupProps
    extends Omit<AriaToggleButtonGroupProps, "orientation"> {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: CoreButtonColor;
}
