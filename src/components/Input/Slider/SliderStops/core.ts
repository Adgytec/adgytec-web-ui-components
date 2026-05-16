import type { SliderVariant } from "../core";
import type { CalculateStops, Stop } from "./types";

const DEFAULT_MAX_STOPS = 20;

/**
 * React Aria style clamp.
 */
export const clamp = (
    value: number,
    min: number = -Infinity,
    max: number = Infinity
): number => {
    return Math.min(Math.max(value, min), max);
};

/**
 * React Aria precision extraction.
 *
 * Handles:
 * - 0.1
 * - 0.01
 * - 1e-7
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
 * React Aria style precision correction.
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
 * React Aria snap implementation.
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
 * Generates all valid slider stops using
 * the same stepping logic as React Aria.
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
