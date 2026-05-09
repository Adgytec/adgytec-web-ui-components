import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import type { Dialog } from "react-aria-components";

export interface ActionDialogProps
    extends Omit<React.ComponentPropsWithRef<typeof Dialog>, "className"> {
    heading?: string;
    icon?: LucideIcon;
    actions?: ReactElement[];
}
