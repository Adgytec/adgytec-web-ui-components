import type { ToggleButtonGroupProps as AriaToggleButtonGroupProps } from "react-aria-components";
import type { ButtonSize } from "../../core";

export interface ButtonGroupProps
    extends Omit<AriaToggleButtonGroupProps, "orientation"> {
    size?: ButtonSize;
}
