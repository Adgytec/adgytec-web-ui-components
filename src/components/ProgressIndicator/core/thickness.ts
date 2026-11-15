export type ProgressIndicatorThickness = "default" | "thick";

export const ProgressIndicatorThicknessToStrokeWidth: Record<
    ProgressIndicatorThickness,
    number
> = {
    default: 4,
    thick: 8,
};
