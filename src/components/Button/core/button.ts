import type { ButtonColor } from "./color";
import type { ButtonShape } from "./shape";
import type { ButtonSize } from "./sizes";

export interface ButtonBaseProps {
    color?: ButtonColor;
    size?: ButtonSize;
    shape?: ButtonShape;
    tooltip?: string;
}
