import type { ColorTheme } from "@/utils/types";

export type ComponentShapes = "sharp" | "round";

export const ComponentShapeKey = "component-shape-preference";

export interface ComponentShapeSwitcherProps {
  ui?: boolean;
  theme?: ColorTheme;
}
