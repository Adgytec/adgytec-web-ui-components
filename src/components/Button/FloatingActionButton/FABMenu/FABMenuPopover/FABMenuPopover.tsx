import { Popover } from "@/components/Popover";

/**
 * Props for the {@link FABMenuPopover} component.
 * Extends {@link Popover} props while omitting fixed `placement` and `shouldFlip`.
 */
export interface FABMenuPopoverProps
    extends Omit<
        React.ComponentPropsWithRef<typeof Popover>,
        "placement" | "shouldFlip"
    > {}

/**
 * Specialized popover container designed for {@link FABMenu}.
 *
 * Anchors directly above the trigger button (`placement="top end"`, `shouldFlip={false}`)
 * and enables two-dimensional scaling animations (`data-scale-xy`) for smooth speed dial expansion.
 *
 * @example
 * ```tsx
 * import {
 *     FABMenu,
 *     FABMenuItem,
 *     FABMenuPopover,
 * } from "@adgytec/web-ui-components";
 * import { FileText } from "lucide-react";
 *
 * <FABMenuPopover>
 *     <FABMenu>
 *         <FABMenuItem id="doc" icon={FileText}>Document</FABMenuItem>
 *     </FABMenu>
 * </FABMenuPopover>
 * ```
 */
export const FABMenuPopover: React.FC<FABMenuPopoverProps> = ({ ...props }) => {
    return (
        <Popover
            shouldFlip={false}
            placement="top end"
            {...props}
            data-scale-xy
        />
    );
};
