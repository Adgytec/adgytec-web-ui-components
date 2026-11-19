import styles from "./listBox.module.css";

/**
 * Position where the selection check indicator is displayed when a list item is selected.
 *
 * - `"leading"`: Replaces the item's leading element with a check icon when selected.
 * - `"trailing"`: Replaces the item's trailing element with a check icon when selected.
 * - `"none"`: No automatic check icon replacement (default).
 */
export type SelectionIndicator = "leading" | "trailing" | "none";

export interface ListBoxBaseProps {
    /**
     * Vertical alignment of leading, text, and trailing elements across list items.
     *
     * @default "center"
     */
    alignY?: ListAlignY;

    /**
     * Placement of the checkmark indicator when a list item is selected.
     * Can be overridden per individual [`GridListItem`](src/components/List/GridListItem/GridListItem.tsx) or [`ListItem`](src/components/List/ListItem/ListItem.tsx).
     *
     * - `"leading"`: Replaces the leading element with a check icon when selected.
     * - `"trailing"`: Replaces the trailing element with a check icon when selected.
     * - `"none"`: Disables automatic checkmark icon replacement (default).
     *
     * @default "none"
     */
    selectionIndicator?: SelectionIndicator;
}

/**
 * Vertical alignment options for elements (leading media, text content, and trailing actions)
 * across list items in a [`ListBox`](src/components/List/ListBox/ListBox.tsx).
 */
export type ListAlignY = "start" | "center" | "end";

export const listBoxStyle = styles["list-box"];

export const listBoxAlignYStyle = (alignY: ListAlignY) => {
    return styles[alignY];
};
