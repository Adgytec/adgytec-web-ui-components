import type { ReactNode } from "react";

export enum LinkTheme {
  primary = "primary",
  primaryVariant = "primary-variant",
  secondary = "secondary",
  error = "error",
}

export interface LinkProps {
  children: ReactNode;
  href: string;
  target?: string;
  theme: LinkTheme;
  disabled?: boolean;
}
