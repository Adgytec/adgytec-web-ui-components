import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./listSupportingText.module.css";

/**
 * Props for the [`ListSupportingText`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListSupportingText/ListSupportingText.tsx) component.
 */
export interface ListSupportingTextProps
    extends Omit<React.ComponentPropsWithRef<typeof Text>, "slot"> {}

/**
 * Secondary descriptive text component placed beneath the label in a [`ListItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListItem/ListItem.tsx).
 *
 * Automatically binds to `slot="description"` with Material Design 3 `bodyMedium` typography.
 *
 * @example
 * ```tsx
 * <ListSupportingText>Receive real-time alerts on your device.</ListSupportingText>
 * ```
 */
export const ListSupportingText: React.FC<ListSupportingTextProps> = ({
    className,
    ...props
}) => {
    return (
        <Text
            className={clsx(
                styles["supporting"],
                typography.bodyMedium,
                className
            )}
            slot="description"
            {...props}
        />
    );
};
