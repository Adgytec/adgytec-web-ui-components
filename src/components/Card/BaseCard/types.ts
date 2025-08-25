import type React from "react";

export enum CardBackground {
  transparent = "transparent",
  solid = "solid",
  solidLow = "solid-low",
  solidLowest = "solid-lowest",
  solidHigh = "solid-high",
  solidHighest = "solid-highest",
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

export interface StyledBaseCardProps
  extends Omit<BaseCardProps, "background"> {}

export type SolidCardBackground =
  | CardBackground.solid
  | CardBackground.solidLow
  | CardBackground.solidLowest
  | CardBackground.solidHigh
  | CardBackground.solidHighest;

export interface StyledSolidCardProps
  extends Omit<BaseCardProps, "background"> {
  background?: SolidCardBackground;
}
