import { cloneElement, isValidElement, type ReactNode } from "react";
import { InputButton } from "./InputButton";

type InputButtonElementProps = React.ComponentProps<typeof InputButton> & {
    "data-invalid"?: boolean;
};

/**
 * Injects input validation and disabled states into child {@link InputButton} elements.
 *
 * @param params - Configuration containing `node`, `isInvalid`, and `isDisabled`.
 * @returns Cloned element with attached state data attributes, or the original node if not an InputButton.
 */
export function addStateAttrsToInputButton({
    node,
    isInvalid,
    isDisabled,
}: {
    node: ReactNode;
    isInvalid: boolean;
    isDisabled: boolean;
}) {
    if (!isValidElement<InputButtonElementProps>(node)) {
        return node;
    }

    if (node.type !== InputButton) return node;

    return cloneElement(node, {
        "data-invalid": isInvalid || undefined,
        isDisabled,
    });
}
