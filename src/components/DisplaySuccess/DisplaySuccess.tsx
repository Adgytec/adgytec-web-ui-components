import clsx from "clsx";
import styles from "./displaySuccess.module.css";
import type { DisplaySuccessProps } from "./types";

export const DisplaySuccess = ({ children }: DisplaySuccessProps) => {
    return <p className={clsx(styles["success"])}>{children}</p>;
};
