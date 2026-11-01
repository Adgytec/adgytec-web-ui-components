import { createContext, useContext } from "react";
import type { SelectionIndicator } from "./selectionIndicator";

/**
 * Configuration context value passed down from [`ListBox`](src/components/List/ListBox/ListBox.tsx) to child items.
 */
export type ListBoxConfigContextValue = {
    /**
     * Placement of the selection check indicator across list items.
     */
    selectionIndicator?: SelectionIndicator;
};

/**
 * Context that propagates [`ListBox`](src/components/List/ListBox/ListBox.tsx) configuration options to nested list items.
 */
export const ListBoxConfigContext = createContext<ListBoxConfigContextValue>(
    {}
);

/**
 * Hook to access [`ListBox`](src/components/List/ListBox/ListBox.tsx) configuration within a [`ListItem`](src/components/List/ListItem/ListItem.tsx).
 */
export function useListBoxConfig() {
    return useContext(ListBoxConfigContext);
}
