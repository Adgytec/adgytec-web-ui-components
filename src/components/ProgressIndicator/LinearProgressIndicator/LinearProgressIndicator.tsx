import clsx from "clsx";
import { composeRenderProps, ProgressBar } from "react-aria-components";
import styles from "./linearProgressIndicator.module.css";
import { DeterminateTrack, IndeterminateTrack } from "./Track";
import type { LinearProgressIndicatorProps } from "./types";

/**
 * Linear progress indicator based on Material 3 design specifications with optional animated wavy active indicator.
 *
 * Features:
 * - **Determinate Mode**: Displays progress from 0% to 100%. When `wavy={true}` (default), renders an animated
 *   sine wave along the active progress track with boundary amplitude fading. When `wavy={false}`, renders a smooth flat active bar.
 * - **Indeterminate Mode**: Indicates ongoing background activity with two moving bars following Material 3 motion curves.
 *   Supports animated sine waves when `wavy={true}` or flat bars when `wavy={false}`.
 * - **Thickness Variants**: Supports `"default"` (4px) and `"thick"` (8px).
 * - **Accessibility**: Built on [React Aria Components ProgressBar](https://react-spectrum.adobe.com/react-aria/ProgressBar.html),
 *   providing full ARIA semantics (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and accessible labeling).
 *
 * Configurable CSS tokens:
 * - `--md-linear-progress-indicator-active-color`: Active progress bar and stop indicator color (`var(--md-sys-color-primary)`).
 * - `--md-linear-progress-indicator-track-color`: Inactive background track color (`var(--md-sys-color-secondary-container)`).
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
 * // Indeterminate progress with waves
 * <LinearProgressIndicator isIndeterminate aria-label="Loading..." />
 *
 * // Indeterminate progress without waves (flat bars)
 * <LinearProgressIndicator isIndeterminate wavy={false} aria-label="Loading..." />
 *
 * // Thick variant with label
 * <LinearProgressIndicator value={70} thickness="thick">
 *     {({ percentage }) => <span>Progress: {percentage}%</span>}
 * </LinearProgressIndicator>
 * ```
 */
export const LinearProgressIndicator: React.FC<
    LinearProgressIndicatorProps
> = ({ thickness = "default", wavy = true, ...props }) => {
    return (
        <ProgressBar
            {...props}
            data-thickness={thickness}
            className={composeRenderProps(props.className, (className) => {
                return clsx(styles["indicator"], className);
            })}
        >
            {composeRenderProps(props.children, (children, renderProps) => {
                const { percentage = 0, isIndeterminate } = renderProps;

                return (
                    <>
                        {children}

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
            })}
        </ProgressBar>
    );
};
