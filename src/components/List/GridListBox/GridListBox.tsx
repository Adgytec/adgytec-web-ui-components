import clsx from "clsx";
import {
    GridList as AriaGridList,
    composeRenderProps,
    Provider,
} from "react-aria-components";
import {
    GridListBoxContext,
    ListBoxConfigContext,
    listBoxAlignYStyle,
    listBoxStyle,
} from "../core";
import type { GridListBoxProps } from "./types";

/**
 * Material Design 3 GridList container component.
 *
 * Coordinates vertical indexing of items, keyboard navigation, single/multiple selection,
 * row actions (`onAction`), unified vertical alignment of elements (`alignY`), and contextual selection indicator placement (`selectionIndicator`).
 *
 * Built on React Aria Components' `GridList`, omitting the `layout` prop in favor of Material 3 vertical list styling.
 * Unlike standard [`ListBox`](src/components/List/ListBox/ListBox.tsx), `GridListBox` implements an ARIA `grid` pattern
 * where list items can contain actionable child elements (such as buttons, switches, or links) with two-dimensional
 * keyboard accessibility.
 *
 * @example
 * ```tsx
 * import {
 *     GridListBox,
 *     GridListItem,
 *     ListIcon,
 *     ListLabelText,
 *     ListSupportingText,
 *     ListAction,
 * } from "@adgytec/web-ui-components";
 * import { Mail, Trash2 } from "lucide-react";
 *
 * <GridListBox selectionMode="multiple" selectionIndicator="leading">
 *     <GridListItem
 *         id="inbox"
 *         leading={<ListIcon icon={Mail} />}
 *         label={<ListLabelText>Inbox</ListLabelText>}
 *         supporting={<ListSupportingText>2 unread messages</ListSupportingText>}
 *         trailing={[
 *             <ListAction
 *                 key="delete"
 *                 icon={Trash2}
 *                 aria-label="Delete message"
 *                 onPress={() => console.log("Delete")}
 *             />,
 *         ]}
 *     />
 * </GridListBox>
 * ```
 */
export const GridListBox = <T extends object>({
    alignY = "center",
    selectionIndicator,
    ...props
}: GridListBoxProps<T>) => {
    const { layout: _omittedLayout, ...gridListProps } =
        props as GridListBoxProps<T> & { layout?: unknown };

    return (
        <Provider
            values={[
                [ListBoxConfigContext, { selectionIndicator }],
                [GridListBoxContext, true],
            ]}
        >
            <AriaGridList
                {...gridListProps}
                className={composeRenderProps(props.className, (className) =>
                    clsx(listBoxStyle, listBoxAlignYStyle(alignY), className)
                )}
            />
        </Provider>
    );
};
