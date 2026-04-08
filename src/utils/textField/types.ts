import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";

export type TextFieldProps = AriaTextFieldProps & {
    label?: string;
    description?: string;
    placeholder?: string;
};
