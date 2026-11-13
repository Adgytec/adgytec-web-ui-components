import type { Button } from "react-aria-components";
import type { FABColors } from "./colors";
import type { FABSizes } from "./sizes";
import type { FABVariants } from "./variants";

export interface FABBaseProps
    extends React.ComponentPropsWithRef<typeof Button> {
    color?: FABColors;
    variant?: FABVariants;
    size?: FABSizes;
    tooltip?: string;
}
