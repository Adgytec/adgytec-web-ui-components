import type { ReactNode } from "react";
import type { Radio, RadioGroup } from "react-aria-components";
import type { CoreInputProps } from "../core";

export type RadioLabelPlacement = "start" | "end";

export interface RadioGroupProps
    extends Omit<React.ComponentPropsWithRef<typeof RadioGroup>, "children">,
        CoreInputProps {
    children?: ReactNode;
    radioItemsGap?: number;
    labelPlacement?: RadioLabelPlacement;
    containerStateLayer?: boolean;
}

export interface RadioProps extends React.ComponentPropsWithRef<typeof Radio> {
    labelPlacement?: RadioLabelPlacement;
    containerStateLayer?: boolean;
}
