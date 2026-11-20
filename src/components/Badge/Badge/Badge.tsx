import clsx from "clsx";
import { typography } from "@/utils";
import styles from "./badge.module.css";
import { type BadgeProps, MAX_OVERFLOW_AT } from "./types";

export const Badge: React.FC<BadgeProps> = ({
    count,
    className,
    overflowAt = 1000,
    ...props
}) => {
    const usableOverflowAt = Math.min(overflowAt, MAX_OVERFLOW_AT);
    let label: string | undefined;
    if (count) {
        if (count < usableOverflowAt) {
            label = String(count);
        } else {
            label = `${String(usableOverflowAt - 1)}+`;
        }
    }

    return (
        <span
            className={clsx(styles["badge"], typography.labelSmall, className)}
            data-count={count === undefined ? undefined : true}
            {...props}
        >
            {label && <span className={clsx(styles["label"])}>{label}</span>}
        </span>
    );
};
