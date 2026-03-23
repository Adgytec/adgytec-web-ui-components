import type { ReactNode } from "react";
import type { ColorTheme } from "@/utils/types";

export interface DisclosureProps {
    id?: string;
    heading: string;
    children: ReactNode;
    triggerTheme?: ColorTheme;
}
