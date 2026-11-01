import type { ReactNode } from "react";
import type { ListBoxItem } from "react-aria-components";
import type { SelectionIndicator } from "../core";

/**
 * Props for the [`ListItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListItem/ListItem.tsx) component.
 *
 * Utilizes a structured slot-based API (`leading`, `overline`, `label`, `supporting`, `trailing`)
 * to lay out content following Material Design 3 List specifications.
 */
export interface ListItemProps
    extends Omit<React.ComponentPropsWithRef<typeof ListBoxItem>, "children"> {
    /**
     * Element rendered at the start of the list item (e.g. icon, avatar, thumbnail media, or selection checkbox).
     */
    leading?: ReactNode;

    /**
     * Eyebrow or overline text rendered above the primary label, typically [`ListOverlineText`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListOverlineText/ListOverlineText.tsx).
     */
    overline?: ReactNode;

    /**
     * The primary label element of the list item, typically [`ListLabelText`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListLabelText/ListLabelText.tsx).
     */
    label: ReactNode;

    /**
     * Secondary descriptive text rendered beneath the label, typically [`ListSupportingText`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListSupportingText/ListSupportingText.tsx).
     */
    supporting?: ReactNode;

    /**
     * Array of elements rendered at the end of the list item (e.g. trailing metadata text, action buttons, or selection switches).
     */
    trailing?: ReactNode[];

    /**
     * Placement of the checkmark indicator when this item is selected.
     * When set, replaces the corresponding `leading` or `trailing` element with a check icon when selected.
     * If omitted, inherits from the parent [`ListBox`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListBox/ListBox.tsx) `selectionIndicator`, defaulting to `"none"`.
     *
     * - `"leading"`: Replaces the `leading` element with a check icon when selected.
     * - `"trailing"`: Replaces the `trailing` element with a check icon when selected.
     * - `"none"`: Disables checkmark icon replacement.
     *
     * @default "none"
     */
    selectionIndicator?: SelectionIndicator;
}
