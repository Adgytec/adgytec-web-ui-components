import { clsx } from "clsx";
import { Icon } from "@/components/Icon";
import { CardIconSize } from "../Card/types";
import styles from "./cardIcon.module.css";

/**
 * Props for the {@link CardIcon} component.
 * Extends {@link Icon} props while omitting `size` and `withText`, which are pre-configured
 * specifically for cards.
 */
export interface CardIconProps
    extends Omit<
        React.ComponentPropsWithRef<typeof Icon>,
        "size" | "withText"
    > {}

/**
 * A styled icon component designed specifically for placement inside a {@link Card}.
 *
 * Automatically standardizes the icon size to 24px ({@link CardIconSize}) and applies
 * theme-aware icon coloring (`--_md-card-icon-color`).
 *
 * @example
 * ```tsx
 * import { Card, CardIcon } from '@adgytec/web-ui-components';
 * import { Sparkles } from 'lucide-react';
 *
 * <Card>
 *     <CardIcon icon={Sparkles} />
 *     <span>Featured Content</span>
 * </Card>
 * ```
 */
export const CardIcon: React.FC<CardIconProps> = ({ icon, ...props }) => {
    return (
        <Icon
            icon={icon}
            size={CardIconSize}
            className={clsx(styles["icon"])}
            {...props}
        />
    );
};
