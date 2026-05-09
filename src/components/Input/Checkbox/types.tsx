import type { ReactNode } from "react";
import type {
    CheckboxGroupProps as AriaCheckboxGroupProps,
    CheckboxProps as AriaCheckboxProps,
} from "react-aria-components";
import type { CoreInputProps } from "../core";

export type CheckboxLabelPlacement = "start" | "end";

export interface CheckboxGroupProps
    extends Omit<AriaCheckboxGroupProps, "children">,
        CoreInputProps {
    children?: ReactNode;
    checkboxItemsGap?: number;
    labelPlacement?: CheckboxLabelPlacement;
    containerStateLayer?: boolean;
}

export interface CheckboxProps extends AriaCheckboxProps {
    labelPlacement?: CheckboxLabelPlacement;
    containerStateLayer?: boolean;
}
