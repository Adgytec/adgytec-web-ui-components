import type { MenuTrigger } from "react-aria-components";
import type { FABVariants } from "../../core";

export interface FABMenuTriggerProps
    extends React.ComponentPropsWithRef<typeof MenuTrigger> {
    variant?: FABVariants;
}
