import type { ReactNode } from "react";
import type {
    CheckboxGroupProps as AriaCheckboxGroupProps,
    CheckboxProps as AriaCheckboxProps,
    ValidationResult,
} from "react-aria-components";

export type CheckboxLabelPlacement = "start" | "end";

export interface CheckboxGroupProps
    extends Omit<AriaCheckboxGroupProps, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    children?: ReactNode;
    checkboxItemsGap?: number;
    labelPlacement?: CheckboxLabelPlacement;
}

export interface CheckboxProps extends AriaCheckboxProps {
    labelPlacement?: CheckboxLabelPlacement;
}
