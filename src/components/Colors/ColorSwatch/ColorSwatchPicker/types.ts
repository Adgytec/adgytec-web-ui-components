import type { ColorSwatchPicker as AriaColorSwatchPicker } from "react-aria-components";
import type { BaseColorSwatchProps } from "../core";

/**
 * Props for the {@link ColorSwatchPicker} component.
 * Extends React Aria Components `ColorSwatchPicker` with Material 3 shape and sizing presets
 * propagated to child {@link ColorSwatch} elements via context.
 */
export interface ColorSwatchPickerProps
    extends React.ComponentPropsWithRef<typeof AriaColorSwatchPicker>,
        BaseColorSwatchProps {}
