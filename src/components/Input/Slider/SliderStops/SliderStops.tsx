import clsx from "clsx";
import { useContext, useMemo } from "react";
import { SliderStateContext } from "react-aria-components";
import {
    calcStops,
    checkInActiveRange,
    checkIsBelowThumb,
    shouldHide,
} from "./core";
import styles from "./sliderStops.module.css";
import type { SliderStopsProps } from "./types";

export const SliderStops: React.FC<SliderStopsProps> = ({
    orientation,
    slider = "standard",
    minValue,
    maxValue,
    step,
    showInBetweenSteps,
    maxStops,
}) => {
    const stops = useMemo(() => {
        const stops = calcStops({
            minValue,
            maxValue,
            step,
            showInBetweenSteps,
            maxStops,
        });
        if (orientation === "vertical") {
            stops.reverse();
        }

        return stops;
    }, [minValue, maxValue, step, showInBetweenSteps, orientation, maxStops]);

    const sliderState = useContext(SliderStateContext);
    if (!sliderState) return null;

    const midValue = (minValue + maxValue) / 2;
    const firstThumbValue = sliderState.getThumbValue(0);
    const secondThumbValue = sliderState.getThumbValue(1) ?? NaN;

    const shouldHideActive = stops.length === 2;

    return (
        <div
            className={clsx(styles["stops"])}
            data-orientation={orientation}
            data-slider-stops
        >
            {stops.map(({ stopValue, percent }) => {
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

                const style =
                    orientation === "horizontal"
                        ? { insetInlineStart: `${percent * 100}%` }
                        : { insetBlockEnd: `${percent * 100}%` };

                return (
                    <div
                        key={stopValue}
                        style={style}
                        data-orientation={orientation}
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
                        data-slider-stop
                    />
                );
            })}
        </div>
    );
};
