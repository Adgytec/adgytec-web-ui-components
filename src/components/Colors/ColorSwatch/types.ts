import type { ColorSwatch as AriaColorSwatch } from "react-aria-components";

/**
 * Size variants for {@link ColorSwatch}.
 *
 * Scale dimensions:
 * - `extra-small`: 20px x 20px (corner radius: 4px square / 10px round)
 * - `small`: 24px x 24px (corner radius: 8px square / 12px round) - default
 * - `medium`: 32px x 32px (corner radius: 12px square / 16px round)
 * - `large`: 40px x 40px (corner radius: 12px square / 20px round)
 * - `extra-large`: 48px x 48px (corner radius: 16px square / 24px round)
 */
export type ColorSwatchSize =
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large";

/**
 * Geometric shape variants for {@link ColorSwatch}.
 * - `round`: Fully rounded circular swatch (default).
 * - `square`: Rounded-corner rectangle adhering to Material Design 3 shape scale.
 */
export type ColorSwatchShape = "round" | "square";

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
