import clsx from "clsx";
import { typography } from "@/utils";
import styles from "./badge.module.css";
import { type BadgeProps, MAX_OVERFLOW_AT } from "./types";

/**
 * Material Design 3 Badge component.
 *
 * Displays small visual status indicators or notification counts on or near related elements.
 * Supports two display modes:
 * - **Dot Badge**: Renders as a compact 6px indicator when `count` is omitted (`undefined`).
 * - **Numeric Badge**: Renders as an expressive pill badge displaying the count or an overflow label (e.g. `999+`) when `count` is provided.
 *
 * Configurable CSS tokens:
 * - `--md-badge-background`: Background color of the badge (`var(--md-sys-color-error)`).
 * - `--md-badge-color`: Text and icon color inside the badge (`var(--md-sys-color-on-error)`).
 *
 * @example
 * ```tsx
 * import { Badge } from "@adgytec/web-ui-components";
 *
 * // Small dot badge
 * <Badge />
 *
 * // Numeric badge
 * <Badge count={5} />
 *
 * // Numeric badge with custom overflow threshold (renders "99+")
 * <Badge count={100} overflowAt={100} />
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
    count,
    className,
    overflowAt = 1000,
    ...props
}) => {
    const usableOverflowAt = Math.min(overflowAt, MAX_OVERFLOW_AT);
    let label: string | undefined;
    if (count) {
        if (count < usableOverflowAt) {
            label = String(count);
        } else {
            label = `${String(usableOverflowAt - 1)}+`;
        }
    }

    return (
        <span
            className={clsx(styles["badge"], typography.labelSmall, className)}
            data-count={count ? true : undefined}
            {...props}
            data-badge
        >
            {label && <span className={clsx(styles["label"])}>{label}</span>}
        </span>
    );
};
