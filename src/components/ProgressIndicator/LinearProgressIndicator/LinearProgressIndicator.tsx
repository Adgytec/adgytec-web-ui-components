import clsx from "clsx";
import { ProgressBar } from "react-aria-components";
import { Sine } from "@/components/Wave";
import styles from "./linearProgressIndicator.module.css";
import {
    type LinearProgressIndicatorProps,
    LinearProgressIndicatorSineWaveProps,
} from "./types";

export const LinearProgressIndicator: React.FC<
    LinearProgressIndicatorProps
> = ({ thickness = "default", wavy = true, children, className, ...props }) => {
    return (
        <ProgressBar
            className={(renderProps) =>
                clsx(
                    styles["indicator"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-thickness={thickness}
        >
            {(renderProps) => {
                const { percentage = 0, isIndeterminate } = renderProps;

                return (
                    <>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}

                        <div
                            className={clsx(styles["track"])}
                            data-thickness={thickness}
                            data-indeterminate={isIndeterminate || undefined}
                        >
                            {isIndeterminate ? (
                                // order is always: track, bar 2, track, bar 1, track
                                <>
                                    <div
                                        className={styles["in-active"]}
                                        data-segment="track-1"
                                    />
                                    <div
                                        className={styles["active"]}
                                        data-wavy={false}
                                        data-segment="bar-2"
                                    />
                                    <div
                                        className={styles["in-active"]}
                                        data-segment="track-2"
                                    />
                                    <div
                                        className={styles["active"]}
                                        data-wavy={false}
                                        data-segment="bar-1"
                                    />
                                    <div
                                        className={styles["in-active"]}
                                        data-segment="track-3"
                                    />
                                </>
                            ) : (
                                <>
                                    {percentage > 0 && (
                                        <div
                                            style={{
                                                inlineSize: `${percentage}%`,
                                            }}
                                            className={clsx(styles["active"])}
                                            data-wavy={wavy}
                                        >
                                            {wavy && (
                                                <Sine
                                                    {...LinearProgressIndicatorSineWaveProps(
                                                        percentage,
                                                        thickness
                                                    )}
                                                />
                                            )}
                                        </div>
                                    )}

                                    {percentage < 100 && (
                                        <div
                                            className={clsx(
                                                styles["in-active"]
                                            )}
                                        />
                                    )}
                                </>
                            )}
                        </div>
                    </>
                );
            }}
        </ProgressBar>
    );
};
