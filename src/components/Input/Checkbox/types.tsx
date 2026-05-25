import type { ReactNode } from "react";
import type { Checkbox, CheckboxGroup } from "react-aria-components";
import type { CoreInputProps } from "../core";

export type CheckboxLabelPlacement = "start" | "end";

export interface CheckboxGroupProps
    extends Omit<React.ComponentPropsWithRef<typeof CheckboxGroup>, "children">,
        CoreInputProps {
    children?: ReactNode;
    checkboxItemsGap?: number;
    labelPlacement?: CheckboxLabelPlacement;
    containerStateLayer?: boolean;
}

export interface CheckboxProps
    extends React.ComponentPropsWithRef<typeof Checkbox> {
    labelPlacement?: CheckboxLabelPlacement;
    containerStateLayer?: boolean;
}
