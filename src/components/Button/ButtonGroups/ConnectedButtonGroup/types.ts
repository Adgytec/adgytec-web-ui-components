import type { ToggleButtonGroup } from "react-aria-components";
import type {
    ButtonShape,
    ButtonSize,
    ConnectedButtonGroupColor,
} from "../../core";

export interface ConnectedButtonGroupProps
    extends Omit<
        React.ComponentPropsWithRef<typeof ToggleButtonGroup>,
        "orientation"
    > {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: ConnectedButtonGroupColor;
}
