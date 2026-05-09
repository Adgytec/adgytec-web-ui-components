import type { CSSProperties, ReactNode } from "react";
import type { Toolbar } from "react-aria-components";
import type { ButtonSize, SplitButtonColor } from "../../core";

export interface SplitButtonProps
    extends Omit<
        React.ComponentPropsWithRef<typeof Toolbar>,
        "orientation" | "children" | "className" | "style"
    > {
    color?: SplitButtonColor;
    size?: ButtonSize;

    isPending?: boolean;
    isDisabled?: boolean;

    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
