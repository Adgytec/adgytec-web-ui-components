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
