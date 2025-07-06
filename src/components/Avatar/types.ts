import type { ReactNode } from "react";

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
}

export interface AvatarBaseProps {
  children: ReactNode;
  size: AvatarSize;
  type: AvatarType;
}
