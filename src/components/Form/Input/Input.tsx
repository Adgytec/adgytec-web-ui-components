import { TextField, Input as AriaInput } from "react-aria-components";
import type { InputProps } from "./types";
import { Label } from "@/components/Form/Label/Label";
import styles from "./input.module.css";
import { FieldError } from "@/components/Form/FieldError/FieldError.tsx";

export const Input = ({
  label,
  textFieldProps,
  inputProps,
  labelProps,
  fieldErrorProps,
}: InputProps) => {
  return (
    <TextField
      {...textFieldProps}
      className={textFieldProps?.className ?? styles["input"]}
    >
      {label && <Label {...labelProps}>{label}</Label>}
      <AriaInput
        {...inputProps}
        className={inputProps?.className ?? styles["editor"]}
      />
      <FieldError {...fieldErrorProps} />
    </TextField>
  );
};
