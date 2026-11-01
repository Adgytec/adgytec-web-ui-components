import type { ListBox } from "react-aria-components";
import type { SelectionIndicator } from "../core";

/**
 * Vertical alignment options for elements (leading media, text content, and trailing actions)
 * across list items in a [`ListBox`](src/components/List/ListBox/ListBox.tsx).
 */
export type ListAlignY = "start" | "center" | "end";

/**
 * Props for the [`ListBox`](src/components/List/ListBox/ListBox.tsx) container component.
 *
 * Extends all properties from React Aria's `ListBox`, including selection modes, keyboard navigation,
 * and collection props.
 */
export interface ListBoxProps<T extends object>
    extends React.ComponentPropsWithRef<typeof ListBox<T>> {
    /**
     * Vertical alignment of leading, text, and trailing elements across list items.
     *
     * @default "center"
     */
    alignY?: ListAlignY;

    /**
     * Placement of the checkmark indicator when a list item is selected.
     * Can be overridden per individual [`ListItem`](src/components/List/ListItem/ListItem.tsx).
     *
     * - `"leading"`: Replaces the leading element with a check icon when selected.
     * - `"trailing"`: Replaces the trailing element with a check icon when selected.
     * - `"none"`: Disables automatic checkmark icon replacement (default).
     *
     * @default "none"
     */
    selectionIndicator?: SelectionIndicator;
}
