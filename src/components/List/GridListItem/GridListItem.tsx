import { clsx } from "clsx";
import { Check } from "lucide-react";
import {
    GridListItem as AriaGridListItem,
    composeRenderProps,
} from "react-aria-components";
import { Splash, useSplash } from "@/components/Splash";
import {
    listeItemContentStyle,
    listItemLeadingStyle,
    listItemSplashStyle,
    listItemStyle,
    listItemTrailingStyle,
    useListBoxConfig,
} from "../core";
import { ListIcon } from "../ListIcon";
import type { GridListItemProps } from "./types";

/**
 * Material Design 3 interactive grid list item component.
 *
 * Supports structured slot composition (`leading`, `overline`, `label`, `supporting`, `trailing`),
 * dynamic corner radius morphing on hover/focus/selection, touch ripple splash feedback,
 * contextual checkmark replacement on selection (`selectionIndicator`),
 * and automatic synchronization with nested selection controls (`Checkbox` with `slot="selection"`).
 *
 * Built on React Aria Components' `GridListItem` for use within a [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx).
 * Supports keyboard navigation across interactive row elements (e.g. action buttons, switches) and row-level actions (`onAction`).
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
 * import { Star, Trash2 } from "lucide-react";
 *
 * <GridListBox selectionMode="multiple">
 *     <GridListItem
 *         id="starred-email"
 *         leading={<ListIcon icon={Star} />}
 *         label={<ListLabelText>Project Roadmap</ListLabelText>}
 *         supporting={<ListSupportingText>Updated yesterday by Alex</ListSupportingText>}
 *         trailing={[
 *             <ListAction
 *                 key="delete"
 *                 icon={Trash2}
 *                 aria-label="Delete item"
 *                 onPress={() => handleDelete()}
 *             />,
 *         ]}
 *     />
 * </GridListBox>
 * ```
 */
export const GridListItem: React.FC<GridListItemProps> = ({
    leading,
    overline,
    label,
    supporting,
    trailing,
    onPress,
    selectionIndicator,
    ...props
}) => {
    const { selectionIndicator: listBoxSelectionIndicator } =
        useListBoxConfig();
    const listItemSelectionIndicator =
        selectionIndicator ?? listBoxSelectionIndicator ?? "none";

    const { handlePress, splashInfo } = useSplash(onPress);
    const hasTrailing = (trailing?.length ?? 0) > 0;

    return (
        <AriaGridListItem
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(listItemStyle, className)
            )}
            onPress={handlePress}
            data-list-item={true}
        >
            {({ isSelected }) => {
                const leadingSelectionIcon =
                    isSelected && listItemSelectionIndicator === "leading";

                const trailingSelectionIcon =
                    isSelected && listItemSelectionIndicator === "trailing";

                return (
                    <>
                        {splashInfo && (
                            <span className={clsx(listItemSplashStyle)}>
                                <Splash {...splashInfo} />
                            </span>
                        )}

                        {leadingSelectionIcon ? (
                            <div className={clsx(listItemLeadingStyle)}>
                                <ListIcon icon={Check} />
                            </div>
                        ) : (
                            leading && (
                                <div className={clsx(listItemLeadingStyle)}>
                                    {leading}
                                </div>
                            )
                        )}

                        <div className={clsx(listeItemContentStyle)}>
                            {overline && overline}
                            {label}
                            {supporting && supporting}
                        </div>

                        {trailingSelectionIcon ? (
                            <div className={clsx(listItemTrailingStyle)}>
                                <ListIcon icon={Check} />
                            </div>
                        ) : (
                            hasTrailing && (
                                <div className={clsx(listItemTrailingStyle)}>
                                    {trailing}
                                </div>
                            )
                        )}
                    </>
                );
            }}
        </AriaGridListItem>
    );
};
