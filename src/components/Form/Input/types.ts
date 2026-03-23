import type {
    InputProps as AriaInputProps,
    FieldErrorProps,
    LabelProps,
    TextFieldProps,
} from "react-aria-components";

export interface InputProps {
    label?: string;
    textFieldProps?: TextFieldProps;
    inputProps?: AriaInputProps;
    labelProps?: LabelProps;
    fieldErrorProps?: FieldErrorProps;
}
