import type { ColorSwatch as AriaColorSwatch } from "react-aria-components";
import type { BaseColorSwatchProps } from "../core";

/**
 * Props for the {@link ColorSwatch} component.
 * Extends React Aria Components `ColorSwatch` with custom Material 3 sizing and shape options.
 *
 * Configurable CSS tokens:
 * - `--md-color-swatch-size`: Overrides the computed size (width and height).
 * - `--md-color-swatch-shape`: Overrides the computed border-radius.
 */
export interface ColorSwatchProps
    extends React.ComponentPropsWithRef<typeof AriaColorSwatch>,
        BaseColorSwatchProps {}
