import type { GridList } from "react-aria-components";
import type { ListBoxBaseProps } from "../core";

/**
 * Props for the [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx) container component.
 *
 * Extends properties from React Aria's `GridList`, omitting the `layout` prop.
 */
export interface GridListBoxProps<T extends object>
    extends Omit<React.ComponentPropsWithRef<typeof GridList<T>>, "layout">,
        ListBoxBaseProps {}
