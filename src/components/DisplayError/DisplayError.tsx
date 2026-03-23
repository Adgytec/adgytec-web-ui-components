import clsx from "clsx";
import styles from "./error.module.css";
import type { DisplayErrorProps } from "./types";

export const DisplayError = ({ children }: DisplayErrorProps) => {
    return <p className={clsx(styles["error"])}>{children}</p>;
};
