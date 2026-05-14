import clsx from "clsx";
import { useContext } from "react";
import { SliderStateContext } from "react-aria-components";
import type { SliderVariant } from "../core";
import styles from "./sliderStops.module.css";
import type { CalculateStops, SliderStopsProps, Stop } from "./types";

const calcStops: CalculateStops = ({
    minValue,
    maxValue,
    step,
    showInBetweenSteps = true,
}) => {
    // only show starting and ending stop for step = 1
    // and when explicitly not required
    if (step === 1 || !showInBetweenSteps) {
        return [{ stopValue: minValue }, { stopValue: maxValue }];
    }

    const stopCount = Math.round((maxValue - minValue) / step) + 1;
    const stops: Stop[] = [];

    for (let i = 0; i < stopCount; i++) {
        const stopValue = minValue + i * step;

        stops.push({
            stopValue,
        });
    }

    return stops;
};

const SliderThumbCount: Record<SliderVariant, number> = {
    standard: 1,
    centered: 1,
    range: 2,
} as const;

export const SliderStops: React.FC<SliderStopsProps> = ({
    orientation,
    slider = "standard",
    ...props
}) => {
    const sliderState = useContext(SliderStateContext);
    if (!sliderState) return null;

    const stops = calcStops(props);
    if (orientation === "vertical") {
        stops.reverse();
    }
    const thumbCount = SliderThumbCount[slider];

    return (
        <div className={clsx(styles["stops"])} data-orientation={orientation}>
            {stops.map(({ stopValue }) => {
                const first = sliderState.getThumbValue(0);
                const second =
                    thumbCount === 2 ? sliderState.getThumbValue(1) : NaN;

                const inActiveRange =
                    thumbCount === 1
                        ? stopValue < first
                        : stopValue > first && stopValue < second;

                const belowThumb = stopValue === first || stopValue === second;

                return (
                    <div
                        key={stopValue}
                        className={clsx(styles["stop"])}
                        data-disabled={sliderState.isDisabled || undefined}
                        data-below-thumb={belowThumb || undefined}
                        data-stop-value={stopValue}
                        data-in-active={
                            (!belowThumb && inActiveRange) || undefined
                        }
                    />
                );
            })}
        </div>
    );
};
