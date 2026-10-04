import type { LucideIcon } from "lucide-react";
import type { Button } from "react-aria-components";

/**
 * Props for the {@link SplitButtonPrimary} component.
 * Extends React Aria's {@link Button} props with tooltip, icon, and icon placement.
 */
export interface SplitButtonPrimaryProps
    extends React.ComponentPropsWithRef<typeof Button> {
    /** Optional tooltip text displayed on hover. */
    tooltip?: string;
    /** An optional icon to display within the button. */
    icon?: LucideIcon;
    /**
     * The position of the icon relative to the text.
     *
     * @default "start"
     */
    iconPlacement?: "start" | "end";
}
