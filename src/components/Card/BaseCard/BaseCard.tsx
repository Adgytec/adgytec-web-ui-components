// TODO: unnecessary components
// only handles background color, that too causes issues sometimes
// will be removed client can directly define background color, its easier and give full control
// this also causes conflicting behaviour with Container component and its default padding for smaller devices where background color should be edge to edge

import clsx from "clsx";
import type React from "react";
import styles from "./base-card.module.css";
import type { BaseCardProps } from "./types";

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
