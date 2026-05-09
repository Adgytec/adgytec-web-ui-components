import type { ReactNode } from "react";
import type {
    RadioGroupProps as AriaRadioGroupProps,
    RadioProps as AriaRadioProps,
} from "react-aria-components";
import type { CoreInputProps } from "../core";

export type RadioLabelPlacement = "start" | "end";

export interface RadioGroupProps
    extends Omit<AriaRadioGroupProps, "children">,
        CoreInputProps {
    children?: ReactNode;
    radioItemsGap?: number;
    labelPlacement?: RadioLabelPlacement;
    containerStateLayer?: boolean;
}

export interface RadioProps extends AriaRadioProps {
    labelPlacement?: RadioLabelPlacement;
    containerStateLayer?: boolean;
}
