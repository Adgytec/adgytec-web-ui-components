import type { IconType } from "@icons-pack/react-simple-icons";
import type { LucideIcon } from "lucide-react";

export type IconSize = "small" | "medium" | "large" | "xlarge";
export type IconStroke = "light" | "regular" | "bold";

export type IconProps = {
    size?: IconSize;
    stroke?: IconStroke;
    Icon: LucideIcon;
};

export type BrandIconProps = {
    size?: IconSize;
    Icon: IconType;
};
