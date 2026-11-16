import clsx from "clsx";
import {
    Disclosure as AriaDisclosure,
    composeRenderProps,
} from "react-aria-components";
import styles from "./disclosure.module.css";

/**
 * Props for the {@link Disclosure} component.
 * Extends React Aria's {@link AriaDisclosure} props.
 */
export interface DisclosureProps
    extends React.ComponentPropsWithRef<typeof AriaDisclosure> {}

/**
 * An expandable section component implementing Material Design 3 disclosure/accordion item behavior.
 *
 * Controls showing and hiding associated content based on user interaction with its {@link DisclosureHeader}.
 * Manages open/collapsed state, accessible ARIA attributes (`aria-expanded`, `aria-controls`), keyboard navigation,
 * and morphing corner radius styling.
 *
 * @example
 * ```tsx
 * import {
 *     Disclosure,
 *     DisclosureHeader,
 *     DisclosureLabel,
 *     DisclosurePanel
 * } from '@adgytec/web-ui-components';
 *
 * <Disclosure>
 *     <DisclosureHeader
 *         label={<DisclosureLabel>Collapsible Section</DisclosureLabel>}
 *     />
 *     <DisclosurePanel>
 *         Detailed information displayed when expanded.
 *     </DisclosurePanel>
 * </Disclosure>
 * ```
 */
export const Disclosure: React.FC<DisclosureProps> = ({ ...props }) => {
    return (
        <AriaDisclosure
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["disclosure"], className)
            )}
            data-disclosure
        />
    );
};
