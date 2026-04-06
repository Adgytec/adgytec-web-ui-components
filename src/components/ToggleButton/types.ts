import type { ToggleButtonProps as AriaToggleButtonProps } from "react-aria-components";
import type { ButtonShape, ButtonVariant } from "@/utils/button/types";
import type { ColorTheme } from "@/utils/types";

export interface ToggleButtonProps extends AriaToggleButtonProps {
    description?: string;
    theme?: ColorTheme;
    variant?: ButtonVariant;
    shape?: ButtonShape;
}
