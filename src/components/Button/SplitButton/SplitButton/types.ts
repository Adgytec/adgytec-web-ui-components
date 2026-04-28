import type { ReactNode } from "react";
import type { ToolbarProps as AriaToolbarProps } from "react-aria-components";
import type { ButtonSize, SplitButtonColor } from "../../core";

export interface SplitButtonProps
    extends Omit<
        AriaToolbarProps,
        "orientation" | "children" | "className" | "style"
    > {
    color?: SplitButtonColor;
    size?: ButtonSize;

    isPending?: boolean;
    isDisabled?: boolean;

    children?: ReactNode;
}
