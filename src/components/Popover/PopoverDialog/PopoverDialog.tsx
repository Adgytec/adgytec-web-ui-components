import { Dialog, DialogTrigger } from "react-aria-components";
import { Popover } from "@/components/Popover/PopoverBase";
import type { PopoverDialogProps } from "@/components/Popover/PopoverBase/types";

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
