import type { ListBoxItem } from "react-aria-components";
import type { ListItemBaseProps } from "../core";

/**
 * Props for the [`ListItem`](src/components/List/ListItem/ListItem.tsx) component.
 *
 * Utilizes a structured slot-based API (`leading`, `overline`, `label`, `supporting`, `trailing`)
 * to lay out content following Material Design 3 List specifications.
 */
export interface ListItemProps
    extends Omit<React.ComponentPropsWithRef<typeof ListBoxItem>, "children">,
        ListItemBaseProps {}
