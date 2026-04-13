import type { ReactNode } from "react";
import type {
    CheckboxGroupProps as AraiaCheckboxGroupProps,
    ValidationResult,
} from "react-aria-components";

export interface CheckboxGroupProps
    extends Omit<AraiaCheckboxGroupProps, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    children?: ReactNode;
}
