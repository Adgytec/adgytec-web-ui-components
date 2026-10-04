import type { ReactNode } from "react";
import { ButtonContext, DEFAULT_SLOT, Provider } from "react-aria-components";
import {
    NavigationInfoContext,
    NavLabelContext,
    useNavigationInfo,
} from "../../core";
import { useNavigationState } from "../../NavigationState";

/**
 * Props for the [`SubNavigationTrigger`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/SubNavigation/SubNavigationTrigger/SubNavigationTrigger.tsx) component.
 */
export interface SubNavigationTriggerProps {
    /**
     * Unique state key used for referencing and animating this sub-navigation level.
     */
    stateID: string;

    /**
     * Child elements, typically an opening trigger button and a [`SubNavigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/SubNavigation/SubNavigation/SubNavigation.tsx) panel.
     */
    children?: ReactNode;

    /**
     * Text or node label passed down to the trigger button and child sub-navigation header.
     */
    label: ReactNode;
}

/**
 * Orchestrator component tying together an opening action button and its sliding
 * [`SubNavigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/SubNavigation/SubNavigation/SubNavigation.tsx) panel.
 *
 * Configures button click handlers to slide the sub-navigation panel into view, increments the
 * depth counter, and passes down the section label.
 *
 * @example
 * ```tsx
 * import {
 *     SubNavigationTrigger,
 *     NavigationButton,
 *     SubNavigation,
 *     NavigationLink,
 * } from "@adgytec/web-ui-components";
 * import { Settings } from "lucide-react";
 *
 * <SubNavigationTrigger stateID="settings" label="Settings">
 *     <NavigationButton icon={Settings} />
 *     <SubNavigation>
 *         <NavigationLink href="/settings/profile" label="Profile" />
 *     </SubNavigation>
 * </SubNavigationTrigger>
 * ```
 */
export const SubNavigationTrigger: React.FC<SubNavigationTriggerProps> = ({
    stateID,
    children,
    label,
}) => {
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
