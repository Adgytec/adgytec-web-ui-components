import type React from "react";
import type { BaseCardProps } from "./types";
import styles from "./base-card.module.css";
import clsx from "clsx";

export const BaseCard: React.FC<BaseCardProps> = ({
    background = "solid",
    componentStyle = "normal",
    children,
    ...props
}) => {
    return (
        <div
            {...props}
            className={clsx(
                styles["card"],
                styles[componentStyle],
                styles[background],
                props.className
            )}
            data-card="true"
        >
            {children}
        </div>
    );
};
