import type { GridList } from "react-aria-components";
import type { ListAlignY, ListBoxBaseProps, SelectionIndicator } from "../core";

export type { ListAlignY, SelectionIndicator };

/**
 * Props for the [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx) container component.
 *
 * Extends properties from React Aria's `GridList` (including selection modes, keyboard navigation,
 * row actions, and collection props), omitting the `layout` prop in favor of Material Design vertical list styling,
 * and adds unified vertical alignment (`alignY`) and contextual selection indicator options (`selectionIndicator`).
 */
export interface GridListBoxProps<T extends object>
    extends Omit<React.ComponentPropsWithRef<typeof GridList<T>>, "layout">,
        ListBoxBaseProps {}
