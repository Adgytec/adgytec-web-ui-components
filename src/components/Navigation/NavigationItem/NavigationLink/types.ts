import type { Link } from "react-aria-components";
import type { NavigationItemProps } from "../core";

/**
 * Props for the [`NavigationLink`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationItem/NavigationLink/NavigationLink.tsx) component.
 *
 * Extends React Aria's `Link` properties and [`NavigationItemProps`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationItem/core/navigationItem.ts#L8).
 */
export interface NavigationLinkProps
    extends Omit<React.ComponentPropsWithRef<typeof Link>, "children">,
        NavigationItemProps {}
