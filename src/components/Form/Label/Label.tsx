import type { LabelProps } from "./types";
import { Label as UnstyledLabel } from "react-aria-components";
import styles from "./label.module.css";

const Label = ({ children }: LabelProps) => {
  return <UnstyledLabel className={styles["label"]}>{children}</UnstyledLabel>;
};

export default Label;
