import type { ReactNode } from "react";
import type { ColorTheme } from "@/utils/types";

export type AvatarSize = "small" | "normal" | "large";

export type AvatarProps = {
    children: ReactNode;
    size?: AvatarSize;
    theme?: ColorTheme;
    background?: "inherit" | "default"; // "inherit" lets parent background show through, "default" uses avatar's own background
};

export type AvatarImageProps = {
    src: string;
    alt: string;
};
