import { useContext } from "react";
import { SplitButtonContext } from "./context";

/**
 * Accesses the enclosing {@link SplitButtonContext} state.
 *
 * @returns The configuration and state provided by the nearest parent `SplitButton`. Defaults to small/filled if unnested.
 */
export function useSplitButtonContext() {
    return useContext(SplitButtonContext);
}
