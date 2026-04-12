import type { LucideIcon, LucideProps } from "lucide-react";

export type IconSize =
    | "dense"
    | "standard"
    | "medium"
    | "large"
    | "extra-large";

export type IconProps = Omit<LucideProps, "size"> & {
    icon: LucideIcon;
    size?: IconSize | number;
    withText?: boolean;
};
