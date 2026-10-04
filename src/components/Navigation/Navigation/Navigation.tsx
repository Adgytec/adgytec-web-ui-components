import clsx from "clsx";
import { X } from "lucide-react";
import { useContext, useState } from "react";
import { Header, Heading, Provider } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { useInDialog } from "@/components/Dialog";
import { typography } from "@/utils";
import {
    NavigationHeaderStyles,
    NavigationInfoContext,
    NavigationStyles,
} from "../core";
import { NavigationScrollContainer } from "../NavigationScrollContainer";
import {
    NavigationState,
    NavigationStateContext,
    useNavigationState,
} from "../NavigationState";
import { NavigationContext } from "./navContext";
import styles from "./navigation.module.css";
import { NavigationRenderingContext } from "./navRenderingContext";
import type { NavigationProps } from "./types";

const Nav: React.FC<NavigationProps> = ({
    label,
    children,
    className,
    isLinkActive,
    isButtonActive,
    stateID = "__root__",
    inert,
    style,
    containerClassName,
    ...props
}) => {
    const depth = 0;

    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const { isInert } = useNavigationState();

    const isInModal = useInDialog();
    const renderHeader = isInModal || !!label || false;

    return (
        <Provider
            values={[
                [NavigationRenderingContext, { container }],
                [NavigationContext, { isLinkActive, isButtonActive }],
                [NavigationInfoContext, { id: stateID, depth }],
            ]}
        >
            <div
                ref={setContainer}
                className={clsx(styles["container"], containerClassName)}
            >
                <nav
                    className={clsx(NavigationStyles, className)}
                    {...props}
                    data-header={renderHeader || undefined}
                    style={{
                        ...style,
                        zIndex: depth + 1,
                    }}
                    inert={inert ?? isInert(depth)}
                    data-modal={isInModal || undefined}
                >
                    {renderHeader && (
                        <Header className={clsx(NavigationHeaderStyles)}>
                            {label && (
                                <Heading
                                    className={clsx(typography.titleLarge)}
                                    data-heading
                                >
                                    {label}
                                </Heading>
                            )}

                            {isInModal && (
                                <IconButton
                                    icon={X}
                                    color="standard"
                                    slot="close"
                                    data-close-button
                                />
                            )}
                        </Header>
                    )}

                    <NavigationScrollContainer>
                        {children}
                    </NavigationScrollContainer>
                </nav>
            </div>
        </Provider>
    );
};

/**
 * Main layout container for application navigation following Material Design 3 guidelines.
 *
 * Coordinates navigation header titles, dialog/drawer modal close buttons, scroll position synchronization,
 * and context providers for link/button active states and portal-rendered sub-navigation panels.
 * Automatically provides a [`NavigationState`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationState/NavigationState.tsx)
 * if not already nested within one.
 *
 * @example
 * ```tsx
 * import {
 *     Navigation,
 *     NavigationSection,
 *     NavigationLink,
 * } from "@adgytec/web-ui-components";
 * import { Home, Settings } from "lucide-react";
 *
 * <Navigation
 *     label="Dashboard"
 *     isLinkActive={(href) => window.location.pathname === href}
 * >
 *     <NavigationSection>
 *         <NavigationLink href="/" label="Home" icon={Home} />
 *         <NavigationLink href="/settings" label="Settings" icon={Settings} />
 *     </NavigationSection>
 * </Navigation>
 * ```
 */
export const Navigation: React.FC<NavigationProps> = (props) => {
    const navStateCtx = useContext(NavigationStateContext);

    if (navStateCtx === null) {
        return (
            <NavigationState>
                <Nav {...props} />
            </NavigationState>
        );
    }

    return <Nav {...props} />;
};
