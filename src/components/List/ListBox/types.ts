import type { ListBox } from "react-aria-components";

export type ListAlignY = "start" | "center" | "end";

export interface ListBoxProps<T extends object>
    extends React.ComponentPropsWithRef<typeof ListBox<T>> {
    alignY?: ListAlignY;
}
