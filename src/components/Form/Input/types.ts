import type {
  TextFieldProps,
  InputProps as AriaInputProps,
  LabelProps,
  FieldErrorProps,
} from "react-aria-components";

export interface InputProps {
  label?: string;
  textFieldProps?: TextFieldProps;
  inputProps?: AriaInputProps;
  labelProps?: LabelProps;
  fieldErrorProps?: FieldErrorProps;
}
