import clsx from "clsx";
import { Icon } from "@/components/Icon";
import styles from "./listIcon.module.css";

/**
 * Props for the [`ListIcon`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListIcon/ListIcon.tsx) component.
 */
export interface ListIconProps
    extends Omit<
        React.ComponentPropsWithRef<typeof Icon>,
        "size" | "withText"
    > {}

/**
 * Standardized leading icon component for a [`ListItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListItem/ListItem.tsx).
 *
 * Hardcodes a standard 20px dimension while dynamically inheriting the list item's
 * text and interaction state colors.
 *
 * @example
 * ```tsx
 * import { Mail } from "lucide-react";
 *
 * <ListIcon icon={Mail} />
 * ```
 */
export const ListIcon: React.FC<ListIconProps> = ({ className, ...props }) => {
    return (
        <Icon
            className={clsx(styles["icon"], className)}
            size={20}
            {...props}
        />
    );
};
