import type { ReactNode } from "react";
import type { ColorTheme } from "@/utils/types";

export interface TooltipProps {
  children: ReactNode;
  description?: string;
  theme?: ColorTheme;
  delay?: number;
  closeDelay?: number;
}
