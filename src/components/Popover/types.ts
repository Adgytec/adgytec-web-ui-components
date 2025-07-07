import type { ReactNode } from "react";
import type { ColorTheme } from "../../utils/types";

export interface PopoverProps {
  children: ReactNode;
  theme?: ColorTheme;
}
