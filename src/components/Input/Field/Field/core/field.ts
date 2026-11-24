import type { PointerEvent, ReactNode } from "react";
import { cloneElement, isValidElement } from "react";
import type { ValidationResult } from "react-aria-components";
import { typography } from "@/utils";
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
    /** Element, button, or icon placed at the start of the field container. */
    leading?: ReactNode;

    /** Element, button, or icon placed at the end of the field container. */
    trailing?: ReactNode;

    /**
     * Visual styling variant of the field container.
     * @default "filled"
     */
    variant?: FieldVariant;
}

type FieldButtonElementProps = React.ComponentProps<typeof FieldButton> & {
    "data-invalid"?: boolean;
};

/**
 * Injects input validation and disabled states into child {@link FieldButton} elements.
 *
 * @param params - Configuration containing `node`, `isInvalid`, and `isDisabled`.
 * @returns Cloned element with attached state data attributes, or the original node if not a FieldButton.
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

/** Class name to unset native input styles. */
export const UnsetFieldStyles = styles["unset"];

/** Class name applying field editor color tokens. */
export const FieldEditorColorStyles = styles["editor-color"];

/** Typography preset applied to field editors and segments. */
export const FieldTypography = typography.bodyLarge;

/** Class name applying auto-sizing layout to field containers. */
export const FieldAutoSizeStyles = styles["field-auto-size"];

/**
 * Creates a pointer-down event handler that focuses the target input ref when clicking anywhere on the container.
 * Ignores clicks originating directly from interactive elements like buttons and links.
 *
 * @param ref - Ref to the input or textarea element to focus.
 */
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
