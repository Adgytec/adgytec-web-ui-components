import type { ReactNode } from "react";

/**
 * Callback function signature used to determine whether a navigation link matching `href` is currently active.
 */
export type IsLinkActive = (href?: string) => boolean;

/**
 * Callback function signature used to determine whether a navigation button matching `prefix` is currently active.
 */
export type IsButtonActive = (prefix?: string) => boolean;

/**
 * Props for the root [`Navigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/Navigation/Navigation.tsx) container component.
 */
export interface NavigationProps extends React.ComponentPropsWithRef<"nav"> {
    /**
     * Header title or node displayed at the top of the navigation surface.
     */
    label?: ReactNode;

    /**
     * Callback function used by child [`NavigationLink`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationItem/NavigationLink/NavigationLink.tsx)
     * components to determine their active state from their `href`.
     */
    isLinkActive?: IsLinkActive;

    /**
     * Callback function used by child [`NavigationButton`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationItem/NavigationButton/NavigationButton.tsx)
     * components to determine their active state from their `prefix`.
     */
    isButtonActive?: IsButtonActive;

    /**
     * Root state identifier used for depth tracking and scroll position synchronization.
     *
     * @default "__root__"
     */
    stateID?: string;

    /**
     * Optional CSS class applied to the outer container `<div>` wrapping the navigation surface.
     */
    containerClassName?: string;
}
