import clsx from "clsx";
import { Popover as AriaPopover } from "react-aria-components";
import styles from "./popover.module.css";

/**
 * Props for the [`Popover`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Popover/Popover.tsx) component.
 *
 * Extends all properties from React Aria's `Popover`, including positioning (`placement`, `offset`, `crossOffset`),
 * portal containers, and entry/exit transition states.
 */
export interface PopoverProps
    extends React.ComponentPropsWithRef<typeof AriaPopover> {}

/**
 * Overlay surface container that presents content anchored to a trigger element.
 *
 * Built on React Aria's `Popover` with Material Design 3 surface colors, shadow elevation,
 * and built-in entry/exit animations responsive to placement directions.
 *
 * @example
 * ```tsx
 * import {
 *     Popover,
 *     Button,
 *     DialogTrigger,
 *     Dialog,
 * } from "@adgytec/web-ui-components";
 *
 * <DialogTrigger>
 *     <Button label="Open Popover" />
 *     <Popover>
 *         <Dialog>
 *             <p>This is the content inside the popover.</p>
 *         </Dialog>
 *     </Popover>
 * </DialogTrigger>
 * ```
 */
export const Popover: React.FC<PopoverProps> = ({ className, ...props }) => {
    return (
        <AriaPopover
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
