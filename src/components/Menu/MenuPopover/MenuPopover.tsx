import clsx from "clsx";
import { composeRenderProps } from "react-aria-components";
import { Popover } from "@/components/Popover";
import styles from "./menuPopover.module.css";

/**
 * Props for the [`MenuPopover`](src/components/Menu/MenuPopover/MenuPopover.tsx) component.
 */
export interface MenuPopoverProps
    extends React.ComponentPropsWithRef<typeof Popover> {}

/**
 * Surface overlay container for the [`Menu`](src/components/Menu/Menu/Menu.tsx) component.
 *
 * Wraps [`Popover`](src/components/Popover/Popover.tsx)
 * with Material Design 3 surface styling, rounded corners, and shadow elevation.
 *
 * @example
 * ```tsx
 * <MenuPopover placement="bottom start">
 *     <Menu>
 *         <MenuItem label="Settings" />
 *     </Menu>
 * </MenuPopover>
 * ```
 */
export const MenuPopover: React.FC<MenuPopoverProps> = ({ ...props }) => {
    return (
        <Popover
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["popover"], className)
            )}
        />
    );
};
