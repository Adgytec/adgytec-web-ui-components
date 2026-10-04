import type { ReactNode } from "react";
import type { Button } from "react-aria-components";
import type { NavigationItemProps } from "../core";

/**
 * Props for the [`NavigationButton`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationItem/NavigationButton/NavigationButton.tsx) component.
 */
export interface NavigationButtonProps
    extends Omit<
            React.ComponentPropsWithRef<typeof Button>,
            "children" | "slot"
        >,
        Omit<NavigationItemProps, "label"> {
    /**
     * URL path prefix evaluated by `isButtonActive` to determine the button's active state.
     */
    prefix?: string;

    /**
     * Button label content. If omitted, falls back to the label provided to [`SubNavigationTrigger`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/SubNavigation/SubNavigationTrigger/SubNavigationTrigger.tsx).
     */
    label?: ReactNode;
}
