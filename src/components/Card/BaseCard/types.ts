import type { ComponentStyle } from "@/utils/types";
import type React from "react";

export enum CardBackground {
  solid = "solid",
  solidLow = "solid-low",
  solidLowest = "solid-lowest",
  solidHigh = "solid-high",
  solidHighest = "solid-highest",
  gradient = "gradient",
}

export interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: CardBackground;
  componentStyle?: ComponentStyle;
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
