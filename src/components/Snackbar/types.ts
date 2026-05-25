import type { ReactNode } from "react";

export type SnackbarContent = {
    hideCloseAction?: boolean;
    supportingText: ReactNode;
    action?: ReactNode;
};

export interface SnackbarRegionProps {
    children?: ReactNode;
    maxVisibleSnackbars?: number;
}
