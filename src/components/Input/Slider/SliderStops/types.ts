import type { Orientation } from "react-aria";

export type SliderStopsProps = {
    minValue: number;
    maxValue: number;
    step: number;
    showInBetweenSteps?: boolean;
    orientation: Orientation;
};

export type CalculateStops = (
    values: Omit<SliderStopsProps, "orientation">
) => number;
