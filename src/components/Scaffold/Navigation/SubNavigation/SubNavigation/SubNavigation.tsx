import clsx from "clsx";
import { ArrowLeft } from "lucide-react";
import { type ReactNode, useContext } from "react";
import { useObjectRef } from "react-aria";
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

export const SubNavigation: React.FC<
    React.ComponentPropsWithRef<"nav"> & { label?: ReactNode }
> = ({ className, label, children, inert, ref, style, ...props }) => {
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
            )}
        </Transition>,
        container
    );
};
