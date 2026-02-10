import type { ErrorProps } from "./types";
import styles from "./error.module.css";
import clsx from "clsx";

export const Error = ({ children }: ErrorProps) => {
    return <p className={clsx(styles["error"])}>{children}</p>;
};
