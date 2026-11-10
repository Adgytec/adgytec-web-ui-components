import clsx from "clsx";
import styles from "./loadingIndicator.module.css";
import {
    DefaultLoadingIndicatorSize,
    getUsableIndicatorSize,
    type LoadingIndicatorProps,
} from "./types";

// all shapes svg are from beercss
// https://github.com/beercss/beercss/blob/main/docs/SHAPE.md
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
