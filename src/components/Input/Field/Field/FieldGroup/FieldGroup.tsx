import clsx from "clsx";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import styles from "./fieldGroup.module.css";
import type { FieldGroupProps } from "./types";

/**
 * Composable field wrapper grouping a label, the main input field, and supporting description or error messages.
 *
 * Coordinates accessibility states (`data-invalid`, `data-disabled`, `data-leading`, `data-trailing`)
 * across sub-components according to Material Design 3 guidelines.
 */
export const FieldGroup: React.FC<FieldGroupProps> = ({
    label,
    description,
    errorMessage,
    isInvalid,
    isDisabled,
    hasLeading = false,
    hasTrailing = false,
    className,
    children,
    renderFieldErrorComp = true,
    ...props
}) => {
    const dataAttrs = {
        "data-leading": hasLeading || undefined,
        "data-trailing": hasTrailing || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined,
    };

    return (
        <div
            {...props}
            {...dataAttrs}
            className={clsx(styles["group"], className)}
        >
            {label && <Label className={clsx(styles["label"])}>{label}</Label>}

            {children}

            {!isInvalid && description && (
                <Description className={clsx(styles["supporting-text"])}>
                    {description}
                </Description>
            )}

            <FieldError
                className={clsx(
                    styles["supporting-text"],
                    isDisabled && styles["error-disabled"]
                )}
            >
                {errorMessage}
            </FieldError>
        </div>
    );
};
