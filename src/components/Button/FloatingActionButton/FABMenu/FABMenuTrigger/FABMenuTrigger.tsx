import { MenuTrigger } from "react-aria-components";
import { FABMenuVariantContext } from "../context";
import type { FABMenuTriggerProps } from "./types";

/**
 * Top-level container component for a Floating Action Button Menu (Speed Dial).
 *
 * Wraps React Aria Components `MenuTrigger` and provides the semantic `variant`
 * palette to child components (such as {@link FABMenuButton} and {@link FABMenuItem}) via context.
 *
 * @example
 * ```tsx
 * import {
 *     FABMenu,
 *     FABMenuButton,
 *     FABMenuItem,
 *     FABMenuPopover,
 *     FABMenuTrigger,
 * } from "@adgytec/web-ui-components";
 * import { Plus, FileText, Camera } from "lucide-react";
 *
 * <FABMenuTrigger variant="primary">
 *     <FABMenuButton icon={Plus} aria-label="Quick Actions" />
 *     <FABMenuPopover>
 *         <FABMenu onAction={(key) => handleAction(key)}>
 *             <FABMenuItem id="doc" icon={FileText}>Document</FABMenuItem>
 *             <FABMenuItem id="photo" icon={Camera}>Photo</FABMenuItem>
 *         </FABMenu>
 *     </FABMenuPopover>
 * </FABMenuTrigger>
 * ```
 */
export const FABMenuTrigger: React.FC<FABMenuTriggerProps> = ({
    variant = "primary",
    ...props
}) => {
    return (
        <FABMenuVariantContext value={{ variant }}>
            <MenuTrigger {...props} />
        </FABMenuVariantContext>
    );
};
