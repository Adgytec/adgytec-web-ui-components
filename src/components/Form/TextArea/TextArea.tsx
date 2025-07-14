import type { TextAreaProps } from "./types";
import { TextField, TextArea as AriaTextArea } from "react-aria-components";
import Label from "../Label/Label";
import FieldError from "../FieldError/FieldError";
import styles from "./textarea.module.css";

export const TextArea = ({
  label,
  textFieldProps,
  textAreaProps,
  labelProps,
  fieldErrorProps,
}: TextAreaProps) => {
  return (
    <TextField
      {...textFieldProps}
      className={textFieldProps?.className ?? styles["textarea"]}
    >
      {label && <Label {...labelProps}>{label}</Label>}
      <AriaTextArea
        {...textAreaProps}
        className={textAreaProps?.className ?? styles["editor"]}
      />
      <FieldError {...fieldErrorProps} />
    </TextField>
  );
};
