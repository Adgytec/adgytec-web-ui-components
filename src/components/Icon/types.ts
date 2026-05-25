import type { LucideIcon } from "lucide-react";

export type IconSize =
    | "dense"
    | "standard"
    | "medium"
    | "large"
    | "extra-large";

export interface IconProps
    extends Omit<React.ComponentPropsWithRef<LucideIcon>, "size"> {
    icon: LucideIcon;
    size?: IconSize | number;
    withText?: boolean;
}
