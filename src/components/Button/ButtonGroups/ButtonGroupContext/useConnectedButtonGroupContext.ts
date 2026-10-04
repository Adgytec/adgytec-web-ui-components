import { useContext } from "react";
import { ConnectedButtonGroupContext } from "./context";

/**
 * Accesses the enclosing {@link ConnectedButtonGroupContext} values.
 *
 * @returns The configuration provided by the enclosing `ConnectedButtonGroup`. Defaults to small/round/filled if unnested.
 */
export function useConnectedButtonGroupContext() {
    return useContext(ConnectedButtonGroupContext);
}
