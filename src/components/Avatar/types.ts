import type { ReactNode } from "react";
import type { ColorTheme } from "../../utils/types";

export enum AvatarSize {
  small = "small",
  normal = "normal",
  large = "large",
}

export enum AvatarType {
  image = "image",
  node = "node",
}

export interface AvatarProps {
  src?: string;
  children?: ReactNode;
  size?: AvatarSize;
  label?: string;
  theme?: ColorTheme;
}

export interface AvatarBaseProps {
  children: ReactNode;
  size: AvatarSize;
  type: AvatarType;
  theme: ColorTheme;
}
