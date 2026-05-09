import type { ToggleButtonGroup } from "react-aria-components";
import type { ButtonShape, ButtonSize, CoreButtonColor } from "../../core";

export interface ButtonGroupProps
    extends Omit<
        React.ComponentPropsWithRef<typeof ToggleButtonGroup>,
        "orientation"
    > {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: CoreButtonColor;
}
