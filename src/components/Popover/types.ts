import type { ReactElement } from "react";
import type {
  PopoverProps as AriaPopoverProps,
  DialogProps,
  DialogTriggerProps,
} from "react-aria-components";
import type { ButtonVariantProps } from "../Button";

export interface PopoverDialogProps extends DialogProps {
  trigger: ReactElement<ButtonVariantProps>;
  popoverProps?: Omit<AriaPopoverProps, "children">;
  dialogTriggerProps?: Omit<DialogTriggerProps, "children">;
}
