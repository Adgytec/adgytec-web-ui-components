import { createContext, useContext } from "react";
import type { SelectionIndicator } from "./selectionIndicator";

/**
 * Configuration context value passed down from [`ListBox`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListBox/ListBox.tsx) to child items.
 */
export type ListBoxConfigContextValue = {
    /**
     * Placement of the selection check indicator across list items.
     */
    selectionIndicator?: SelectionIndicator;
};

/**
 * Context that propagates [`ListBox`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListBox/ListBox.tsx) configuration options to nested list items.
 */
export const ListBoxConfigContext = createContext<ListBoxConfigContextValue>(
    {}
);

/**
 * Hook to access [`ListBox`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListBox/ListBox.tsx) configuration within a [`ListItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListItem/ListItem.tsx).
 *
 * @throws {Error} If called outside a [`ListBox`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListBox/ListBox.tsx).
 */
export function useListBoxConfig() {
    const ctx = useContext(ListBoxConfigContext);
    if (!ctx) {
        throw new Error("useListBoxConfig must be used inside ListBox");
    }

    return ctx;
}
