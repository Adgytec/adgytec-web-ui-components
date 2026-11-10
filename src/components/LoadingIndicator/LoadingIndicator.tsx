import clsx from "clsx";
import styles from "./loadingIndicator.module.css";
import {
    DefaultLoadingIndicatorSize,
    getUsableIndicatorSize,
    type LoadingIndicatorProps,
} from "./types";

/**
 * A circular loading indicator component displaying an animated shape-morphing indicator.
 *
 * Implements the Material Design 3 shape-morphing loading indicator using an SVG mask
 * and supports uncontained (`"default"`) and `"contained"` variants.
 *
 * All shape SVGs are from Beer CSS:
 * https://github.com/beercss/beercss/blob/main/docs/SHAPE.md
 *
 * Configurable CSS tokens:
 * - `--md-loading-indicator-active-indicator-color`: Color of the active morphing indicator.
 * - `--md-loading-indicator-container-color`: Background color of the container (active when `containment="contained"`).
 *
 * @see https://github.com/beercss/beercss/blob/main/docs/SHAPE.md
 *
 * @example
 * ```tsx
 * import { LoadingIndicator } from "@adgytec/web-ui-components";
 *
 * // Default uncontained loading indicator (48px)
 * <LoadingIndicator />
 *
 * // Contained loading indicator with custom size
 * <LoadingIndicator size={32} containment="contained" />
 * ```
 */
export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
    containment = "default",
    size = DefaultLoadingIndicatorSize,
}) => {
    const usableIndicatorSize = getUsableIndicatorSize(size);
    return (
        <span
            style={
                {
                    "--_md-loading-indicator-container-size": `calc(${usableIndicatorSize} * var(--dp, 1px))`,
                } as React.CSSProperties
            }
            className={clsx(styles["container"])}
            data-containment={containment}
        >
            <span className={clsx(styles["indicator"])}></span>
        </span>
    );
};
