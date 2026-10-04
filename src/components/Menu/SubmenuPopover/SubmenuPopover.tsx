import clsx from "clsx";
import { Popover } from "@/components/Popover";
import styles from "./submenuPopover.module.css";

/**
 * Props for the [`SubmenuPopover`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/SubmenuPopover/SubmenuPopover.tsx) component.
 */
export interface SubmenuPopoverProps
    extends React.ComponentPropsWithRef<typeof Popover> {}

/**
 * Specialized popover container for nested cascading submenus.
 *
 * Defaults to an `offset` of `-1` px so the submenu slightly overlaps the parent
 * menu edge according to Material Design 3 menu specifications.
 *
 * @example
 * ```tsx
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
