import type { ReactNode } from "react";
import type { ColorTheme } from "@/utils/types";
import type { ImageProps } from "../Image";

export type AvatarSize = "small" | "normal" | "large";

export type AvatarType = "image" | "node";

interface AvatarRootProps {
    size?: AvatarSize;
    label?: string;
    theme?: ColorTheme;
}

interface AvatarWithImage extends AvatarRootProps {
    type: "image";
    image: ImageProps;
    children?: never;
}

interface AvatarWithChildren extends AvatarRootProps {
    type: "children";
    image?: never;
    children: string;
}

export type AvatarProps = AvatarWithImage | AvatarWithChildren;

export interface AvatarBaseProps {
    children: ReactNode;
    size: AvatarSize;
    type: AvatarType;
    theme: ColorTheme;
}
