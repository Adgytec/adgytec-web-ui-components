import type { ColorSwatchPickerItem as AriaColorSwatchPickerItem } from "react-aria-components";

/**
 * Props for the {@link ColorSwatchPickerItem} component.
 * Extends React Aria Components `ColorSwatchPickerItem` with Material Design 3 state layer
 * animations, accessible focus indicators, and dynamic high-contrast selection checkmark rendering.
 */
export interface ColorSwatchPickerItemProps
    extends React.ComponentPropsWithRef<typeof AriaColorSwatchPickerItem> {}
