import type { TextAreaProps } from "./types";
import { TextField, TextArea as AriaTextArea } from "react-aria-components";
import Label from "../Label/Label";
import FieldError from "../FieldError/FieldError";
import styles from "./textarea.module.css";

const TextArea = ({ label, ...props }: TextAreaProps) => {
  return (
    <TextField {...props} className={props.className ?? styles["textarea"]}>
      {label && <Label>{label}</Label>}
      <AriaTextArea className={styles["editor"]} />
      <FieldError />
    </TextField>
  );
};

export default TextArea;
