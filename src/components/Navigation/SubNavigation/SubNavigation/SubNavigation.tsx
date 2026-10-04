import clsx from "clsx";
import { ArrowLeft } from "lucide-react";
import { type ReactNode, useContext } from "react";
import { FocusScope, useObjectRef } from "react-aria";
import { Header, Heading } from "react-aria-components";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";
import { IconButton } from "@/components/Button";
import { useInDialog } from "@/components/Dialog";
import { typography } from "@/utils";
import {
    NavigationStyles,
    NavLabelContext,
    SubNavigationHeaderStyles,
    useNavigationInfo,
} from "../../core";
import { useNavigationContainer } from "../../Navigation";
import { NavigationScrollContainer } from "../../NavigationScrollContainer";
import { useNavigationState } from "../../NavigationState";

/**
 * Props for the [`SubNavigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/SubNavigation/SubNavigation/SubNavigation.tsx) component.
 */
export interface SubNavigationProps extends React.ComponentPropsWithRef<"nav"> {
    /**
     * Heading title displayed at the top of the sub-navigation panel.
     * If omitted, inherits the label provided to the ancestor
     * [`SubNavigationTrigger`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/SubNavigation/SubNavigationTrigger/SubNavigationTrigger.tsx).
     */
    label?: ReactNode;
}

/**
 * Secondary sliding navigation panel rendered into the root navigation container via a React Portal.
 *
 * Provides a dedicated header with an animated back button, accessible focus containment via `FocusScope`,
 * slide-in transition animations, and independent scroll position synchronization.
 *
 * @example
 * ```tsx
 * import {
 *     SubNavigationTrigger,
 *     NavigationButton,
 *     SubNavigation,
 *     NavigationLink,
 * } from "@adgytec/web-ui-components";
 * import { Folder, Plus } from "lucide-react";
 *
 * <SubNavigationTrigger stateID="projects" label="Projects">
 *     <NavigationButton icon={Folder} />
 *     <SubNavigation>
 *         <NavigationLink href="/projects/new" label="New Project" icon={Plus} />
 *     </SubNavigation>
 * </SubNavigationTrigger>
 * ```
 */
export const SubNavigation: React.FC<SubNavigationProps> = ({
    className,
    label,
    children,
    inert,
    ref,
    style,
    ...props
}) => {
    const subNavRef = useObjectRef(ref);

    const isInModal = useInDialog();

    const { id, depth } = useNavigationInfo();
    const { isInert, isSubNavigationOpen } = useNavigationState();
    const { container } = useNavigationContainer();

    const triggerLabel = useContext(NavLabelContext);
    const headerLabel = label ?? triggerLabel;

    if (container === null) return null;

    return createPortal(
        <Transition
            nodeRef={subNavRef}
            timeout={{
                enter: 0,
                exit: 150,
            }}
            in={isSubNavigationOpen(id)}
            mountOnEnter
            unmountOnExit
        >
            {(status) => (
                <FocusScope restoreFocus>
                    <nav
                        ref={subNavRef}
                        className={clsx(NavigationStyles, className)}
                        {...props}
                        style={{
                            ...style,
                            zIndex: depth + 1,
                        }}
                        inert={inert ?? isInert(depth)}
                        data-header={true}
                        data-status={status}
                        data-sub-nav={true}
                        data-modal={isInModal || undefined}
                    >
                        <Header className={clsx(SubNavigationHeaderStyles)}>
                            <IconButton
                                icon={ArrowLeft}
                                color="standard"
                                slot="close"
                                data-close-button
                            />

                            {headerLabel && (
                                <Heading
                                    className={clsx(typography.titleLarge)}
                                    data-heading
                                >
                                    {headerLabel}
                                </Heading>
                            )}
                        </Header>

                        <NavigationScrollContainer>
                            {children}
                        </NavigationScrollContainer>
                    </nav>
                </FocusScope>
            )}
        </Transition>,
        container
    );
};
