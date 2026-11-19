import type { ListBox } from "react-aria-components";
import type { ListAlignY, ListBoxBaseProps, SelectionIndicator } from "../core";

export type { ListAlignY, SelectionIndicator };

/**
 * Props for the [`ListBox`](src/components/List/ListBox/ListBox.tsx) container component.
 *
 * Extends all properties from React Aria's `ListBox` (including selection modes, keyboard navigation,
 * and collection props), omitting the `layout` prop in favor of Material Design vertical list styling,
 * and adds unified vertical alignment (`alignY`) and contextual selection indicator options (`selectionIndicator`).
 */
export interface ListBoxProps<T extends object>
    extends Omit<React.ComponentPropsWithRef<typeof ListBox<T>>, "layout">,
        ListBoxBaseProps {}
