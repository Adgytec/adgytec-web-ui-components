import type { SliderVariant } from "../core";
import type { CalculateStops, Stop } from "./types";

const DEFAULT_MAX_STOPS = 20;

/**
 * Clamps a numeric value between minimum and maximum bounds.
 *
 * @param value - The input value to clamp.
 * @param min - The lower bound. Defaults to `-Infinity`.
 * @param max - The upper bound. Defaults to `Infinity`.
 * @returns The clamped value within `[min, max]`.
 */
export const clamp = (
    value: number,
    min: number = -Infinity,
    max: number = Infinity
): number => {
    return Math.min(Math.max(value, min), max);
};

/**
 * Calculates the decimal precision (number of decimal places) of a step value.
 *
 * Supports standard fractional numbers (e.g. `0.01` -> 2) and scientific notation (e.g. `1e-7` -> 7).
 *
 * @param step - The step increment.
 * @returns The number of decimal places represented by the step.
 */
export const getStepPrecision = (step: number): number => {
    let precision = 0;

    const stepString = step.toString();

    const exponentialIndex = stepString.toLowerCase().indexOf("e-");

    if (exponentialIndex > 0) {
        precision =
            Math.abs(Math.floor(Math.log10(Math.abs(step)))) + exponentialIndex;
    } else {
        const pointIndex = stepString.indexOf(".");

        if (pointIndex >= 0) {
            precision = stepString.length - pointIndex;
        }
    }

    return precision;
};

/**
 * Rounds a numeric value to the precision determined by the step value
 * to eliminate floating-point calculation inaccuracies.
 *
 * @param value - The value to round.
 * @param step - The step determining precision.
 * @returns The rounded numeric value.
 */
export const roundToStepPrecision = (value: number, step: number): number => {
    const precision = getStepPrecision(step);

    if (precision <= 0) {
        return value;
    }

    const pow = 10 ** precision;

    return Math.round(value * pow) / pow;
};

/**
 * Snaps a given number to the nearest valid step increment between min and max bounds.
 *
 * @param options - Configuration object containing value, minValue, maxValue, and step.
 * @returns The snapped value aligned to the step grid.
 */
export const snapValueToStep = ({
    value,
    minValue,
    maxValue,
    step,
}: {
    value: number;
    minValue: number;
    maxValue: number;
    step: number;
}): number => {
    const remainder = (value - minValue) % step;

    let snappedValue = roundToStepPrecision(
        Math.abs(remainder) * 2 >= step
            ? value + Math.sign(remainder) * (step - Math.abs(remainder))
            : value - remainder,
        step
    );

    if (snappedValue < minValue) {
        snappedValue = minValue;
    } else if (snappedValue > maxValue) {
        snappedValue =
            minValue +
            Math.floor(
                roundToStepPrecision((maxValue - minValue) / step, step)
            ) *
                step;
    }

    snappedValue = roundToStepPrecision(snappedValue, step);

    return snappedValue;
};

/**
 * Generates all valid slider tick stops along the track using stepping logic
 * compatible with React Aria.
 *
 * If the number of generated stops exceeds `maxStops` or `showInBetweenSteps` is false,
 * only the minimum and maximum boundaries are returned to prevent excessive DOM nodes.
 *
 * @param options - Stop calculation configuration.
 * @returns Array of calculated {@link Stop} objects with `stopValue` and `percent`.
 */
