import type { ReactNode } from "react";
import { ButtonContext, DEFAULT_SLOT, Provider } from "react-aria-components";
import { NavigationInfoContext, useNavigationInfo } from "../../core";
import { useNavigationState } from "../../NavigationState";

export const SubNavigationTrigger: React.FC<{
    id: string;
    children?: ReactNode;
}> = ({ id, children }) => {
    const parentInfo = useNavigationInfo();
    const { openSubNavigation, closeSubNavigation, isSubNavigationOpen } =
        useNavigationState();

    const subNavID = `${parentInfo.id}--${id}`;
    const depth = parentInfo.depth + 1;

    return (
        <Provider
            values={[
                [NavigationInfoContext, { id: subNavID, depth }],
                [
                    ButtonContext,
                    {
                        slots: {
                            [DEFAULT_SLOT]: {},
                            open: {
                                onPress: () => {
                                    openSubNavigation(subNavID, depth);
                                },
                                isPressed: isSubNavigationOpen(subNavID),
                            },
                            close: {
                                onPress: () => {
                                    closeSubNavigation(subNavID);
                                },
                            },
                        },
                    },
                ],
            ]}
        >
            {children}
        </Provider>
    );
};
