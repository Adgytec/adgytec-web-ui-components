import type {
    SelectProps as AriaSelectProps,
    ValidationResult,
} from "react-aria-components";

export interface SelectProps<
    T extends object,
    M extends "single" | "multiple" = "single",
> extends AriaSelectProps<T, M> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    showDescriptionOnInvalid?: boolean;
}
