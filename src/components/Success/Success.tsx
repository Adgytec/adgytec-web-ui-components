import type { SuccessProps } from "./types";
import styles from "./success.module.css";
import clsx from "clsx";

export const Success = ({ children }: SuccessProps) => {
    return <p className={clsx(styles["success"])}>{children}</p>;
};
