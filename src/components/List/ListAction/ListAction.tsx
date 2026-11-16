import clsx from "clsx";
import { composeRenderProps } from "react-aria-components";
import { IconButton, type IconButtonProps } from "@/components/Button";
import styles from "./listAction.module.css";

/**
 * Props for the [`ListAction`](src/components/List/ListAction/ListAction.tsx) component.
 */
export interface ListActionProps extends Omit<IconButtonProps, "size"> {}

/**
 * Pre-configured trailing action icon button for a [`ListItem`](src/components/List/ListItem/ListItem.tsx).
 *
 * Hardcodes `size="small"` while ensuring a full 48px touch target area for accessibility,
 * defaulting to the `"standard"` icon button color style.
 *
 * @example
 * ```tsx
 * import { MoreVertical } from "lucide-react";
 *
 * <ListAction
 *     icon={MoreVertical}
 *     aria-label="More options"
 *     onPress={() => handleOpenMenu()}
 * />
 * ```
 */
export const ListAction: React.FC<ListActionProps> = ({
    color = "standard",
    ...props
}) => {
    return (
        <IconButton
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["action"], className)
            )}
            size="small"
            color={color}
        />
    );
};
