import type { SliderVariant } from "../core";
import type { CalculateStops, Stop } from "./types";

const MAX_STOPS = 100;

export const calcStops: CalculateStops = ({
    minValue,
    maxValue,
    step,
    showInBetweenSteps = true,
}) => {
    // invalid configuration fallback
    if (step <= 0 || maxValue < minValue) {
        return [];
    }

    // only show starting and ending stop for step = 1
    // and when explicitly not required
    if (step === 1 || !showInBetweenSteps) {
        return [{ stopValue: minValue }, { stopValue: maxValue }];
    }

    const stopCount = Math.floor((maxValue - minValue) / step) + 1;

    // protect against excessive DOM nodes
    if (stopCount > MAX_STOPS) {
        return [{ stopValue: minValue }, { stopValue: maxValue }];
    }

    const stops: Stop[] = [];

    // derive decimal precision from step value
    // so floating point math like 0.30000000000000004
    // becomes stable values like 0.3
    const precision = step.toString().split(".")[1]?.length ?? 0;
    for (let i = 0; i < stopCount; i++) {
        const stopValue = Number((minValue + i * step).toFixed(precision));

        stops.push({
            stopValue,
        });
    }

    return stops;
};

const FLOAT_PRECISION_TOLERANCE = 1e-7;

// floating point arithmetic can produce tiny precision errors
// (e.g. 0.30000000000000004 instead of 0.3)
// so compare numbers within a small tolerance
const isEqual = (a: number, b: number, epsilon = FLOAT_PRECISION_TOLERANCE) => {
    return Math.abs(a - b) < epsilon;
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
    midValue: number;
    thumbValue: number;
    stopValue: number;
}): boolean => {
    return (
        (stopValue < midValue && stopValue > thumbValue) ||
        (stopValue > midValue && stopValue < thumbValue) ||
        isEqual(stopValue, midValue)
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
    return (
        isEqual(stopValue, firstThumbValue) ||
        isEqual(stopValue, secondThumbValue)
    );
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
    if (slider !== "centered") return false;
    return isEqual(stopValue, midValue);
};
