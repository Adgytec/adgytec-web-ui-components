import type { ReactElement } from "react";
import type { ButtonVariantProps } from "../../Button/types";
import type {
  DialogProps,
  DialogTriggerProps,
  ModalOverlayProps,
} from "react-aria-components";

export interface ModalBaseProps extends DialogProps {
  trigger: ReactElement<ButtonVariantProps>;
  modalOverlayProps?: Omit<ModalOverlayProps, "children">;
  dialogTriggerProps?: Omit<DialogTriggerProps, "children">;
  modalProps?: Omit<React.RefAttributes<HTMLDivElement>, "children">;
}
