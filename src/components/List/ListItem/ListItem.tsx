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
