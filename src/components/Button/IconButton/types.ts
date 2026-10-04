import type { Button } from "react-aria-components";
import type { IconButtonBaseProps } from "../core";

/**
 * Props for the {@link IconButton} component.
 * Combines React Aria's {@link Button} props (omitting `children`) with {@link IconButtonBaseProps}.
 */
export interface IconButtonProps
    extends Omit<React.ComponentPropsWithRef<typeof Button>, "children">,
        IconButtonBaseProps {}
