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
> = ({ thickness = "default", children, className, ...props }) => {
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
                        >
                            {percentage > 0 && (
                                <div
                                    style={{
                                        inlineSize: `${percentage}%`,
                                    }}
                                    className={clsx(styles["active"])}
                                >
                                    <Sine
                                        {...LinearProgressIndicatorSineWaveProps(
                                            percentage,
                                            isIndeterminate,
                                            thickness
                                        )}
                                    />
                                </div>
                            )}

                            {percentage < 100 && (
                                <div className={clsx(styles["in-active"])} />
                            )}
                        </div>
                    </>
                );
            }}
        </ProgressBar>
    );
};
