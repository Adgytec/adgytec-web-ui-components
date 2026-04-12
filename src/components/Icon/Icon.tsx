import clsx from "clsx";
import styles from "./icon.module.css";
import type { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({
    size = "medium",
    weight,
    fill = false,
    withText = false,
    icon,
}) => {
    return (
        <span
            className={clsx(
                "material-symbols-outlined",
                styles["icon"],
                styles[size],
                fill && styles["fill"],
                weight && styles[weight],
                withText && styles["with-text"]
            )}
        >
            {icon}
        </span>
    );
};
