import type { SplashProps } from "./types";
import styles from "./splash.module.css";
import clsx from "clsx";

export const Splash = ({ id, x, y }: SplashProps) => {
    return (
        <div
            key={`${id}`}
            className={clsx(styles["splash"])}
            style={{
                insetInlineStart: x,
                insetBlockStart: y,
                translate: "-50% -50%",
            }}
        />
    );
};
