import type { Button } from "react-aria-components";
import type { NavigationItemProps } from "../core";

export interface NavigationButtonProps
    extends Omit<React.ComponentPropsWithRef<typeof Button>, "children">,
        NavigationItemProps {
    prefix?: string;
}
