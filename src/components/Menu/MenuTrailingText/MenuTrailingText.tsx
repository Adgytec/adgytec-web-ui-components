import clsx from "clsx";
import { typography } from "@/utils/typography";

/**
 * Props for the [`MenuTrailingText`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuTrailingText/MenuTrailingText.tsx) component.
 */
export interface MenuTrailingTextProps
    extends React.ComponentPropsWithRef<"p"> {}

/**
 * Secondary metadata or descriptive text placed at the trailing edge of a [`MenuItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuItem/MenuItem.tsx).
 *
 * Styled with Material Design 3 `labelLarge` typography.
 *
 * @example
 * ```tsx
 * <MenuTrailingText>New</MenuTrailingText>
 * ```
 */
export const MenuTrailingText: React.FC<MenuTrailingTextProps> = ({
    className,
    ...props
}) => {
    return <p className={clsx(typography.labelLarge, className)} {...props} />;
};
