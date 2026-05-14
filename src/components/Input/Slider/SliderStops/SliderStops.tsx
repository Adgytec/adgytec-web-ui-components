import clsx from "clsx";
import styles from "./sliderStops.module.css";
import type { CalculateStops, SliderStopsProps } from "./types";

const calcStops: CalculateStops = ({
    minValue,
    maxValue,
    step,
    showInBetweenSteps = true,
}) => {
    // only show starting and ending stop for step = 1
    // and when explicitly not required
    if (step === 1 || !showInBetweenSteps) return 2;

    return Math.round((maxValue - minValue) / step) + 1;
};

export const SliderStops: React.FC<SliderStopsProps> = (props) => {
    const stops = calcStops(props);

    return (
        <div
            className={clsx(styles["stops"])}
            data-orientation={props.orientation}
        >
            {Array.from({ length: stops }).map((_, index) => (
                // biome-ignore lint: index is stable here
                <div key={index} className={clsx(styles["stop"])} />
            ))}
        </div>
    );
};
