import type { ReactNode } from "react";
import type { ButtonSize, SplitButtonColor } from "../../core";

export type SplitButtonProps = {
    color?: SplitButtonColor;
    size?: ButtonSize;

    isPending?: boolean;
    isDisabled?: boolean;

    children?: ReactNode;
};
