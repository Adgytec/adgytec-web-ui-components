import type { ReactNode } from "react";

/**
 * Props for the [`BadgeAnchor`](src/components/Badge/BadgeAnchor/BadgeAnchor.tsx) component.
 */
export interface BadgeAnchorProps extends React.ComponentPropsWithRef<"span"> {
    /**
     * Badge element (typically a [`Badge`](src/components/Badge/Badge/Badge.tsx)) anchored to the top-end corner of children.
     */
    badge?: ReactNode;
}
