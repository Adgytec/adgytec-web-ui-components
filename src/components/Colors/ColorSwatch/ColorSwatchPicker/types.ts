import type { ColorSwatchPicker } from "react-aria-components";
import type { BaseColorSwatchProps } from "../core";

export interface ColorSwatchPickerProps
    extends React.ComponentPropsWithRef<typeof ColorSwatchPicker>,
        BaseColorSwatchProps {}
