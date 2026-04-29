import type { ToggleButtonGroupProps as AriaToggleButtonGroupProps } from "react-aria-components";
import type {
    ButtonShape,
    ButtonSize,
    ConnectedButtonGroupColor,
} from "../../core";

export interface ConnectedButtonGroupProps
    extends Omit<AriaToggleButtonGroupProps, "orientation"> {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: ConnectedButtonGroupColor;
}
