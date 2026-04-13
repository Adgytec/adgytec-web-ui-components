import type { ReactNode } from "react";
import type {
    CheckboxGroupProps as AriaCheckboxGroupProps,
    CheckboxProps as AriaCheckboxProps,
    ValidationResult,
} from "react-aria-components";

export interface CheckboxGroupProps
    extends Omit<AriaCheckboxGroupProps, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    children?: ReactNode;
}

export interface CheckboxProps extends Omit<AriaCheckboxProps, "children"> {
    children?: ReactNode;
}
