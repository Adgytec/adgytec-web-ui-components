import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import type { IconButtonBaseProps } from "../core";

export interface IconButtonProps
    extends Omit<AriaButtonProps, "children" | "className">,
        IconButtonBaseProps {}
