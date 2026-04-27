import type { ButtonProps as AriaButtonProps } from "react-aria-components";

export interface SplitButtonTriggerProps
    extends Omit<AriaButtonProps, "children" | "className"> {
    tooltip?: string;
}
