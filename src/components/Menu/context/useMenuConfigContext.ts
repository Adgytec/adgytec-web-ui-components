import { useContext } from "react";
import { MenuConfigContext } from "./context";

/**
 * Hook to access the current menu configuration (`color` and `layout`) provided by an ancestor
 * [`MenuTrigger`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuTrigger/MenuTrigger.tsx).
 *
 * @returns The current {@link MenuConfigContextValue}.
 */
export function useMenuConfigContext() {
    return useContext(MenuConfigContext);
}
