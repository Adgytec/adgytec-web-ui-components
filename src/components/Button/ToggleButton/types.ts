import type { ToggleButtonProps as AriaToggleButtonProps } from "react-aria-components";
import type { ButtonBaseProps, ToggleButtonColor } from "../core";

export interface ToggleButtonProps
    extends AriaToggleButtonProps,
        Omit<ButtonBaseProps, "color"> {
    color?: ToggleButtonColor;
}
