import type { SliderVariant } from "../core";

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
    if (stopValue === midValue) return true;

    // start range
    if (stopValue < midValue) {
        return stopValue > thumbValue;
    }

    // end range
    return stopValue < thumbValue;
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
    if (slider !== "centered") return false;
    return stopValue === midValue;
};
