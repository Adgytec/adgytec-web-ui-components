import type { MenuTrigger } from "react-aria-components";
import type { FABVariants } from "../../core";

/**
 * Props for the {@link FABMenuTrigger} component.
 * Extends React Aria Components `MenuTrigger` props.
 */
export interface FABMenuTriggerProps
    extends React.ComponentPropsWithRef<typeof MenuTrigger> {
    /**
     * Semantic color variant shared across all FAB Menu components.
     * @default "primary"
     */
    variant?: FABVariants;
}
