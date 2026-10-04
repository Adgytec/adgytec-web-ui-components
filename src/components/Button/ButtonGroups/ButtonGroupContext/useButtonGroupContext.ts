import { useContext } from "react";
import { ButtonGroupContext } from "./context";

/**
 * Accesses the enclosing {@link ButtonGroupContext} values.
 *
 * @returns The inherited configuration from the nearest ancestor `ButtonGroup`, or an empty object if unnested.
 */
export function useButtonGroupContext() {
    return useContext(ButtonGroupContext);
}
