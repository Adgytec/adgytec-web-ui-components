import type { ListBox } from "react-aria-components";
import type { ListBoxBaseProps } from "../core";

/**
 * Props for the [`ListBox`](src/components/List/ListBox/ListBox.tsx) container component.
 *
 * Extends all properties from React Aria's `ListBox`, including selection modes, keyboard navigation,
 * and collection props.
 */
export interface ListBoxProps<T extends object>
    extends Omit<React.ComponentPropsWithRef<typeof ListBox<T>>, "layout">,
        ListBoxBaseProps {}
