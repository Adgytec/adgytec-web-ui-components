import clsx from "clsx";
import styles from "./icon.module.css";
import type { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({
    size = "medium",
    stroke = "regular",
    Icon,
}) => {
    return (
        <span className={clsx(styles["icon"], styles[size], styles[stroke])}>
            {<Icon />}
        </span>
    );
};
