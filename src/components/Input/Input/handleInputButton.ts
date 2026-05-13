import { cloneElement, isValidElement, type ReactNode } from "react";
import { InputButton } from "./InputButton";

type InputButtonProps = React.ComponentProps<typeof InputButton> & {
    "data-invalid"?: boolean;
};

export function addStateAttrsToInputButton({
    node,
    isInvalid,
    isDisabled,
}: {
    node: ReactNode;
    isInvalid: boolean;
    isDisabled: boolean;
}) {
    if (!isValidElement<InputButtonProps>(node)) {
        return node;
    }

    if (node.type !== InputButton) return node;

    return cloneElement(node, {
        "data-invalid": isInvalid || undefined,
        isDisabled,
    });
}
