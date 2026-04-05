// TODO: similar to DisplayError component
// can also convert them to single component with type prop telling error or success, can later include warning too

import clsx from "clsx";
import styles from "./displaySuccess.module.css";
import type { DisplaySuccessProps } from "./types";

export const DisplaySuccess = ({ children }: DisplaySuccessProps) => {
    return <p className={clsx(styles["success"])}>{children}</p>;
};
