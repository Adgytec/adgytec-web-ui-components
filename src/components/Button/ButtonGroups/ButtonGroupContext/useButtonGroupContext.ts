import { useContext } from "react";
import { ButtonGroupContext } from "./context";

export function useButtonGroupContext() {
    return useContext(ButtonGroupContext);
}
