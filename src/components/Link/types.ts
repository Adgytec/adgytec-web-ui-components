import type { ColorTheme } from "../../utils/types";
import type { LinkProps as AriaLinkProps } from "react-aria-components";

export interface LinkProps extends AriaLinkProps {
  theme?: ColorTheme;
  description?: string; // this only applies to button links
  underline?: boolean;
}
