import clsx from "clsx";
import { Popover } from "@/components/Popover";
import styles from "./menuPopover.module.css";

/**
 * Props for the [`MenuPopover`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuPopover/MenuPopover.tsx) component.
 */
export interface MenuPopoverProps
    extends React.ComponentPropsWithRef<typeof Popover> {}

/**
 * Surface overlay container for the [`Menu`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/Menu/Menu.tsx) component.
 *
 * Wraps [`Popover`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Popover/Popover.tsx)
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
export const MenuPopover: React.FC<MenuPopoverProps> = ({
    className,
    ...props
}) => {
    return (
        <Popover
            className={(renderProps) =>
                clsx(
                    styles["popover"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
