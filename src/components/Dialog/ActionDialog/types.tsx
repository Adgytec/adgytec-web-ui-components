import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import type { DialogProps as AriaDialogProps } from "react-aria-components";

export type ActionDialogDividerPlacement =
    | "none"
    | "all"
    | "after-heading"
    | "before-actions";

export interface ActionDialogProps extends Omit<AriaDialogProps, "className"> {
    heading?: string;
    icon?: LucideIcon;
    actions?: ReactElement[];
    divider?: ActionDialogDividerPlacement;
}
