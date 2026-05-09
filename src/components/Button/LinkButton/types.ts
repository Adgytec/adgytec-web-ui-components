import type { Link } from "react-aria-components";
import type { ButtonBaseProps } from "../core";

export interface LinkButtonProps
    extends Omit<React.ComponentPropsWithRef<typeof Link>, "className">,
        ButtonBaseProps {}
