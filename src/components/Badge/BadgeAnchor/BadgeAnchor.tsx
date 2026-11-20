import { clsx } from "clsx";
import styles from "./badgeAnchor.module.css";
import type { BadgeAnchorProps } from "./types";

/**
 * An anchoring wrapper component for positioning a [`Badge`](src/components/Badge/Badge/Badge.tsx)
 * relative to an element such as an icon, button, or avatar.
 *
 * Uses CSS absolute positioning to align the badge at the top-end (top-right in LTR) corner
 * with a `50% -50%` translation offset. The badge is wrapped with `aria-hidden` so that screen readers
 * are not disrupted by raw badge text, allowing accessible descriptions to be handled on the parent control.
 *
 * @example
 * ```tsx
 * import { Badge, BadgeAnchor } from "@adgytec/web-ui-components";
 * import { Bell } from "lucide-react";
 *
 * <BadgeAnchor badge={<Badge count={3} />}>
 *     <Bell />
 * </BadgeAnchor>
 * ```
 */
export const BadgeAnchor: React.FC<BadgeAnchorProps> = ({
    badge,
    className,
    children,
    ...props
}) => {
    return (
        <span className={clsx(styles["anchor"], className)} {...props}>
            {children}

            {badge && (
                <span className={clsx(styles["badge"])} aria-hidden>
                    {badge}
                </span>
            )}
        </span>
    );
};
