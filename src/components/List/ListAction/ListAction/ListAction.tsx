import clsx from "clsx";
import { composeRenderProps } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { ListActionStyles } from "../core";
import type { ListActionProps } from "./types";

/**
 * Pre-configured trailing action icon button for a [`ListItem`](src/components/List/ListItem/ListItem.tsx) or [`GridListItem`](src/components/List/GridListItem/GridListItem.tsx).
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
                clsx(ListActionStyles, className)
            )}
            size="small"
            color={color}
        />
    );
};
