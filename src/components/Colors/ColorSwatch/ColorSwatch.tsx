import clsx from "clsx";
import {
    ColorSwatch as AriaColorSwatch,
    composeRenderProps,
} from "react-aria-components";
import styles from "./colorSwatch.module.css";
import type { ColorSwatchProps } from "./types";

/**
 * A preview swatch component for displaying a single color sample or color channel representation.
 *
 * Built on React Aria's `ColorSwatch` with support for Material Design 3 sizing scale,
 * round and square shapes, and transparent checkerboard background rendering for semi-transparent colors.
 * Automatically inherits color values when placed within a `ColorField`, `ColorPicker`, or `ColorArea` context,
 * or can be passed an explicit `color` prop.
 *
 * Configurable CSS tokens:
 * - `--md-color-swatch-size`: Overrides the swatch width and height.
 * - `--md-color-swatch-shape`: Overrides the swatch border-radius.
 *
 * @example
 * ```tsx
 * import { ColorSwatch } from "@adgytec/web-ui-components";
 *
 * // Standalone round swatch with explicit hex color
 * <ColorSwatch color="#6750a4" size="medium" shape="round" />
 * ```
 *
 * @example
 * ```tsx
 * // Square swatch embedded in a ColorField via FieldNode
 * import { ColorField, ColorSwatch, FieldNode } from "@adgytec/web-ui-components";
 *
 * <ColorField
 *     label="Accent Color"
 *     defaultValue="#ffd700"
 *     leading={
 *         <FieldNode>
 *             <ColorSwatch size="small" shape="square" />
 *         </FieldNode>
 *     }
 * />
 * ```
 */
export const ColorSwatch: React.FC<ColorSwatchProps> = ({
    size = "small",
    shape = "round",
    ...props
}) => {
    return (
        <AriaColorSwatch
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["swatch"], styles[shape], styles[size], className)
            )}
            data-shape={shape}
            data-size={size}
        />
    );
};
