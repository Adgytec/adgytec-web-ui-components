import type { ColorTheme } from "../../utils/types";
import type {
  ButtonProps as AriaButtonProps,
  LinkProps,
} from "react-aria-components";

export enum ButtonVariant {
  filled = "filled",
  outlined = "outlined",
  text = "text",
}

export enum ButtonShape {
  rectangle = "rectangle",
  square = "square",
  avatar = "avatar",
  shrink = "shrink", // removes all the button padding. Use this shape along with ButtonVariant.text. For other ButtonVariant rectangle shape is applied
}

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
