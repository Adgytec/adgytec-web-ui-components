import type { Button } from "react-aria-components";
import type { ButtonBaseProps } from "../core";

export interface ButtonProps
    extends Omit<React.ComponentPropsWithRef<typeof Button>, "className">,
        ButtonBaseProps {}
