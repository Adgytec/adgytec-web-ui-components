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

type ButtonOnPressHandler = () => void;

export interface ButtonProps {
  onPress: ButtonOnPressHandler;
  disabled: boolean;
  variant: ButtonVariant;
  theme: ButtonTheme;
  children: ReactNode;
}

export interface ButtonVariantProps {
  onPress: ButtonOnPressHandler;
  disabled: boolean;
  theme: ButtonTheme;
  children: ReactNode;
}
