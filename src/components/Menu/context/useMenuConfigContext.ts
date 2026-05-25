import { useContext } from "react";
import { MenuConfigContext } from "./context";

export function useMenuConfigContext() {
    return useContext(MenuConfigContext);
}
