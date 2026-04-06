import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import type { ButtonShape, ButtonVariant } from "@/utils/button/types";
import type { ColorTheme } from "@/utils/types";

export interface ButtonProps extends AriaButtonProps {
    variant?: ButtonVariant;
    theme?: ColorTheme;
    shape?: ButtonShape;
    description?: string;
}
