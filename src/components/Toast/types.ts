import type { ReactNode } from "react";
import type { CardBackground } from "../Card/BaseCard";

export type ToastProps = {
    background?: CardBackground;
    manuallyDismissable?: boolean;
    duration?: number;
    toasterID?: string;
    heading: string;
    description?: string;
    prefixIcon?: ReactNode;
};
