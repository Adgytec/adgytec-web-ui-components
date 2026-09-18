import { clsx } from "clsx";
import { Check } from "lucide-react";
import { ListBoxItem } from "react-aria-components";
import { Splash, useSplash } from "@/components/Splash";
import { ListAvatar } from "../ListAvatar";
import { ListIcon } from "../ListIcon";
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
    const hasTrailing = trailing.length > 0;

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
            {({ isSelected }) => (
                <>
                    {splashInfo && <Splash {...splashInfo} />}

                    {(isSelected || leading) && (
                        <div className={clsx(styles["leading"])}>
                            {isSelected ? (
                                <ListAvatar>
                                    <ListIcon icon={Check} />
                                </ListAvatar>
                            ) : (
                                leading
                            )}
                        </div>
                    )}

                    <div className={clsx(styles["content"])}>
                        {overline && overline}
                        {label}
                        {trailing && trailing}
                    </div>

                    {hasTrailing && (
                        <div className={styles["trailing"]}>{trailing}</div>
                    )}
                </>
            )}
        </ListBoxItem>
    );
};
