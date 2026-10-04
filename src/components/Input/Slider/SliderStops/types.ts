import type { Orientation } from "react-aria";
import type { SliderVariant } from "../core";

/**
 * Props for the [`SliderStops`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/SliderStops/SliderStops.tsx) component.
 */
export type SliderStopsProps = {
    /**
     * Minimum value of the slider range.
     */
    minValue: number;
    /**
     * Maximum value of the slider range.
     */
    maxValue: number;
    /**
     * Stepping increment between selectable slider values.
     */
    step: number;
    /**
     * Whether to show intermediate tick marks between min and max bounds.
     */
    showInBetweenSteps?: boolean;
    /**
     * Layout orientation of the slider track.
     */
    orientation: Orientation;
    /**
     * Variant of the slider determining track filling behavior and active ranges.
     *
     * @default "standard"
     */
    slider?: SliderVariant;
    /**
     * Maximum number of step ticks to render before reverting to min/max only.
     */
    maxStops?: number;
};

/**
 * Represents a single calculated step indicator mark along the slider track.
 */
export type Stop = {
    /**
     * The numeric value represented by this stop.
     */
    stopValue: number;
    /**
     * The percentage offset (0 to 1) along the track where the stop is placed.
     */
    percent: number;
};

/**
 * Function signature for generating the list of tick stops along a slider track.
 */
export type CalculateStops = (
    values: Omit<SliderStopsProps, "orientation" | "thumbCount">
) => Stop[];
