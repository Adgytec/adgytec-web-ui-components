import { useContext } from "react";
import { SplitButtonContext } from "./context";

export function useSplitButtonContext() {
    return useContext(SplitButtonContext);
}
