import type { ReactNode } from "react";
import type { ColorTheme } from "../../utils/types";

export enum ButtonVariant {
  filled = "filled",
  outlined = "outlined",
  text = "text",
}

export type ButtonOnPressHandler = () => void;

export interface ButtonProps extends ButtonVariantProps {
  variant: ButtonVariant;
}

export interface ButtonVariantProps {
  onPress?: ButtonOnPressHandler;
  disabled?: boolean;
  theme: ColorTheme;
  children: ReactNode;
  slot?: string; // check react-aria library documentation for its use in multiple other components
}

export interface ButtonLinkProps {
  children: ReactNode;
  href?: string;
  target?: string;
  theme: ColorTheme;
  disabled?: boolean;
  variant: ButtonVariant;
  slot?: string;
}
