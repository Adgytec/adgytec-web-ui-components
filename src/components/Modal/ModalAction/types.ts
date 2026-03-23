import type { ReactElement, ReactNode } from "react";
import type { DialogRenderProps } from "react-aria-components";
import type { ButtonVariantProps } from "@/components/Button/ButtonBase/types";

export type ModalActionPlacement = "start" | "end";

export interface ModalActionProps {
    trigger: ReactElement<ButtonVariantProps>;
    header?: string;
    children: ReactNode;
    actionPlacement?: ModalActionPlacement;
    modalAction:
        | ReactElement<ButtonVariantProps>
        | ((opts: DialogRenderProps) => ReactElement<ButtonVariantProps>);
    closeText: string;
    isDismissable?: boolean;
    isKeyboardDismissableDisabled?: boolean;
}
