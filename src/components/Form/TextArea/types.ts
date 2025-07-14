import type {
  TextFieldProps,
  TextAreaProps as AriaTextAreaProps,
  LabelProps,
  FieldErrorProps,
} from "react-aria-components";

export interface TextAreaProps {
  label?: string;
  textFieldProps?: TextFieldProps;
  textAreaProps?: AriaTextAreaProps;
  labelProps?: LabelProps;
  fieldErrorProps?: FieldErrorProps;
}
