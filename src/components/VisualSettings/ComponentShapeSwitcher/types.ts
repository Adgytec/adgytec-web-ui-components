import type { ColorTheme } from "@/utils/types";

export type ComponentShapes = "sharp" | "round";

export const ComponentShapeKey = "component-shape-preference";

export type ShapeValue = {
    sharp: string;
    round: string;
};

export interface ComponentShapeSwitcherProps {
    ui?: boolean;
    theme?: ColorTheme;
    displayValue?: ShapeValue;
}
