import type { ColorSwatch as AriaColorSwatch } from "react-aria-components";
import type { ColorSwatchShape, ColorSwatchSize } from "../core";

/**
 * Props for the {@link ColorSwatch} component.
 * Extends React Aria Components `ColorSwatch` with custom Material 3 sizing and shape options.
 *
 * Configurable CSS tokens:
 * - `--md-color-swatch-size`: Overrides the computed size (width and height).
 * - `--md-color-swatch-shape`: Overrides the computed border-radius.
 */
export interface ColorSwatchProps
    extends React.ComponentPropsWithRef<typeof AriaColorSwatch> {
    /**
     * Sizing variant defining dimensions and corner radii.
     *
     * @default "small"
     */
    size?: ColorSwatchSize;

    /**
     * Shape preset for the color swatch container.
     *
     * @default "round"
     */
    shape?: ColorSwatchShape;
}
