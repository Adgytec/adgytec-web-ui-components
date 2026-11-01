import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./listLabelText.module.css";

/**
 * Props for the [`ListLabelText`](src/components/List/ListLabelText/ListLabelText.tsx) component.
 */
export interface ListLabelTextProps
    extends Omit<React.ComponentPropsWithRef<typeof Text>, "slot"> {}

/**
 * Primary headline/label text component for a [`ListItem`](src/components/List/ListItem/ListItem.tsx).
 *
 * Automatically binds to `slot="label"` with Material Design 3 `bodyLarge` typography.
 *
 * @example
 * ```tsx
 * <ListLabelText>Notification Settings</ListLabelText>
 * ```
 */
export const ListLabelText: React.FC<ListLabelTextProps> = ({
    className,
    ...props
}) => {
    return (
        <Text
            className={clsx(styles["label"], typography.bodyLarge, className)}
            slot="label"
            {...props}
        />
    );
};
