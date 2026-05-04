import type { ReactNode } from "react";
import type {
    RadioGroupProps as AriaRadioGroupProps,
    RadioProps as AriaRadioProps,
    ValidationResult,
} from "react-aria-components";

export type RadioLabelPlacement = "start" | "end";

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    children?: ReactNode;
    radioItemsGap?: number;
    labelPlacement?: RadioLabelPlacement;
    containerStateLayer?: boolean;
}

export interface RadioProps extends AriaRadioProps {
    labelPlacement?: RadioLabelPlacement;
    containerStateLayer?: boolean;
}
