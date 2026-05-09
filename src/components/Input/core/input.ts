import type { ReactNode } from "react";
import type { ValidationResult } from "react-aria-components";

export interface CoreInputProps {
    label?: ReactNode;
    description?: ReactNode;
    errorMessage?: ReactNode | ((validation: ValidationResult) => ReactNode);
    showDescriptionOnInvalid?: boolean;
}
