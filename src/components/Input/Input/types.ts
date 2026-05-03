import type { ReactNode } from "react";
import type {
    TextFieldProps as AriaTextFieldProps,
    ValidationResult,
} from "react-aria-components";

export interface InputProps extends Omit<AriaTextFieldProps, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    placeholder?: string;
    editorDir?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    trailing?: ReactNode;
}
