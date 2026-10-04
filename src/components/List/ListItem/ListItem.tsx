import { clsx } from "clsx";
import {
    CheckboxContext,
    ListBoxItem,
    Provider,
    SwitchContext,
} from "react-aria-components";
import { Splash, useSplash } from "@/components/Splash";
import styles from "./listItem.module.css";
import type { ListItemProps } from "./types";

/**
 * Material Design 3 interactive list item component.
 *
 * Supports structured slot composition (`leading`, `overline`, `label`, `supporting`, `trailing`),
 * dynamic corner radius morphing on hover/focus/selection, touch ripple splash feedback,
 * and automatic synchronization with nested selection controls (`Checkbox` or `Switch` with `slot="selection"`).
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
    className,
    onPress,
    ...props
}) => {
    const { handlePress, splashInfo } = useSplash(onPress);
    const hasTrailing = (trailing?.length ?? 0) > 0;

    return (
        <ListBoxItem
            className={(renderProps) =>
                clsx(
                    styles["list-item"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            onPress={handlePress}
            data-list-item={true}
            {...props}
        >
            {({ isSelected, isDisabled }) => (
                <Provider
                    values={[
                        [
                            CheckboxContext,
                            {
                                slots: {
                                    selection: {
                                        isSelected,
                                        isDisabled,
                                        isReadOnly: true,
                                    },
                                },
                            },
                        ],
                        [
                            SwitchContext,
                            {
                                slots: {
                                    selection: {
                                        isSelected,
                                        isDisabled,
                                        isReadOnly: true,
                                    },
                                },
                            },
                        ],
                    ]}
                >
                    {splashInfo && <Splash {...splashInfo} />}

                    {leading && (
                        <div className={clsx(styles["leading"])}>{leading}</div>
                    )}

                    <div className={clsx(styles["content"])}>
                        {overline && overline}
                        {label}
                        {supporting && supporting}
                    </div>

                    {hasTrailing && (
                        <div className={styles["trailing"]}>{trailing}</div>
                    )}
                </Provider>
            )}
        </ListBoxItem>
    );
};
