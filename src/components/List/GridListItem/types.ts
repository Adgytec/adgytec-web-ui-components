import type { GridListItem } from "react-aria-components";
import type { ListItemBaseProps } from "../core";

/**
 * Props for the [`GridListItem`](src/components/List/GridListItem/GridListItem.tsx) component.
 *
 * Utilizes a structured slot-based API (`leading`, `overline`, `label`, `supporting`, `trailing`)
 * to lay out content following Material Design 3 List specifications.
 */
export interface GridListItemProps
    extends Omit<React.ComponentPropsWithRef<typeof GridListItem>, "children">,
        ListItemBaseProps {}
