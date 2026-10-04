import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./listOverlineText.module.css";

/**
 * Props for the [`ListOverlineText`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListOverlineText/ListOverlineText.tsx) component.
 */
export interface ListOverlineTextProps
    extends React.ComponentPropsWithRef<typeof Text> {}

/**
 * Eyebrow or overline category text component displayed above the label in a [`ListItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListItem/ListItem.tsx).
 *
 * Styled with Material Design 3 `labelSmall` typography.
 *
 * @example
 * ```tsx
 * <ListOverlineText>Work</ListOverlineText>
 * ```
 */
export const ListOverlineText: React.FC<ListOverlineTextProps> = ({
    className,
    ...props
}) => {
    return (
        <Text
            className={clsx(
                styles["overline"],
                typography.labelSmall,
                className
            )}
            {...props}
        />
    );
};
