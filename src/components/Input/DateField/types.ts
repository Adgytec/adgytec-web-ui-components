import type {
    DateFieldProps as AriaDateFieldProps,
    DateValue,
    ValidationResult,
} from "react-aria-components";

export interface DateFieldProps<T extends DateValue>
    extends Omit<AriaDateFieldProps<T>, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    showDescriptionOnInvalid?: boolean;
}
