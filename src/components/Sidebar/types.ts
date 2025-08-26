import type { ReactNode, ReactElement } from "react";
import type { DialogRenderProps } from "react-aria-components";
import { type ButtonVariantProps } from "@/components/Button/ButtonBase";
import type { CardBackground } from "../Card/BaseCard";

export enum SidebarPosition {
  inlineStart = "inline-start",
  inlineEnd = "inline-end",
  blockStart = "block-start",
  blockEnd = "block-end",
}

export enum SidebarSize {
  full = "full",
  threeQuarters = "three-quarters",
  half = "half",
  quarter = "quarter",
}

export interface SidebarProps {
  trigger: ReactElement<ButtonVariantProps>;
  children: ReactNode | ((opts: DialogRenderProps) => ReactNode);
  sidebarPosition?: SidebarPosition;
  sidebarSize?: SidebarSize;
  isDismissable?: boolean;
  isKeyboardDismissableDisabled?: boolean;
  cardBackground?: CardBackground;
}
