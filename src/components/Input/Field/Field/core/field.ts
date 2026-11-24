import type { PointerEvent, ReactNode } from "react";
import { cloneElement, isValidElement } from "react";
import type { ValidationResult } from "react-aria-components";
import { FieldButton } from "../FieldButton/FieldButton";
import styles from "./field.module.css";
import type { FieldVariant } from "./variant";

export interface CoreFieldGroupProps {
    /** The accessible label displayed above or alongside the input control. */
    label?: ReactNode;

    /** Informative supporting text displayed below the input. */
    description?: ReactNode;

    /**
     * Error message content displayed when the input fails validation.
     * Can be static content or a render function receiving the current {@link ValidationResult}.
     */
    errorMessage?: ReactNode | ((validation: ValidationResult) => ReactNode);
}

export interface CoreFieldProps {
    leading?: ReactNode;

    trailing?: ReactNode;

    variant?: FieldVariant;
}

type FieldButtonElementProps = React.ComponentProps<typeof FieldButton> & {
    "data-invalid"?: boolean;
};

/**
 * Injects input validation and disabled states into child {@link InputButton} elements.
 *
 * @param params - Configuration containing `node`, `isInvalid`, and `isDisabled`.
 * @returns Cloned element with attached state data attributes, or the original node if not an InputButton.
 */
export function addStateAttrsToFieldButton({
    node,
    isInvalid,
    isDisabled,
}: {
    node: ReactNode;
    isInvalid: boolean;
    isDisabled: boolean;
}) {
    if (!isValidElement<FieldButtonElementProps>(node)) {
        return node;
    }

    if (node.type !== FieldButton) return node;

    return cloneElement(node, {
        "data-invalid": isInvalid || undefined,
        isDisabled,
    });
}

export const BaseFieldStyles = styles["base"];
export const FieldColorStyles = styles["color"];

export function focusOnPointerDown(ref: React.RefObject<HTMLElement | null>) {
    return (e: PointerEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;

        if (
            ref.current?.contains(target) ||
            target.closest("button, a, [role='button']")
        ) {
            return;
        }

        e.preventDefault();
        ref.current?.focus();
    };
}
