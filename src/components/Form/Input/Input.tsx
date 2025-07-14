import { TextField, Input as AriaInput } from "react-aria-components";
import type { InputProps } from "./types";
import Label from "../Label/Label";
import styles from "./input.module.css";
import FieldError from "../FieldError/FieldError.tsx";

const Input = ({ label, ...props }: InputProps) => {
  return (
    <TextField {...props} className={styles["input"]}>
      {label && <Label>{label}</Label>}
      <AriaInput className={styles["editor"]} />
      <FieldError />
    </TextField>
  );
};

export default Input;
