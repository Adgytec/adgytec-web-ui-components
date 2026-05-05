import type {
    ComboBoxProps as AriaComboBoxProps,
    ValidationResult,
} from "react-aria-components";

export interface ComboBoxProps<
    T extends object,
    M extends "single" | "multiple" = "single",
> extends AriaComboBoxProps<T, M> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    showDescriptionOnInvalid?: boolean;
}
