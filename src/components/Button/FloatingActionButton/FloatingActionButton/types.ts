import type { LucideIcon } from "lucide-react";
import type { FABBaseProps } from "../core";

export interface FloatingActionButtonProps
    extends Omit<FABBaseProps, "children"> {
    icon: LucideIcon;
}
