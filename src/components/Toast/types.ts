import type { ReactNode } from "react";
import type { CardBackground } from "../Card/BaseCard";

type BaseToastProps = {
    background?: CardBackground;
    manualDismissable?: boolean;
    duration?: number;
    toasterID?: string;
};

export interface DefaultToastProps extends BaseToastProps {
    type: "default";
    heading: string;
    description?: string;
    prefixIcon?: ReactNode;
}

export interface CustomToastProps extends BaseToastProps {
    type: "custom";
    children: ReactNode;
}

export type ToastProps = DefaultToastProps | CustomToastProps;
