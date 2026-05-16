import type { Orientation } from "react-aria";
import type { SliderVariant } from "../core";

export type SliderStopsProps = {
    minValue: number;
    maxValue: number;
    step: number;
    showInBetweenSteps?: boolean;
    orientation: Orientation;
    slider?: SliderVariant;
    maxStops?: number;
};

export type Stop = { stopValue: number; percent: number };

export type CalculateStops = (
    values: Omit<SliderStopsProps, "orientation" | "thumbCount">
) => Stop[];
