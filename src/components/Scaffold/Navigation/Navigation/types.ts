import type { ReactNode } from "react";

export type IsLinkActive = (href?: string) => boolean;
export type IsButtonActive = (prefix?: string) => boolean;

export interface NavigationProps extends React.ComponentPropsWithRef<"nav"> {
    label?: ReactNode;
    isLinkActive?: IsLinkActive;
    isButtonActive?: IsButtonActive;
    isInModal?: boolean;
}
