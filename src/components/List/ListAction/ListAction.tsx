import clsx from "clsx";
import { IconButton, type IconButtonProps } from "@/components/Button";
import styles from "./listAction.module.css";

/**
 * Props for the [`ListAction`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListAction/ListAction.tsx) component.
 */
export interface ListActionProps extends Omit<IconButtonProps, "size"> {}

/**
 * Pre-configured trailing action icon button for a [`ListItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListItem/ListItem.tsx).
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
    className,
    ...props
}) => {
    return (
        <IconButton
            className={(renderProps) =>
                clsx(
                    styles["action"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            size="small"
            color={color}
            {...props}
        />
    );
};
