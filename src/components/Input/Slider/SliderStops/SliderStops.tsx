import clsx from "clsx";
import { useContext } from "react";
import { SliderStateContext } from "react-aria-components";
import { checkInActiveRange, checkIsBelowThumb, shouldHide } from "./core";
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

    const midValue = (props.minValue + props.maxValue) / 2;
    const firstThumbValue = sliderState.getThumbValue(0);
    const secondThumbValue = sliderState.getThumbValue(1);

    const shouldHideActive = stops.length === 2;

    return (
        <div className={clsx(styles["stops"])} data-orientation={orientation}>
            {stops.map(({ stopValue }) => {
                const inActiveRange = checkInActiveRange({
                    slider,
                    midValue,
                    firstThumbValue,
                    secondThumbValue,
                    stopValue,
                });

                const belowThumb = checkIsBelowThumb({
                    firstThumbValue,
                    secondThumbValue,
                    stopValue,
                });

                const hide = shouldHide({ slider, midValue, stopValue });

                return (
                    <div
                        key={stopValue}
                        className={clsx(styles["stop"])}
                        data-disabled={sliderState.isDisabled || undefined}
                        data-below-thumb={belowThumb || undefined}
                        data-stop-value={stopValue}
                        data-in-active={inActiveRange || undefined}
                        data-hide={
                            hide ||
                            (shouldHideActive && inActiveRange) ||
                            undefined
                        }
                    />
                );
            })}
        </div>
    );
};
