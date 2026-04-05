import type { ReactNode } from "react";
import type { ColorTheme } from "@/utils/types";

export type AvatarSize = "small" | "normal" | "large";

export type AvatarProps = {
    children: ReactNode;
    size?: AvatarSize;
    theme?: ColorTheme;
};

export type AvatarImageProps = {
    image: string;
    alt: string;
};

export type AvatarNodeProps = {
    children: ReactNode;
};
