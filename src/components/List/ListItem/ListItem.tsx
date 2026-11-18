import { clsx } from "clsx";
import { Check } from "lucide-react";
import { cloneElement, type HTMLAttributes, isValidElement } from "react";
import { useId } from "react-aria";
import {
    CheckboxFieldContext,
    composeRenderProps,
    DEFAULT_SLOT,
    ListBoxItem,
    Provider,
    SwitchFieldContext,
} from "react-aria-components";
import { Splash, useSplash } from "@/components/Splash";
import { useListBoxConfig } from "../core";
import { ListIcon } from "../ListIcon";
import styles from "./listItem.module.css";
import type { ListItemProps } from "./types";

/**
 * Material Design 3 interactive list item component.
 *
 * Supports structured slot composition (`leading`, `overline`, `label`, `supporting`, `trailing`),
 * dynamic corner radius morphing on hover/focus/selection, touch ripple splash feedback,
 * contextual checkmark replacement on selection (`selectionIndicator`),
 * and automatic synchronization with nested selection controls (`Checkbox` with `slot="selection"`).
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

    const labelID = useId(
        isValidElement<HTMLAttributes<HTMLElement>>(label)
            ? label.props.id
            : undefined
    );

    const { handlePress, splashInfo } = useSplash(onPress);
    const hasTrailing = (trailing?.length ?? 0) > 0;

    return (
        <ListBoxItem
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["list-item"], className)
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
                                            "aria-labelledby": labelID,
                                        },
                                    },
                                },
                            ],
                            [
                                SwitchFieldContext,
                                {
                                    slots: {
                                        [DEFAULT_SLOT]: {
                                            "aria-labelledby": labelID,
                                        },
                                    },
                                },
                            ],
                        ]}
                    >
                        {splashInfo && (
                            <span className={clsx(styles["splash"])}>
                                <Splash {...splashInfo} />
                            </span>
                        )}

                        {leadingSelectionIcon ? (
                            <div className={clsx(styles["leading"])}>
                                <ListIcon icon={Check} />
                            </div>
                        ) : (
                            leading && (
                                <div className={clsx(styles["leading"])}>
                                    {leading}
                                </div>
                            )
                        )}

                        <div className={clsx(styles["content"])}>
                            {overline && overline}
                            {isValidElement<HTMLAttributes<HTMLElement>>(
                                label
                            ) ? (
                                cloneElement<HTMLAttributes<HTMLElement>>(
                                    label,
                                    { id: labelID }
                                )
                            ) : (
                                <span id={labelID}>{label}</span>
                            )}
                            {supporting && supporting}
                        </div>

                        {trailingSelectionIcon ? (
                            <div className={styles["trailing"]}>
                                <ListIcon icon={Check} />
                            </div>
                        ) : (
                            hasTrailing && (
                                <div className={styles["trailing"]}>
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
