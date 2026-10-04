import clsx from "clsx";
import { Disclosure as AriaDisclosure } from "react-aria-components";
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
 * Manages open/collapsed state, accessible ARIA attributes (`aria-expanded`, `aria-controls`), and keyboard navigation.
 *
 * @example
 * ```tsx
 * import { Disclosure, DisclosureHeader, DisclosurePanel } from '@adgytec/web-ui-components';
 *
 * <Disclosure>
 *     <DisclosureHeader>Collapsible Section</DisclosureHeader>
 *     <DisclosurePanel>
 *         Detailed information displayed when expanded.
 *     </DisclosurePanel>
 * </Disclosure>
 * ```
 */
export const Disclosure: React.FC<DisclosureProps> = ({
    className,
    ...props
}) => {
    return (
        <AriaDisclosure
            className={(renderProps) =>
                clsx(
                    styles["disclosure"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
