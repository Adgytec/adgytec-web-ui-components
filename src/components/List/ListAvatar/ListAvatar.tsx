import clsx from "clsx";
import { typography } from "@/utils";
import styles from "./listAvatar.module.css";

/**
 * Props for the [`ListAvatar`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListAvatar/ListAvatar.tsx) component.
 */
export interface ListAvatarProps extends React.ComponentPropsWithRef<"div"> {}

/**
 * Circular 40px avatar container for user initials or profile images inside a [`ListItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListItem/ListItem.tsx).
 *
 * Automatically styles text content with Material Design 3 `titleMedium` typography,
 * and scales nested `<img>` elements with `object-fit: cover`.
 *
 * @example
 * ```tsx
 * // Initials avatar
 * <ListAvatar>JD</ListAvatar>
 *
 * // Image avatar
 * <ListAvatar>
 *     <img src="/avatars/user.jpg" alt="Jane Doe" />
 * </ListAvatar>
 * ```
 */
export const ListAvatar: React.FC<ListAvatarProps> = ({
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(
                styles["avatar"],
                typography.titleMedium,
                className
            )}
            {...props}
        />
    );
};
