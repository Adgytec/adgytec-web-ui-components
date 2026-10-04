import { createContext } from "react";
import type { Typography } from "@/utils";

/**
 * Context value providing inherited typography styles for disclosure components within a group.
 */
export interface DisclosureTypographyContextValue {
    /** Typography applied to {@link DisclosureHeader} labels. */
    label?: Typography;
    /** Typography applied to {@link DisclosurePanel} content. */
    panel?: Typography;
}

/**
 * React Context used by {@link DisclosureGroup} to pass typography settings down to nested
 * {@link DisclosureHeader} and {@link DisclosurePanel} components.
 */
export const DisclosureTypographyContext =
    createContext<DisclosureTypographyContextValue>({});
