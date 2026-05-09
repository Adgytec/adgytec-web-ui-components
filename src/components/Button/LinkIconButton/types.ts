import type { Link } from "react-aria-components";
import type { IconButtonBaseProps } from "../core";

export interface LinkIconButtonProps
    extends Omit<
            React.ComponentPropsWithRef<typeof Link>,
            "children" | "className"
        >,
        IconButtonBaseProps {}
