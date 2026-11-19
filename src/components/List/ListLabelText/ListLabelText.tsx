import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import { useInGridListBox } from "../core";
import styles from "./listLabelText.module.css";

/**
 * Props for the [`ListLabelText`](src/components/List/ListLabelText/ListLabelText.tsx) component.
 */
export interface ListLabelTextProps
    extends Omit<React.ComponentPropsWithRef<typeof Text>, "slot"> {}

/**
 * Primary headline/label text component for a [`ListItem`](src/components/List/ListItem/ListItem.tsx) or [`GridListItem`](src/components/List/GridListItem/GridListItem.tsx).
 *
 * Styled with Material Design 3 `bodyLarge` typography. Automatically binds to `slot="label"` when used within
 * a standard `ListBox`, and omits the slot when rendered inside a [`GridListBox`](src/components/List/GridListBox/GridListBox.tsx)
 * to comply with React Aria `GridListItem` slot requirements.
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
    const inGridList = useInGridListBox();
    return (
        <Text
            className={clsx(styles["label"], typography.bodyLarge, className)}
            slot={inGridList ? undefined : "label"}
            {...props}
        />
    );
};
