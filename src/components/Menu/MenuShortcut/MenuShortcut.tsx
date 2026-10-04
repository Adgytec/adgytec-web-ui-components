import clsx from "clsx";
import { typography } from "@/utils/typography";

/**
 * Props for the [`MenuShortcut`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuShortcut/MenuShortcut.tsx) component.
 */
export interface MenuShortcutProps extends React.ComponentPropsWithRef<"kbd"> {}

/**
 * Keyboard shortcut badge (`<kbd>`) displayed at the trailing edge of a [`MenuItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuItem/MenuItem.tsx).
 *
 * Styled with Material Design 3 `labelLarge` typography and appropriate contrast.
 *
 * @example
 * ```tsx
 * <MenuShortcut>⌘S</MenuShortcut>
 * ```
 */
export const MenuShortcut: React.FC<MenuShortcutProps> = ({
    className,
    ...props
}) => {
    return (
        <kbd className={clsx(typography.labelLarge, className)} {...props} />
    );
};
