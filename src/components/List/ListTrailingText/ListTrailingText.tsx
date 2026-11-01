import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./listTrailingText.module.css";

/**
 * Props for the [`ListTrailingText`](src/components/List/ListTrailingText/ListTrailingText.tsx) component.
 */
export interface ListTrailingTextProps
    extends React.ComponentPropsWithRef<typeof Text> {}

/**
 * Trailing metadata or timestamp text component placed at the end of a [`ListItem`](src/components/List/ListItem/ListItem.tsx).
 *
 * Styled with Material Design 3 `labelSmall` typography.
 *
 * @example
 * ```tsx
 * <ListTrailingText>10:45 AM</ListTrailingText>
 * ```
 */
export const ListTrailingText: React.FC<ListTrailingTextProps> = ({
    className,
    ...props
}) => {
    return (
        <Text
            className={clsx(
                styles["trailing"],
                typography.labelSmall,
                className
            )}
            {...props}
        />
    );
};
