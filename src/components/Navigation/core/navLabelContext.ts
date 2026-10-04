import { createContext, type ReactNode } from "react";

/**
 * Context value representing the label inherited from a parent navigation trigger.
 */
export type NavLabelContextType = ReactNode;

/**
 * React context providing the trigger label to descendant navigation items or sub-navigation panels.
 */
export const NavLabelContext = createContext<NavLabelContextType>(undefined);
