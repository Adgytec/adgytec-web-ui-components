import type { ReactNode } from "react";
import type { SelectionIndicator } from "./list";
import styles from "./listItem.module.css";

/**
 * Common base props shared between [`ListItem`](src/components/List/ListItem/ListItem.tsx) and [`GridListItem`](src/components/List/GridListItem/GridListItem.tsx).
 *
 * Utilizes a structured slot-based API (`leading`, `overline`, `label`, `supporting`, `trailing`)
 * to lay out content following Material Design 3 List specifications.
 */
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
     * Array of elements rendered at the end of the list item (e.g. trailing metadata text, action buttons, or selection controls).
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

/**
 * Base CSS class for list item components (`ListItem` and `GridListItem`).
 */
export const listItemStyle = styles["list-item"];

/**
 * CSS class for the internal ripple splash container.
 */
export const listItemSplashStyle = styles["splash"];

/**
 * CSS class for the leading element container.
 */
export const listItemLeadingStyle = styles["leading"];

/**
 * CSS class for the primary text content container (`overline`, `label`, `supporting`).
 */
export const listeItemContentStyle = styles["content"];

/**
 * CSS class for the trailing elements container.
 */
export const listItemTrailingStyle = styles["trailing"];
