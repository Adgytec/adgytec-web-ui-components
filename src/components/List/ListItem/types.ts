import type { ListBoxItem } from "react-aria-components";
import type { ListItemBaseProps } from "../core";

/**
 * Props for the [`ListItem`](src/components/List/ListItem/ListItem.tsx) component.
 *
 * Extends React Aria's `ListBoxItem` props (omitting `children`), utilizing a structured slot-based API
 * (`leading`, `overline`, `label`, `supporting`, `trailing`) and contextual `selectionIndicator` placement
 * following Material Design 3 List specifications.
 */
export interface ListItemProps
    extends Omit<React.ComponentPropsWithRef<typeof ListBoxItem>, "children">,
        ListItemBaseProps {}
