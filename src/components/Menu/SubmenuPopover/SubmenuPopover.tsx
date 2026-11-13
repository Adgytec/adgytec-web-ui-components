import clsx from "clsx";
import { Popover } from "@/components/Popover";
import styles from "./submenuPopover.module.css";

/**
 * Props for the {@link SubmenuPopover} component.
 * Extends standard {@link Popover} props.
 */
export interface SubmenuPopoverProps
    extends React.ComponentPropsWithRef<typeof Popover> {}

/**
 * Specialized popover container for nested cascading submenus.
 *
 * Configured with two-dimensional scaling (`data-scale-xy`) for smooth menu transitions
 * and defaults to an `offset` of `-1` px so the submenu slightly overlaps the parent
 * menu edge according to Material Design 3 specifications.
 *
 * @example
 * ```tsx
 * import { Menu, MenuItem, SubmenuPopover } from "@adgytec/web-ui-components";
 *
 * <SubmenuPopover>
 *     <Menu>
 *         <MenuItem label="Sub-item 1" />
 *         <MenuItem label="Sub-item 2" />
 *     </Menu>
 * </SubmenuPopover>
 * ```
 */
export const SubmenuPopover: React.FC<SubmenuPopoverProps> = ({
    offset = -1,
    className,
    ...props
}) => {
    return (
        <Popover
            data-scale-xy
            offset={offset}
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
