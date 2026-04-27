import type { ReactNode } from "react";
import type { MenuTriggerProps as AriaMenuTriggerProps } from "react-aria-components";

export interface MenuTriggerProps extends AriaMenuTriggerProps {
    triggerElement: ReactNode;
}
