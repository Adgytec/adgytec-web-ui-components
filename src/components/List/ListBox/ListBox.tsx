import clsx from "clsx";
import { ListBox as AriaListBox } from "react-aria-components";
import styles from "./listBox.module.css";
import type { ListBoxProps } from "./types";

/**
 * Material Design 3 List container component.
 *
 * Coordinates vertical indexing of items, keyboard navigation, single/multiple selection,
 * and unified vertical alignment of leading media, text content, and trailing actions.
 *
 * @example
 * ```tsx
 * import {
 *     ListBox,
 *     ListItem,
 *     ListIcon,
 *     ListLabelText,
 *     ListSupportingText,
 * } from "@adgytec/web-ui-components";
 * import { Mail } from "lucide-react";
 *
 * <ListBox selectionMode="single">
 *     <ListItem
 *         id="inbox"
 *         leading={<ListIcon icon={Mail} />}
 *         label={<ListLabelText>Inbox</ListLabelText>}
 *         supporting={<ListSupportingText>2 unread messages</ListSupportingText>}
 *     />
 * </ListBox>
 * ```
 */
export const ListBox = <T extends object>({
    alignY = "center",
    className,
    ...props
}: ListBoxProps<T>) => {
    return (
        <AriaListBox
            className={(renderProps) =>
                clsx(
                    styles["list-box"],
                    styles[alignY],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
