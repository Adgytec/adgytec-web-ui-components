import type { ReactNode } from "react";
import type { AppBarAlignment, AppBarSize } from "../core";

/**
 * Props for the {@link AppBar} component.
 */
export interface AppBarProps
    extends Omit<React.ComponentPropsWithRef<"header">, "children"> {
    /**
     * Layout height and typography size variant.
     * - `"small"`: Single-row layout with inline title (default).
     * - `"medium"`: Two-row layout with medium headline.
     * - `"large"`: Two-row layout with large display headline.
     * @defaultValue "small"
     */
    size?: AppBarSize;

    /**
     * Text alignment of the headline.
     * - `"default"`: Leading-aligned title following the leading action.
     * - `"centered"`: Horizontally centered title.
     * @defaultValue "default"
     */
    alignment?: AppBarAlignment;

    /**
     * Action element rendered at the leading edge (left in LTR), typically an {@link AppBarAction}.
     */
    leadingAction?: ReactNode;

    /**
     * List of action elements rendered at the trailing edge (right in LTR), such as {@link AppBarAction} or {@link AppBarAvatar}.
     */
    trailingActions?: ReactNode[];

    /**
     * Headline element of the AppBar, typically an {@link AppBarHeadline}.
     */
    headline?: ReactNode;
}
