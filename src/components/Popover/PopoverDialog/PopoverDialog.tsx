import { Dialog, DialogTrigger } from "react-aria-components";
import type { PopoverDialogProps } from "@/components/Popover/PopoverBase/types";
import { Popover } from "@/components/Popover/PopoverBase";

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
