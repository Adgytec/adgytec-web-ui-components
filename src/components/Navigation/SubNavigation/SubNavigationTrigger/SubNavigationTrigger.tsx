import type { ReactNode } from "react";
import { ButtonContext, DEFAULT_SLOT, Provider } from "react-aria-components";
import {
    NavigationInfoContext,
    NavLabelContext,
    useNavigationInfo,
} from "../../core";
import { useNavigationState } from "../../NavigationState";

export const SubNavigationTrigger: React.FC<{
    stateID: string;
    children?: ReactNode;
    label: ReactNode;
}> = ({ stateID, children, label }) => {
    const parentInfo = useNavigationInfo();
    const { openSubNavigation, closeSubNavigation, isSubNavigationOpen } =
        useNavigationState();

    const subNavID = `${parentInfo.id}--${stateID}`;
    const depth = parentInfo.depth + 1;

    return (
        <Provider
            values={[
                [NavLabelContext, label],
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
