import type { GridListItem } from "react-aria-components";
import type { ListItemBaseProps } from "../core";

/**
 * Props for the [`GridListItem`](src/components/List/GridListItem/GridListItem.tsx) component.
 *
 * Extends React Aria's `GridListItem` props (omitting `children`), utilizing a structured slot-based API
 * (`leading`, `overline`, `label`, `supporting`, `trailing`) and contextual `selectionIndicator` placement
 * following Material Design 3 List specifications.
 */
export interface GridListItemProps
    extends Omit<React.ComponentPropsWithRef<typeof GridListItem>, "children">,
        ListItemBaseProps {}
