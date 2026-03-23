import { clsx } from "clsx";
import {
    OverlayArrow,
    TooltipTrigger,
    Tooltip as UnstyledTooltip,
} from "react-aria-components";
import styles from "./tooltip.module.css";
import type { TooltipProps } from "./types";

export const Tooltip = ({
    children,
    description,
    theme = "inverse-surface",
    delay = 250,
    closeDelay = 150,
}: TooltipProps) => {
    if (!description) {
        return children;
    }

    return (
        <TooltipTrigger delay={delay} closeDelay={closeDelay}>
            {children}

            <UnstyledTooltip className={clsx(styles["tooltip"], styles[theme])}>
                <OverlayArrow className={clsx(styles["tooltip-arrow"])}>
                    <svg viewBox="0 0 8 8">
                        <title>Expand</title>
                        <path d="M0 0 L4 4 L8 0" />
                    </svg>
                </OverlayArrow>

                {description}
            </UnstyledTooltip>
        </TooltipTrigger>
    );
};
