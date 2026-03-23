import type {
    TextAreaProps as AriaTextAreaProps,
    FieldErrorProps,
    LabelProps,
    TextFieldProps,
} from "react-aria-components";

export interface TextAreaProps {
    label?: string;
    textFieldProps?: TextFieldProps;
    textAreaProps?: AriaTextAreaProps;
    labelProps?: LabelProps;
    fieldErrorProps?: FieldErrorProps;
}
