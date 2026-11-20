import clsx from "clsx";
import { composeRenderProps } from "react-aria-components";
import { LinkIconButton } from "@/components/Button";
import { ListActionStyles } from "../core";
import type { ListLinkActionProps } from "./types";

/**
 * Pre-configured trailing navigation link icon button for a [`ListItem`](src/components/List/ListItem/ListItem.tsx) or [`GridListItem`](src/components/List/GridListItem/GridListItem.tsx).
 *
 * Hardcodes `size="small"` while ensuring a full 48px touch target area for accessibility,
 * defaulting to the `"standard"` icon button color style.
 *
 * @example
 * ```tsx
 * import { ExternalLink } from "lucide-react";
 *
 * <ListLinkAction
 *     href="https://example.com"
 *     icon={ExternalLink}
 *     aria-label="Visit external site"
 * />
 * ```
 */
export const ListLinkAction: React.FC<ListLinkActionProps> = ({
    color = "standard",
    ...props
}) => {
    return (
        <LinkIconButton
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(ListActionStyles, className)
            )}
            size="small"
            color={color}
        />
    );
};
