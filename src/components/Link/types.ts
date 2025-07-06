import type { ReactNode } from "react";
import type { ColorTheme } from "../../utils/types";

export interface LinkProps {
  children: ReactNode;
  href: string;
  target?: string;
  theme?: ColorTheme;
  disabled?: boolean;
  slot?: string;
}
