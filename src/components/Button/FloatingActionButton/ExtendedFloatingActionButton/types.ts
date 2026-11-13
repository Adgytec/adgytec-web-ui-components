import type { LucideIcon } from "lucide-react";
import type { ButtonIconPlacement } from "../../core";
import type { FABBaseProps } from "../core";

export interface ExtendedFloatingActionButtonProps extends FABBaseProps {
    icon?: LucideIcon;
    iconPlacement?: ButtonIconPlacement;
}
