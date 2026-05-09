import type { ReactNode } from "react";
import type { ValidationResult } from "react-aria-components";

export interface CoreInputProps {
    label?: ReactNode;
    description?: ReactNode;
    errorMessage?: string | ((validation: ValidationResult) => string);
    showDescriptionOnInvalid?: boolean;
}
