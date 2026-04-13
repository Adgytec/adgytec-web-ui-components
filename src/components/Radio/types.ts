import type { ReactNode } from "react";
import type {
    RadioGroupProps as AriaRadioGroupProps,
    RadioProps as AriaRadioProps,
    ValidationResult,
} from "react-aria-components";

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    children?: ReactNode;
}

export interface RadioProps extends Omit<AriaRadioProps, "children"> {
    childrend?: ReactNode;
}
