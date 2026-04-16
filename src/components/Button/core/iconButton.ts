import type { IconButtonColor } from "./color";
import type { ButtonShape } from "./shape";
import type { ButtonSize } from "./sizes";
import type { IconButtonWidth } from "./width";

export interface IconButtonBaseProps {
    color?: IconButtonColor;
    size?: ButtonSize;
    shape?: ButtonShape;
    width?: IconButtonWidth;
}
