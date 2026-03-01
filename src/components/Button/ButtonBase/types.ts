import type { LinkProps } from "@/components/Link/LinkBase";
import type { ColorTheme } from "@/utils/types";
import type {
    ButtonProps as AriaButtonProps,
    Key,
} from "react-aria-components";

export type ButtonVariant = "filled" | "outlined" | "text";

export type ButtonShape =
    | "default"
    | "square"
    | "square-shrink"
    | "avatar"
    | "shrink";

export interface ButtonProps extends ButtonVariantProps {
    variant: ButtonVariant;
}

export interface ButtonVariantProps extends AriaButtonProps {
    theme?: ColorTheme;
    shape?: ButtonShape;
    description?: string;
}

export interface ButtonLinkProps extends LinkProps {
    variant?: ButtonVariant;
}

export interface ToggleButtonProps {
    id: Key;
    value: string;
    description?: string;
    theme?: ColorTheme;
    isDisabled?: boolean;
}
