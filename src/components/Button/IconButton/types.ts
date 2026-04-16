import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import type { IconButtonBaseProps } from "../core/iconButton";

export interface IconButtonProps
    extends Omit<AriaButtonProps, "children">,
        IconButtonBaseProps {}
