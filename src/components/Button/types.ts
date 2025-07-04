import type { ReactNode } from "react";

export enum ButtonVariant {
  filled = "filled",
  outlined = "outlined",
  text = "text",
}

export enum ButtonTheme {
  primary = "primary",
  primaryVariant = "primary-variant",
  secondary = "secondary",
  error = "error",
}

export type ButtonOnPressHandler = () => void;

export interface ButtonProps extends ButtonVariantProps {
  variant: ButtonVariant;
}

export interface ButtonVariantProps {
  onPress?: ButtonOnPressHandler;
  disabled?: boolean;
  theme: ButtonTheme;
  children: ReactNode;
  slot?: string; // check react-aria library documentation for its use in multiple other components
}

export interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  target?: string;
  theme: ButtonTheme;
  disabled?: boolean;
  variant: ButtonVariant;
  slot?: string;
}
