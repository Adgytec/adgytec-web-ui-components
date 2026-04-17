import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import type { ButtonBaseProps } from "../core";

export interface ButtonProps
    extends Omit<AriaButtonProps, "className">,
        ButtonBaseProps {}
