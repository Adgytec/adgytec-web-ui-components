import type { ReactNode } from "react";
import type { ValidationResult } from "react-aria-components";

/**
 * Shared input wrapper props providing accessible labeling, descriptions, and error feedback.
 */
export interface CoreInputProps {
    /** The accessible label displayed above or alongside the input control. */
    label?: ReactNode;

    /** Informative supporting text displayed below the input. */
    description?: ReactNode;

    /**
     * Error message content displayed when the input fails validation.
     * Can be static content or a render function receiving the current {@link ValidationResult}.
     */
    errorMessage?: ReactNode | ((validation: ValidationResult) => ReactNode);

    /**
     * Whether to continue displaying the {@link description} supporting text even when
     * the input is invalid and rendering an error message.
     *
     * @default false
     */
    showDescriptionOnInvalid?: boolean;
}
