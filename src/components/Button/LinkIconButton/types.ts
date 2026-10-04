import type { Link } from "react-aria-components";
import type { IconButtonBaseProps } from "../core";

/**
 * Props for the {@link LinkIconButton} component.
 * Combines React Aria's {@link Link} props (omitting `children`) with {@link IconButtonBaseProps}.
 */
export interface LinkIconButtonProps
    extends Omit<React.ComponentPropsWithRef<typeof Link>, "children">,
        IconButtonBaseProps {}