export const calcStops: CalculateStops = ({
    minValue,
    maxValue,
    step,
    showInBetweenSteps = true,
    maxStops = DEFAULT_MAX_STOPS,
}) => {
    /**
     * Invalid configuration fallback.
     */
    if (step <= 0 || Number.isNaN(step) || maxValue < minValue) {
        return [];
    }

    const range = maxValue - minValue;

    /**
     * React Aria consistent last valid stop.
     *
     * Example:
     * min=0
     * max=10
     * step=3
     *
     * valid values:
     * 0 3 6 9
     */
    const lastStopValue = snapValueToStep({
        value: maxValue,
        minValue,
        maxValue,
        step,
    });

    const createStop = (stopValue: number): Stop => ({
        stopValue,
        percent: range === 0 ? 0 : (stopValue - minValue) / range,
    });

    /**
     * Reduced stop rendering mode.
     */
    if (step === 1 || !showInBetweenSteps) {
        return [createStop(minValue), createStop(lastStopValue)];
    }

    const stops: Stop[] = [];

    let value = minValue;

    while (value <= lastStopValue) {
        stops.push(createStop(value));

        const nextValue = snapValueToStep({
            value: value + step,
            minValue,
            maxValue,
            step,
        });

        /**
         * Prevent infinite loops caused by
         * floating precision edge cases.
         */
        if (nextValue === value) {
            break;
        }

        value = nextValue;

        /**
         * DOM safety guard.
         */
        if (stops.length > maxStops) {
            return [createStop(minValue), createStop(lastStopValue)];
        }
    }

    return stops;
};

const checkInActiveRangeStandardSlider = ({
    thumbValue,
    stopValue,
}: {
    thumbValue: number;
    stopValue: number;
}): boolean => {
    return stopValue < thumbValue;
};

const checkInActiveRangeRangeSlider = ({
    firstThumbValue,
    secondThumbValue,
    stopValue,
}: {
    firstThumbValue: number;
    secondThumbValue: number;
    stopValue: number;
}): boolean => {
    return stopValue > firstThumbValue && stopValue < secondThumbValue;
};

const checkInActiveRangeCenteredSlider = ({
    thumbValue,
    stopValue,
    midValue,
}: {
    thumbValue: number;
    stopValue: number;
    midValue: number;
}): boolean => {
    return (
        (stopValue < midValue && stopValue > thumbValue) ||
        (stopValue > midValue && stopValue < thumbValue) ||
        stopValue === midValue
    );
};

/**
 * Determines whether a given tick stop falls within the active (highlighted) track range
 * for the specified slider variant.
 *
 * - Standard slider: stops strictly below the thumb.
 * - Range slider: stops strictly between the start and end thumbs.
 * - Centered slider: stops between the mid-value and the thumb position.
 *
 * @param options - Configuration containing the slider variant, thumb values, mid-value, and stopValue.
 * @returns `true` if the stop is within the active highlighted track segment.
 */
export const checkInActiveRange = ({
    slider,
    midValue,
    firstThumbValue,
    secondThumbValue,
    stopValue,
}: {
    slider: SliderVariant;
    midValue: number;
    firstThumbValue: number;
    secondThumbValue: number;
    stopValue: number;
}): boolean => {
    switch (slider) {
        case "standard":
            return checkInActiveRangeStandardSlider({
                thumbValue: firstThumbValue,
                stopValue,
            });

        case "range":
            return checkInActiveRangeRangeSlider({
                firstThumbValue,
                secondThumbValue,
                stopValue,
            });

        case "centered":
            return checkInActiveRangeCenteredSlider({
                thumbValue: firstThumbValue,
                midValue,
                stopValue,
            });
    }
};

/**
 * Checks whether a given stop coincides directly with any active thumb position.
 *
 * @param options - First and second thumb values, plus the candidate stopValue.
 * @returns `true` if the stop is located directly underneath a thumb.
 */
export const checkIsBelowThumb = ({
    firstThumbValue,
    secondThumbValue,
    stopValue,
}: {
    firstThumbValue: number;
    secondThumbValue: number;
    stopValue: number;
}): boolean => {
    return stopValue === firstThumbValue || stopValue === secondThumbValue;
};

/**
 * Checks whether a stop indicator should be visually hidden.
 *
 * For centered sliders, the center anchor point is hidden to avoid overlapping track visuals.
 *
 * @param options - Slider variant, midValue, and stopValue.
 * @returns `true` if the stop indicator should be hidden.
 */
export const shouldHide = ({
    slider,
    midValue,
    stopValue,
}: {
    slider: SliderVariant;
    midValue: number;
    stopValue: number;
}): boolean => {
    if (slider !== "centered") {
        return false;
    }

    return stopValue === midValue;
};
