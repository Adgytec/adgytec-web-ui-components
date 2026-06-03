import { createContext, useContext } from "react";

export const DialogContext = createContext<boolean | null>(null);

export function useInDialog() {
    return useContext(DialogContext) === true;
}
