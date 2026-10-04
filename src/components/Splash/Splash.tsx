import clsx from "clsx";
import styles from "./splash.module.css";
import type { SplashProps } from "./types";

/**
 * Material Design ripple splash animation element.
 *
 * Rendered absolutely inside an `overflow: clip` container at the press position coordinates `(x, y)`
 * and expands outward, dissolving when the CSS keyframe animation completes.
 */
export const Splash: React.FC<SplashProps> = ({ id, x, y, onAnimationEnd }) => {
    return (
        <div
            key={`${id}`}
            className={clsx(styles["splash"])}
            style={{
                insetInlineStart: x,
                insetBlockStart: y,
                translate: "-50% -50%",
            }}
            onAnimationEnd={onAnimationEnd}
        />
    );
};
