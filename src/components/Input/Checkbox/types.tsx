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
    showDescriptionOnInvalid?: boolean;
    children?: ReactNode;
    checkboxItemsGap?: number;
    labelPlacement?: CheckboxLabelPlacement;
    containerStateLayer?: boolean;
}

export interface CheckboxProps extends AriaCheckboxProps {
    labelPlacement?: CheckboxLabelPlacement;
    containerStateLayer?: boolean;
}
