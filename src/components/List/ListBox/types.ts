import type { ListBox } from "react-aria-components";

/**
 * Vertical alignment options for elements (leading media, text content, and trailing actions)
 * across list items in a [`ListBox`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListBox/ListBox.tsx).
 */
export type ListAlignY = "start" | "center" | "end";

/**
 * Props for the [`ListBox`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListBox/ListBox.tsx) container component.
 *
 * Extends all properties from React Aria's `ListBox`, including selection modes, keyboard navigation,
 * and collection props.
 */
export interface ListBoxProps<T extends object>
    extends React.ComponentPropsWithRef<typeof ListBox<T>> {
    /**
     * Vertical alignment of leading, text, and trailing elements across list items.
     *
     * @default "center"
     */
    alignY?: ListAlignY;
}
