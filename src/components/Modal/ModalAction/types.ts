import type { ReactElement, ReactNode } from "react";
import type { ButtonVariantProps } from "../../Button/types";
import type { DialogRenderProps } from "react-aria-components";

export enum ModalActionPlacement {
  start = "start",
  end = "end",
}

export enum ModalCloseText {
  close = "Close",
  cancel = "Cancel",
}

export interface ModalActionProps {
  trigger: ReactElement<ButtonVariantProps>;
  header?: string;
  children: ReactNode;
  actionPlacement?: ModalActionPlacement;
  modalAction:
    | ReactElement<ButtonVariantProps>
    | ((opts: DialogRenderProps) => ReactElement<ButtonVariantProps>);
  closeText?: ModalCloseText;
  isDismissable?: boolean;
  isKeyboardDismissableDisabled?: boolean;
}
