import type { ReactNode } from "react";
import type { ListBoxItem } from "react-aria-components";

export interface ListItemProps
    extends Omit<React.ComponentPropsWithRef<typeof ListBoxItem>, "children"> {
    leading?: ReactNode;
    overline?: ReactNode;
    label: ReactNode;
    supporting?: ReactNode;
    trailing?: ReactNode[];
}
