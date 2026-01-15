import type { ComponentStyle } from "@/utils/types";
import type React from "react";

export type CardBackground =
  | "solid"
  | "solid-low"
  | "solid-lowest"
  | "solid-high"
  | "solid-highest"
  | "gradient";

export interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: CardBackground;
  componentStyle?: ComponentStyle;
}

export interface StyledBaseCardProps extends Omit<
  BaseCardProps,
  "background"
> {}

export interface StyledSolidCardProps extends Omit<
  BaseCardProps,
  "background"
> {
  background?: CardBackground;
}
