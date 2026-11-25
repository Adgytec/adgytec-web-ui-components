import type { ColorSwatchShape } from "./shape";
import type { ColorSwatchSize } from "./size";

/**
 * Common shape and sizing configuration properties shared across color swatch components.
 */
export interface BaseColorSwatchProps {
    /**
     * Shape preset for the color swatch container.
     *
     * @default "round"
     */
    shape?: ColorSwatchShape;

    /**
     * Sizing variant defining dimensions and corner radii.
     *
     * @default "small"
     */
    size?: ColorSwatchSize;
}
