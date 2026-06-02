import clsx from "clsx";
import { X } from "lucide-react";
import { useContext, useState } from "react";
import { useId } from "react-aria";
import { Header, Heading, Provider } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { typography } from "@/utils";
import { NavigationInfoContext } from "../core";
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
    isInModal,
    id,
    inert,
    ...props
}) => {
    const navID = useId(id);
    const depth = 0;

    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const navStateCtx = useNavigationState();

    const renderHeader = isInModal || !!label || false;

    return (
        <Provider
            values={[
                [NavigationRenderingContext, container],
                [NavigationContext, { isLinkActive, isButtonActive }],
                [NavigationInfoContext, { id: navID, depth: depth }],
            ]}
        >
            <div ref={setContainer} className={clsx(styles["container"])}>
                <nav
                    className={clsx(className)}
                    {...props}
                    data-header={renderHeader || undefined}
                    style={{
                        zIndex: depth + 1,
                    }}
                    inert={inert ?? navStateCtx.isInert(depth)}
                >
                    {renderHeader && (
                        <Header>
                            {label && (
                                <Heading
                                    className={clsx(typography.titleLarge)}
                                >
                                    {label}
                                </Heading>
                            )}

                            {isInModal && (
                                <IconButton
                                    icon={X}
                                    color="standard"
                                    slot="close"
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
