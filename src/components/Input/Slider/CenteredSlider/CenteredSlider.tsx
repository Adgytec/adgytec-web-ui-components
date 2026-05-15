import clsx from "clsx";
import { Slider as AriaSlider, SliderTrack } from "react-aria-components";
import { SliderSizeStyles, SliderStyles, TrackStyles } from "../core";
import { SliderStops } from "../SliderStops";
import { SliderThumb } from "../SliderThumb";
import styles from "./centeredSlider.module.css";
import type { CenteredSliderProps } from "./types";

function remapBoth(value: number) {
    const initial = Math.min(1, Math.max(0, value * 2));

    const final = Math.min(1, Math.max(0, (value - 0.5) * 2));

    return { initial, final };
}

export const CenteredSlider = <T extends number>({
    thumbLabels,
    size = "small",
    minValue = 0,
    maxValue = 100,
    step = 1,
    defaultValue = ((minValue + maxValue) / 2) as T,
    showInBetweenSteps,
    ...props
}: CenteredSliderProps<T>) => {
    return (
        <AriaSlider
            minValue={minValue}
            maxValue={maxValue}
            step={step}
            defaultValue={defaultValue}
            className={clsx(SliderStyles)}
            {...props}
        >
            {({ orientation, state }) => {
                const thumbValue = state.getThumbPercent(0);

                const isInitial = thumbValue < 0.5;
                const isFinal = thumbValue > 0.5;
                const isMiddle = thumbValue === 0.5;

                const { initial, final } = remapBoth(thumbValue);
                const initialInactive = initial * 100;
                const initialActive = (1 - initial) * 100;

                const finalActive = final * 100;
                const finalInactive = (1 - final) * 100;

                const sizeKey =
                    orientation === "horizontal" ? "inlineSize" : "blockSize";

                return (
                    <SliderTrack
                        className={clsx(TrackStyles, SliderSizeStyles(size))}
                    >
                        <div
                            className={clsx(styles["visual-track"])}
                            data-orientation={orientation}
                        >
                            <div
                                className={clsx(styles["track"])}
                                data-track="initial"
                                data-orientation={orientation}
                                data-active-track={isInitial || undefined}
                                data-middle={isMiddle || undefined}
                            >
                                <div
                                    className={clsx(styles["inactive-track"])}
                                    style={{
                                        [sizeKey]: `${initialInactive}%`,
                                    }}
                                />
                                <div
                                    className={clsx(styles["active-track"])}
                                    style={{
                                        [sizeKey]: `${initialActive}%`,
                                    }}
                                    data-orientation={orientation}
                                    data-track="initial"
                                    data-active-track={isInitial || undefined}
                                    data-middle={isMiddle || undefined}
                                >
                                    <div />
                                </div>
                            </div>
                            <div
                                className={clsx(styles["track"])}
                                data-track="final"
                                data-orientation={orientation}
                                data-active-track={isFinal || undefined}
                                data-middle={isMiddle || undefined}
                            >
                                <div
                                    className={clsx(styles["active-track"])}
                                    style={{
                                        [sizeKey]: `${finalActive}%`,
                                    }}
                                    data-orientation={orientation}
                                    data-track="final"
                                    data-active-track={isFinal || undefined}
                                    data-middle={isMiddle || undefined}
                                >
                                    <div />
                                </div>
                                <div
                                    className={clsx(styles["inactive-track"])}
                                    style={{
                                        [sizeKey]: `${finalInactive}%`,
                                    }}
                                />
                            </div>
                        </div>
                        <SliderThumb size={size} orientation={orientation} />

                        <SliderStops
                            slider="centered"
                            minValue={minValue}
                            maxValue={maxValue}
                            step={step}
                            orientation={orientation}
                            showInBetweenSteps={showInBetweenSteps}
                        />
                    </SliderTrack>
                );
            }}
        </AriaSlider>
    );
};
