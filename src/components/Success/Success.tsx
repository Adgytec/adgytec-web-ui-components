import type { SuccessProps } from "./types";
import styles from "./success.module.css";

export const Success = ({ children }: SuccessProps) => {
  return <p className={`${styles["success"]}`}>{children}</p>;
};
