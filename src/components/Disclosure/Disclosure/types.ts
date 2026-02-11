import type { ColorTheme } from "@/utils/types";
import type { ReactNode } from "react";

export interface DisclosureProps {
    id?: string;
    heading: string;
    children: ReactNode;
    triggerTheme?: ColorTheme;
}
