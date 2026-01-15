import type { ReactNode } from "react";
import type { ColorTheme } from "@/utils/types";

export type AvatarSize = "small" | "normal" | "large";

export type AvatarType = "image" | "node";

interface AvatarRootProps {
  size?: AvatarSize;
  label?: string;
  theme?: ColorTheme;
}

interface AvatarWithSrc extends AvatarRootProps {
  src: string;
  children?: never;
}

interface AvatarWithChildren extends AvatarRootProps {
  src?: never;
  children: string;
}

export type AvatarProps = AvatarWithSrc | AvatarWithChildren;

export interface AvatarBaseProps {
  children: ReactNode;
  size: AvatarSize;
  type: AvatarType;
  theme: ColorTheme;
}
