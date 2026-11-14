import { clsx } from "clsx";
import { Menu } from "react-aria-components";
import styles from "./fabMenu.module.css";

/**
 * Props for the {@link FABMenu} component.
 * Extends React Aria Components `Menu` props.
 */
export interface FABMenuProps<T extends object = object>
    extends React.ComponentPropsWithRef<typeof Menu<T>> {}

/**
 * Menu item list container for the FAB Speed Dial.
 *
 * Extends React Aria Components `Menu`, laying out {@link FABMenuItem} elements
 * in a vertical flex column aligned to the trailing edge (`align-items: flex-end`)
 * with compact spacing.
 *
 * @example
 * ```tsx
 * import { FABMenu, FABMenuItem } from "@adgytec/web-ui-components";
 * import { FileText, Camera } from "lucide-react";
 *
 * <FABMenu onAction={(key) => handleAction(key)}>
 *     <FABMenuItem id="doc" icon={FileText}>Document</FABMenuItem>
 *     <FABMenuItem id="photo" icon={Camera}>Photo</FABMenuItem>
 * </FABMenu>
 * ```
 */
export const FABMenu = <T extends object>({
    className,
    ...props
}: FABMenuProps<T>) => {
    return (
        <Menu
            className={(renderProps) =>
                clsx(
                    styles["fab-menu"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
