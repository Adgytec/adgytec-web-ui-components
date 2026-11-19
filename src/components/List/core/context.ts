import { createContext, useContext } from "react";
import type { SelectionIndicator } from "./list";

/**
 * Configuration context value passed down from [`ListBox`](src/components/List/ListBox/ListBox.tsx)
 * or [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx) to child items.
 */
export type ListBoxConfigContextValue = {
    /**
     * Placement of the selection check indicator across list items.
     */
    selectionIndicator?: SelectionIndicator;
};

/**
 * Context that propagates [`ListBox`](src/components/List/ListBox/ListBox.tsx) or [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx) configuration options to nested list items.
 */
export const ListBoxConfigContext = createContext<ListBoxConfigContextValue>(
    {}
);

/**
 * Hook to access [`ListBox`](src/components/List/ListBox/ListBox.tsx) or [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx) configuration within a list item.
 *
 * @returns The active {@link ListBoxConfigContextValue}.
 */
export function useListBoxConfig() {
    return useContext(ListBoxConfigContext);
}

/**
 * Context that identifies whether a list item or subcomponent is rendered within a [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx).
 */
export const GridListBoxContext = createContext<boolean | null>(null);

/**
 * Hook to determine whether the component is rendered inside a [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx).
 *
 * Used by subcomponents such as [`ListLabelText`](src/components/List/ListLabelText/ListLabelText.tsx) to adapt slot attributes to React Aria's `GridListItem` requirements.
 *
 * @returns `true` if rendered inside a `GridListBox`, otherwise `false`.
 */
export function useInGridListBox() {
    return useContext(GridListBoxContext) === true;
}
