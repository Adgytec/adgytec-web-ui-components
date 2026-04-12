// INFO: Icons will be replaced by material symbols
// no need to update these comps
import clsx from "clsx";
import styles from "./icon.module.css";
import type { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({
    size = "medium",
    Icon: LucideIcon,
    fill = false,
}) => {
    return (
        <span
            className={clsx(
                styles["icon"],
                styles[size],
                fill && styles["fill"]
            )}
        >
            <LucideIcon />
        </span>
    );
};
