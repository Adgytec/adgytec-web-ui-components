import type { ErrorProps } from "./types";
import styles from "./error.module.css";

export const Error = ({ children }: ErrorProps) => {
  return <p className={`${styles["error"]}`}>{children}</p>;
};
