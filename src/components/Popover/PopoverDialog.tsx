import { Dialog, DialogTrigger } from "react-aria-components";
import type { PopoverDialogProps } from "./types";
import { Popover } from "./Popover";

export const PopoverDialog = ({
  trigger,
  popoverProps,
  dialogTriggerProps,
  ...dialogProps
}: PopoverDialogProps) => {
  return (
    <DialogTrigger {...dialogTriggerProps}>
      {trigger}

      <Popover {...popoverProps}>
        <Dialog {...dialogProps} />
      </Popover>
    </DialogTrigger>
  );
};
