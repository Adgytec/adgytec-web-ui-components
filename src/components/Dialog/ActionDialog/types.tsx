import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import type { DialogProps as AriaDialogProps } from "react-aria-components";

export interface ActionDialogProps extends Omit<AriaDialogProps, "className"> {
    heading?: string;
    icon?: LucideIcon;
    actions?: ReactElement[];
}
