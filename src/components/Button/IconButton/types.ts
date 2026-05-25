import type { Button } from "react-aria-components";
import type { IconButtonBaseProps } from "../core";

export interface IconButtonProps
    extends Omit<React.ComponentPropsWithRef<typeof Button>, "children">,
        IconButtonBaseProps {}
