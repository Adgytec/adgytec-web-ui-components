import type { LinkProps } from "react-aria-components";
import type { ButtonBaseProps } from "../core";

export interface LinkButtonProps
    extends Omit<LinkProps, "className">,
        ButtonBaseProps {}
