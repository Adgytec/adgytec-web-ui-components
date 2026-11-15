import clsx from "clsx";
import { ProgressBar } from "react-aria-components";
import { Sine } from "@/components/Wave";
import styles from "./linearProgressIndicator.module.css";
import {
    type LinearProgressIndicatorProps,
    LinearProgressIndicatorSineWaveProps,
} from "./types";

/**
 * Linear progress indicator based on Material 3 design specifications with optional animated wavy active indicator.
 *
 * Features:
 * - **Determinate Mode**: Displays progress from 0% to 100%. When `wavy={true}` (default), renders an animated sine wave along the active progress track. When `wavy={false}`, renders a smooth flat active bar.
 * - **Indeterminate Mode**: Indicates ongoing background activity with two moving bars. **In indeterminate mode, there are no waves** (the indicator renders flat animated bar segments regardless of the `wavy` prop).
 * - **Thickness Variants**: Supports `"default"` (4px) and `"thick"` (8px).
 *
 * @example
 * ```tsx
 * import { LinearProgressIndicator } from "@adgytec/web-ui-components";
 *
 * // Determinate progress (e.g. 40%) with wave animation
 * <LinearProgressIndicator value={40} aria-label="Loading data" />
 *
 * // Flat determinate progress (no waves)
 * <LinearProgressIndicator value={40} wavy={false} />
 *
 * // Indeterminate progress (note: in indeterminate mode there are no waves)
 * <LinearProgressIndicator isIndeterminate aria-label="Loading..." />
 *
 * // Thick variant with label
 * <LinearProgressIndicator value={70} thickness="thick">
 *     {({ percentage }) => <span>Progress: {percentage}%</span>}
 * </LinearProgressIndicator>
 * ```
 */
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
