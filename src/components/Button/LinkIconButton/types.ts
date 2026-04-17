import type { LinkProps } from "react-aria-components";
import type { IconButtonBaseProps } from "../core";

export interface LinkIconButtonProps
    extends Omit<LinkProps, "children" | "className">,
        IconButtonBaseProps {}
