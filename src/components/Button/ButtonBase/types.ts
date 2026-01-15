import type { ColorTheme } from "@/utils/types";
import type {
  ButtonProps as AriaButtonProps,
  LinkProps,
  Key,
} from "react-aria-components";

export type ButtonVariant = "filled" | "outlined" | "text";

export type ButtonShape = "rectangle" | "square" | "avatar" | "shrink";

export interface ButtonProps extends ButtonVariantProps {
  variant: ButtonVariant;
}

export interface ButtonVariantProps extends AriaButtonProps {
  theme?: ColorTheme;
  shape?: ButtonShape;
  description?: string;
}

export interface ButtonLinkProps extends LinkProps {
  theme?: ColorTheme;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  description?: string;
  underline?: boolean;
}

export interface ToggleButtonProps {
  id: Key;
  value: string;
  description?: string;
  theme?: ColorTheme;
  isDisabled?: boolean;
}
