import type { ErrorProps } from "./type";
import styles from "./error.module.css";

export const Error = ({ children }: ErrorProps) => {
  return <p className={`${styles["error"]}`}>{children}</p>;
};
