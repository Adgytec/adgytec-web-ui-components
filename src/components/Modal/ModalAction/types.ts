import type { ReactElement, ReactNode } from "react";
import type { ButtonVariantProps } from "@/components/Button/ButtonBase/types";
import type { DialogRenderProps } from "react-aria-components";

export enum ModalActionPlacement {
  start = "start",
  end = "end",
}

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
