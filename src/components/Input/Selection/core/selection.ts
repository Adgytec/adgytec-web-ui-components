import type { ReactNode } from "react";
import type { ValidationResult } from "react-aria-components";
import type { SelectionLabelPlacement } from "./labelPlacement";

export interface CoreSelectionGroupProps {
    /** The accessible label displayed above or alongside the input control. */
    label?: ReactNode;

    /** Informative supporting text displayed below the input. */
    description?: ReactNode;

    /**
     * Error message content displayed when the input fails validation.
     * Can be static content or a render function receiving the current {@link ValidationResult}.
     */
    errorMessage?: ReactNode | ((validation: ValidationResult) => ReactNode);

    labelPlacement?: SelectionLabelPlacement;
}
