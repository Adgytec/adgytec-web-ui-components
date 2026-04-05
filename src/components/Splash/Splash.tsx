// TODO: styles radius

import clsx from "clsx";
import styles from "./splash.module.css";
import type { SplashProps } from "./types";

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
