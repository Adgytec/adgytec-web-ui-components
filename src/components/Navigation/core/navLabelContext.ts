import { createContext, type ReactNode } from "react";

export type NavLabelContextType = ReactNode;
export const NavLabelContext = createContext<NavLabelContextType>(undefined);
