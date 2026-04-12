import type { LucideIcon } from "lucide-react";

export type IconSize =
    | "dense"
    | "standard"
    | "medium"
    | "large"
    | "extra-large";

// lucide icon auto handle stroke based on icon size
export type IconProps = {
    size?: IconSize;
    Icon: LucideIcon;
    fill?: boolean;
};
