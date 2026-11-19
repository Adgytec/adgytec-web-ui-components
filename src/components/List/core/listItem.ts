import type { ReactNode } from "react";
import type { SelectionIndicator } from "./list";
import styles from "./listItem.module.css";

export interface ListItemBaseProps {
    /**
     * Element rendered at the start of the list item (e.g. icon, avatar, thumbnail media, or selection checkbox).
     */
    leading?: ReactNode;

    /**
     * Eyebrow or overline text rendered above the primary label, typically [`ListOverlineText`](src/components/List/ListOverlineText/ListOverlineText.tsx).
     */
    overline?: ReactNode;

    /**
     * The primary label element of the list item, typically [`ListLabelText`](src/components/List/ListLabelText/ListLabelText.tsx).
     */
    label: ReactNode;

    /**
     * Secondary descriptive text rendered beneath the label, typically [`ListSupportingText`](src/components/List/ListSupportingText/ListSupportingText.tsx).
     */
    supporting?: ReactNode;

    /**
     * Array of elements rendered at the end of the list item (e.g. trailing metadata text, action buttons, or selection switches).
     */
    trailing?: ReactNode[];

    /**
     * Placement of the checkmark indicator when this item is selected.
     * When set, replaces the corresponding `leading` or `trailing` element with a check icon when selected.
     * If omitted, inherits from the parent [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx) or [`ListBox`](src/components/List/ListBox/ListBox.tsx) `selectionIndicator`, defaulting to `"none"`.
     *
     * - `"leading"`: Replaces the `leading` element with a check icon when selected.
     * - `"trailing"`: Replaces the `trailing` element with a check icon when selected.
     * - `"none"`: Disables checkmark icon replacement.
     *
     * @default "none"
     */
    selectionIndicator?: SelectionIndicator;
}

export const listItemStyle = styles["list-item"];

export const listItemSplashStyle = styles["splash"];

export const listItemLeadingStyle = styles["leading"];

export const listeItemContentStyle = styles["content"];

export const listItemTrailingStyle = styles["trailing"];
