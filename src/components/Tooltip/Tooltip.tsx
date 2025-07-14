import type { TooltipProps } from "./types";
import {
  TooltipTrigger,
  Tooltip as UnstyledTooltip,
  OverlayArrow,
} from "react-aria-components";
import styles from "./tooltip.module.css";
import { ColorTheme } from "../../utils/types";

export const Tooltip = ({
  children,
  description,
  theme = ColorTheme.inverseSurface,
}: TooltipProps) => {
  if (!description) {
    return children;
  }

  return (
    <TooltipTrigger delay={500}>
      {children}

      <UnstyledTooltip className={`${styles["tooltip"]} ${styles[theme]}`}>
        <OverlayArrow className={`${styles["tooltip-arrow"]}`}>
          <svg viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>

        {description}
      </UnstyledTooltip>
    </TooltipTrigger>
  );
};
