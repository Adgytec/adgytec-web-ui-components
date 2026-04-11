import clsx from "clsx";
import styles from "./icon.module.css";
import type { BrandIconProps } from "./types";

export const BrandIcon: React.FC<BrandIconProps> = ({
    size = "medium",
    Icon,
    fill = false,
}) => {
    return (
        <Icon
            className={clsx(
                styles["brand-icon"],
                styles[size],
                fill && styles["fill"]
            )}
        />
    );
};
