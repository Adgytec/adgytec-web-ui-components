import type { ReactNode } from "react";
import type { ColorTheme, OnPressHandler } from "../../utils/types";

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

export interface ButtonVariantProps {
  onPress?: OnPressHandler;
  disabled?: boolean;
  theme?: ColorTheme;
  shape?: ButtonShape;
  children: ReactNode;
  description?: string;
}

export interface ButtonLinkProps {
  children: ReactNode;
  href?: string;
  target?: string;
  theme?: ColorTheme;
  disabled?: boolean;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  description?: string;
}
