import { Label as UnstyledLabel, type LabelProps } from "react-aria-components";
import styles from "./label.module.css";

export const Label = (props: LabelProps) => {
  return (
    <UnstyledLabel {...props} className={props.className ?? styles["label"]}>
      {props.children}
    </UnstyledLabel>
  );
};
