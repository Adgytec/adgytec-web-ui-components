import { clsx } from "clsx";
import { Check } from "lucide-react";
import {
    CheckboxFieldContext,
    composeRenderProps,
    DEFAULT_SLOT,
    ListBoxItem,
    Provider,
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
import type { ListItemProps } from "./types";

/**
 * Material Design 3 interactive list item component.
 *
 * Supports structured slot composition (`leading`, `overline`, `label`, `supporting`, `trailing`),
 * dynamic corner radius morphing on hover/focus/selection, touch ripple splash feedback,
 * contextual checkmark replacement on selection (`selectionIndicator`),
 * and automatic synchronization with nested selection controls (`Checkbox` with `slot="selection"`).
 *
 * Built on React Aria Components' `ListBoxItem` for use inside a [`ListBox`](src/components/List/ListBox/ListBox.tsx).
 * For lists with nested interactive elements (such as buttons or switches) and two-dimensional keyboard navigation,
 * see [`GridListItem`](src/components/List/GridListItem/GridListItem.tsx) within a [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx).
 *
 * @example
 * ```tsx
 * import {
 *     ListItem,
 *     ListIcon,
 *     ListLabelText,
 *     ListSupportingText,
 *     ListAction,
 * } from "@adgytec/web-ui-components";
 * import { Star, Trash2 } from "lucide-react";
 *
 * <ListItem
 *     id="starred-email"
 *     leading={<ListIcon icon={Star} />}
 *     label={<ListLabelText>Project Roadmap</ListLabelText>}
 *     supporting={<ListSupportingText>Updated yesterday by Alex</ListSupportingText>}
 *     trailing={[
 *         <ListAction
 *             key="delete"
 *             icon={Trash2}
 *             aria-label="Delete item"
 *             onPress={() => handleDelete()}
 *         />,
 *     ]}
 * />
 * ```
 */
export const ListItem: React.FC<ListItemProps> = ({
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
        <ListBoxItem
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(listItemStyle, className)
            )}
            onPress={handlePress}
            data-list-item={true}
        >
            {({ isSelected, isDisabled, selectionMode }) => {
                const leadingSelectionIcon =
                    isSelected && listItemSelectionIndicator === "leading";

                const trailingSelectionIcon =
                    isSelected && listItemSelectionIndicator === "trailing";

                return (
                    <Provider
                        values={[
                            [
                                CheckboxFieldContext,
                                {
                                    slots: {
                                        [DEFAULT_SLOT]: {},
                                        selection: {
                                            isSelected,
                                            isDisabled:
                                                isDisabled ||
                                                selectionMode === "none",
                                            isReadOnly: true,
                                        },
                                    },
                                },
                            ],
                        ]}
                    >
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
                                <div className={listItemTrailingStyle}>
                                    {trailing}
                                </div>
                            )
                        )}
                    </Provider>
                );
            }}
        </ListBoxItem>
    );
};
