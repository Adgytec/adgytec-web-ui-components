import type {
    TextFieldProps as AriaTextFieldProps,
    ValidationResult,
} from "react-aria-components";

export interface TextFieldProps extends Omit<AriaTextFieldProps, "children"> {
    label?: string;
    description?: string;
    placeholder?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
