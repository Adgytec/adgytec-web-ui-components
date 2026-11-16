import clsx from "clsx";
import { ProgressBar } from "react-aria-components";
import styles from "./linearProgressIndicator.module.css";
import { DeterminateTrack, IndeterminateTrack } from "./Track";
import type { LinearProgressIndicatorProps } from "./types";

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

                        {isIndeterminate ? (
                            <IndeterminateTrack
                                thickness={thickness}
                                wavy={wavy}
                            />
                        ) : (
                            <DeterminateTrack
                                percentage={percentage}
                                thickness={thickness}
                                wavy={wavy}
                            />
                        )}
                    </>
                );
            }}
        </ProgressBar>
    );
};
