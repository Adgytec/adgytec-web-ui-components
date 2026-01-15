import { ColorTheme } from "@/utils/types";

export enum ComponentShapes {
  sharp = "sharp",
  round = "round",
}

export const ComponentShapeKey = "component-shape-preference";

export interface ComponentShapeSwitcherProps {
  ui?: boolean;
  theme?: ColorTheme;
}
