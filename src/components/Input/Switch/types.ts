import type { SwitchProps as AriaSwitchProps } from "react-aria-components";

export interface SwitchProps extends AriaSwitchProps {
    icon?: "none" | "selected" | "both";
    labelPlacement?: "start" | "end";
    containerStateLayer?: boolean;
}
