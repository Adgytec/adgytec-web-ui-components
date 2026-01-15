import type { ReactNode, ReactElement } from "react";
import type { DialogRenderProps } from "react-aria-components";
import { type ButtonVariantProps } from "@/components/Button/ButtonBase";
import type { CardBackground } from "../Card/BaseCard";

export type SidebarPosition =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end";

export type SidebarSize = "full" | "three-quarters" | "half" | "quarter";

export interface SidebarProps {
  trigger: ReactElement<ButtonVariantProps>;
  children: ReactNode | ((opts: DialogRenderProps) => ReactNode);
  sidebarPosition?: SidebarPosition;
  sidebarSize?: SidebarSize;
  isDismissable?: boolean;
  isKeyboardDismissableDisabled?: boolean;
  cardBackground?: CardBackground;
}
