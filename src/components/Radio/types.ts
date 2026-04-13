import type { ReactNode } from "react";
import type {
    RadioGroupProps as AriaRadioGroupProps,
    ValidationResult,
} from "react-aria-components";

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    children?: ReactNode;
}
