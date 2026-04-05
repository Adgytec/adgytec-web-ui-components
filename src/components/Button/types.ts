import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import type { ColorTheme } from "@/utils/types";

export type ButtonVariant = "filled" | "outlined" | "text";

export type ButtonShape =
    | "default"
    | "square"
    | "square-shrink"
    | "avatar"
    | "shrink";

export interface ButtonProps extends AriaButtonProps {
    variant?: ButtonVariant;
    theme?: ColorTheme;
    shape?: ButtonShape;
    description?: string;
}

// export interface ButtonLinkProps extends LinkProps {
//     variant?: ButtonVariant;
// }

// export interface ToggleButtonProps {
//     id: Key;
//     value: string;
//     description?: string;
//     theme?: ColorTheme;
//     isDisabled?: boolean;
// }
