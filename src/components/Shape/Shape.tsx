import clsx from "clsx";
import styles from "./shape.module.css";
import type { ShapeProps } from "./types";

/**
 * A component that renders or masks elements with Material Design 3 expressive shapes.
 *
 * Sourced from Material Design 3 Expressive and Beer CSS, this component applies an SVG
 * mask over its content and background, supporting all 35 expressive shapes.
 *
 * Sizing is determined by the dimensions of its children while maintaining a 1:1 aspect ratio.
 *
 * Configurable CSS tokens:
 * - `--md-shape-color`: Background color of the shape (defaults to `currentColor`).
 * - `--md-shape-rotate-duration`: Duration for one full rotation when `rotate` is enabled (defaults to `4s`).
 *
 * @see https://github.com/beercss/beercss/blob/main/docs/SHAPE.md
 * @see https://m3.material.io/styles/shape/overview
 *
 * @example
 * ```tsx
 * import { Shape } from "@adgytec/web-ui-components";
 *
 * // Shape sized by children
 * <Shape name="heart" style={{ color: "var(--md-sys-color-primary)" }}>
 *     <div style={{ width: 48, height: 48 }} />
 * </Shape>
 *
 * // Shape masking an image sized by the child image
 * <Shape name="flower">
 *     <img
 *         src="photo.jpg"
 *         alt="Flower portrait"
 *         style={{ width: 120, height: 120, objectFit: "cover" }}
 *     />
 * </Shape>
 * ```
 */
export const Shape: React.FC<ShapeProps> = ({
    name,
    className,
    rotate = false,
    rotateDuration = 4,
    style,
    ...props
}) => {
    return (
        <div
            className={clsx(styles["shape"], className)}
            data-shape={name}
            data-rotate={rotate || undefined}
            style={
                {
                    ...(rotate && {
                        "--_md-shape-rotate-duration": `calc(${rotateDuration} * 1s)`,
                    }),
                    ...style,
                } as React.CSSProperties
            }
            {...props}
        />
    );
};
