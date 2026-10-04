import clsx from "clsx";
import type React from "react";
import styles from "./gridBackgroundDecorator.module.css";

/**
 * Visual pattern variants for the {@link GridBackgroundDecorator} component.
 *
 * - `"lines"`: Structured intersecting line grid pattern (default).
 * - `"dots"`: Subtle dotted matrix pattern.
 */
export type GridBackgroundDecoratorVariant = "lines" | "dots";

/**
 * Props for the {@link GridBackgroundDecorator} component.
 */
export interface GridBackgroundDecoratorProps {
    /**
     * Z-index layer depth for the decorator container.
     *
     * @default 0
     */
    zIndex?: number;

    /** Additional CSS class names to apply to the decorator container. */
    className?: string;

    /** Custom inline styles to apply to the decorator container. */
    style?: React.CSSProperties;

    /**
     * Grid cell spacing size in pixels.
     *
     * @default 40
     */
    gridSize?: number;

    /**
     * Visual grid style pattern.
     *
     * @default "lines"
     */
    variant?: GridBackgroundDecoratorVariant;
}

/**
 * A non-blocking background decorator that renders a structured grid of lines or dots.
 *
 * Spans the full page or parent container with `pointer-events: none` and `aria-hidden="true"`
 * so it provides visual depth without interfering with pointer events or assistive technology.
 *
 * @example
 * ```tsx
 * import { GridBackgroundDecorator } from '@adgytec/web-ui-components';
 *
 * // Standard intersecting grid line pattern
 * <GridBackgroundDecorator variant="lines" gridSize={40} />
 *
 * // Dot matrix grid pattern with custom z-index
 * <GridBackgroundDecorator variant="dots" gridSize={24} zIndex={-5} />
 * ```
 */
export const GridBackgroundDecorator: React.FC<
    GridBackgroundDecoratorProps
> = ({ zIndex = 0, className, style, gridSize = 40, variant = "lines" }) => {
    return (
        <div
            className={clsx(styles["container"], className)}
            aria-hidden="true"
            data-variant={variant}
            style={
                {
                    zIndex,
                    "--grid-size": `${gridSize}px`,
                    ...style,
                } as React.CSSProperties
            }
        />
    );
};
