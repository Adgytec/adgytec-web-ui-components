import type { Link } from "react-aria-components";
import type { NavigationItemProps } from "../core";

export interface NavigationLinkProps
    extends Omit<React.ComponentPropsWithRef<typeof Link>, "children">,
        NavigationItemProps {}
