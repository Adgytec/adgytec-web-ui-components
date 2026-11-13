import type { Button } from "react-aria-components";
import type { FABColors } from "./colors";
import type { FABSizes } from "./sizes";
import type { FABVariants } from "./variants";

/**
 * Base props shared across Floating Action Button components.
 * Extends React Aria Components `Button` props.
 */
export interface FABBaseProps
    extends React.ComponentPropsWithRef<typeof Button> {
    /**
     * Color scheme style for the FAB container.
     * @default "filled"
     */
    color?: FABColors;

    /**
     * Semantic color variant mapped to system color tokens.
     * @default "primary"
     */
    variant?: FABVariants;

    /**
     * Size preset of the FAB container and icon.
     * @default "medium"
     */
    size?: FABSizes;

    /**
     * Optional tooltip text displayed on hover or focus.
     */
    tooltip?: string;
}
