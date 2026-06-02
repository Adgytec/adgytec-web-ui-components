import clsx from "clsx";
import { ArrowLeft } from "lucide-react";
import { type ReactNode, useContext } from "react";
import { useObjectRef } from "react-aria";
import { Header, Heading } from "react-aria-components";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";
import { IconButton } from "@/components/Button";
import { typography } from "@/utils";
import { NavLabelContext, useNavigationInfo } from "../../core";
import { useNavigationContainer } from "../../Navigation";
import { NavigationScrollContainer } from "../../NavigationScrollContainer";
import { useNavigationState } from "../../NavigationState";

export const SubNavigation: React.FC<
    React.ComponentPropsWithRef<"nav"> & { label?: ReactNode }
> = ({ className, label, children, inert, ref, style, ...props }) => {
    const subNavRef = useObjectRef(ref);

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
                    className={clsx(className)}
                    {...props}
                    style={{
                        ...style,
                        zIndex: depth + 1,
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "darkseagreen",
                    }}
                    inert={inert ?? isInert(depth)}
                    data-header={true}
                    data-status={status}
                >
                    <Header>
                        <IconButton
                            icon={ArrowLeft}
                            color="standard"
                            slot="close"
                        />

                        {headerLabel && (
                            <Heading className={clsx(typography.titleLarge)}>
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
