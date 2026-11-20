import { clsx } from "clsx";
import styles from "./badgeAnchor.module.css";
import type { BadgeAnchorProps } from "./types";

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
