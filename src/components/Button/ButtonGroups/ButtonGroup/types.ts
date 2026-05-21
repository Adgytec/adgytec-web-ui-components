import type { ToggleButtonGroup } from "react-aria-components";
import type {
    ButtonIconPlacement,
    ButtonShape,
    ButtonSize,
    CoreButtonColor,
} from "../../core";

export interface ButtonGroupProps
    extends Omit<
        React.ComponentPropsWithRef<typeof ToggleButtonGroup>,
        "orientation"
    > {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: CoreButtonColor;
    iconPlacement?: ButtonIconPlacement;
}
