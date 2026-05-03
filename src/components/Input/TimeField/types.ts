import type {
    TimeFieldProps as AriaTimeFieldProps,
    TimeValue,
    ValidationResult,
} from "react-aria-components";

export interface TimeFieldProps<T extends TimeValue>
    extends Omit<AriaTimeFieldProps<T>, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
