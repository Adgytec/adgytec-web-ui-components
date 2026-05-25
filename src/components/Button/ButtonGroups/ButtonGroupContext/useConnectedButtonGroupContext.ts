import { useContext } from "react";
import { ConnectedButtonGroupContext } from "./context";

export function useConnectedButtonGroupContext() {
    return useContext(ConnectedButtonGroupContext);
}
