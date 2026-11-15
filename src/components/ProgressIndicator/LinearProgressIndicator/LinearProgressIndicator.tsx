import clsx from "clsx";
import { ProgressBar } from "react-aria-components";
import styles from "./linearProgressIndicator.module.css";
import type { LinearProgressIndicatorProps } from "./types";

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
                const { percentage } = renderProps;
                return (
                    <>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}

                        <div className={clsx(styles["track"])}>
                            <div
                                style={{
                                    inlineSize: `${percentage}%`,
                                }}
                                className={clsx(styles["active"])}
                            />

                            <div className={clsx(styles["in-active"])} />
                        </div>
                    </>
                );
            }}
        </ProgressBar>
    );
};
