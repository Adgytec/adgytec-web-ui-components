import clsx from "clsx";
import {
    ListBox as AriaListBox,
    composeRenderProps,
} from "react-aria-components";
import {
    ListBoxConfigContext,
    listBoxAlignYStyle,
    listBoxStyle,
} from "../core";
import type { ListBoxProps } from "./types";

/**
 * Material Design 3 List container component.
 *
 * Coordinates vertical indexing of items, keyboard navigation, single/multiple selection,
 * unified vertical alignment of elements (`alignY`), and contextual selection indicator placement (`selectionIndicator`).
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
 * <ListBox selectionMode="single" selectionIndicator="leading">
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
    selectionIndicator,
    ...props
}: ListBoxProps<T>) => {
    return (
        <ListBoxConfigContext value={{ selectionIndicator }}>
            <AriaListBox
                {...props}
                className={composeRenderProps(props.className, (className) =>
                    clsx(listBoxStyle, listBoxAlignYStyle(alignY), className)
                )}
            />
        </ListBoxConfigContext>
    );
};
