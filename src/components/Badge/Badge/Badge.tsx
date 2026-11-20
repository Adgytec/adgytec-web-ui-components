import clsx from "clsx";
import { typography } from "@/utils";
import styles from "./badge.module.css";
import type { BadgeProps } from "./types";

export const Badge: React.FC<BadgeProps> = ({ count, className, ...props }) => {
    return (
        <span
            className={clsx(styles["badge"], typography.labelSmall, className)}
            data-count={count === undefined ? undefined : true}
            {...props}
        >
            {count}
        </span>
    );
};
