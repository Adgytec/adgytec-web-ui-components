import type { ReactNode } from "react";
import type { Button } from "react-aria-components";
import type { NavigationItemProps } from "../core";

export interface NavigationButtonProps
    extends Omit<
            React.ComponentPropsWithRef<typeof Button>,
            "children" | "slot"
        >,
        Omit<NavigationItemProps, "label"> {
    prefix?: string;
    label?: ReactNode;
}
