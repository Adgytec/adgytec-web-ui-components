import clsx from "clsx";
import styles from "./icon.module.css";
import type { BrandIconProps } from "./types";

export const BrandIcon: React.FC<BrandIconProps> = ({
    size = "medium",
    Icon,
}) => {
    return <Icon className={clsx(styles["brand-icon"], styles[size])} />;
};
