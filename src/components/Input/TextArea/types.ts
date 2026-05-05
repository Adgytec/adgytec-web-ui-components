import type {
    TextFieldProps as AriaTextFieldProps,
    ValidationResult,
} from "react-aria-components";

export interface TextAreaProps
    extends Omit<AriaTextFieldProps, "children" | "type"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    showDescriptionOnInvalid?: boolean;
    placeholder?: string;
    showCharacterCount?: boolean;
    rows?: number;
}
