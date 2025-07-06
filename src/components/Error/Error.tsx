import type { ErrorProps } from "./type";
import styles from "./error.module.css";

const Error = ({ children }: ErrorProps) => {
  return <p className={`${styles["error"]}`}>{children}</p>;
};

export default Error;
