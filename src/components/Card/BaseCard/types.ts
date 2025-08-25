import type React from "react";

export enum CardBackground {
  transparent = "transparent",
  solid = "solid",
  gradient = "gradient",
}

export enum CardPadding {
  none = "none",
  default = "default",
}

export interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: CardBackground;
  padding?: CardPadding;
}
