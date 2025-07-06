import type { ReactNode } from "react";
import type { ColorTheme } from "../../utils/types";

export enum ButtonVariant {
  filled = "filled",
  outlined = "outlined",
  text = "text",
}

export enum ButtonShape {
  rectangle = "rectangle",
  square = "square",
  avatar = "avatar",
}

export type ButtonOnPressHandler = () => void;

export interface ButtonProps extends ButtonVariantProps {
  variant: ButtonVariant;
}

export interface ButtonVariantProps {
  onPress?: ButtonOnPressHandler;
  disabled?: boolean;
  theme?: ColorTheme;
  shape?: ButtonShape;
  children: ReactNode;
  slot?: string; // check react-aria library documentation for its use in multiple other components
}

export interface ButtonLinkProps {
  children: ReactNode;
  href?: string;
  target?: string;
  theme?: ColorTheme;
  disabled?: boolean;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  slot?: string;
}
