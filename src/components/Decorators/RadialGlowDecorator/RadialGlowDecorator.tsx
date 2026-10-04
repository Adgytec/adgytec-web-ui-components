import clsx from "clsx";
import type React from "react";
import styles from "./radialGlowDecorator.module.css";

/**
 * Predefined layout, blob placement, and motion variants for the {@link RadialGlowDecorator} component.
 *
 * - `"default"`: 3 static blobs (primary, secondary, tertiary) spread across the viewport.
 * - `"split"`: 2 static blobs separated left and right, ideal for two-column or split layouts.
 * - `"top-bar"`: 3 horizontal blobs aligned across the top fold or header area.
 * - `"corners"`: 4 static blobs anchored in each of the four screen corners.
 * - `"aurora"`: 4 organic floating blobs with continuous drift animation for atmospheric ambiance.
 * - `"spotlight"`: 3 centered, layered blobs with an organic pulsating scale animation.
 * - `"nebula"`: 4 orbiting and drifting blobs creating an immersive, fluid cosmic look.
 * - `"horizon"`: 3 bottom-anchored blobs with rising and pulsating motion for footers and page bottoms.
 * - `"spiral"`: 3 blobs following a circular orbiting path for dynamic centerpiece effects.
 */
export type RadialGlowDecoratorVariant =
    | "default"
    | "split"
    | "top-bar"
    | "corners"
    | "aurora"
    | "spotlight"
    | "nebula"
    | "horizon"
    | "spiral";

/**
 * Props for the {@link RadialGlowDecorator} component.
 */
export interface RadialGlowDecoratorProps {
    /**
     * Z-index layer depth for the decorator container.
     *
     * @default -10
     */
    zIndex?: number;

    /** Additional CSS class names to apply to the decorator container. */
    className?: string;

    /** Custom inline styles to apply to the decorator container. */
    style?: React.CSSProperties;

    /**
     * Predefined layout, blob placement, and animation variant.
     *
     * @default "default"
     */
    variant?: RadialGlowDecoratorVariant;
}

/**
 * A non-blocking decorative background component that renders smooth, theme-aware radial glow gradients.
 *
 * Layers multiple blurred color blobs to produce premium ambient lighting and background washes.
 * Automatically scales opacities between light and dark modes to ensure visual balance.
 * Spans the full page with `pointer-events: none` and `aria-hidden="true"`, ensuring no interference
 * with user interactions or accessibility trees.
 *
 * @example
 * ```tsx
 * import { RadialGlowDecorator } from '@adgytec/web-ui-components';
 *
 * // Static multi-color radial gradient
 * <RadialGlowDecorator variant="default" />
 *
 * // Continuous floating aurora animation with custom z-index
 * <RadialGlowDecorator variant="aurora" zIndex={-20} />
 *
 * // Centered pulsating spotlight for hero sections
 * <RadialGlowDecorator variant="spotlight" />
 * ```
 */
export const RadialGlowDecorator: React.FC<RadialGlowDecoratorProps> = ({
    zIndex = -10,
    className,
    style,
    variant = "default",
}) => {
    return (
        <div
            className={clsx(styles["container"], className)}
            aria-hidden="true"
            data-variant={variant}
            style={{ zIndex, ...style }}
        >
            {variant === "default" && (
                <>
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["default-primary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["default-secondary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["default-tertiary"]
                        )}
                    />
                </>
            )}
            {variant === "split" && (
                <>
                    <div
                        className={clsx(styles["blob"], styles["split-left"])}
                    />
                    <div
                        className={clsx(styles["blob"], styles["split-right"])}
                    />
                </>
            )}
            {variant === "top-bar" && (
                <>
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["top-bar-primary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["top-bar-secondary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["top-bar-tertiary"]
                        )}
                    />
                </>
            )}
            {variant === "corners" && (
                <>
                    <div
                        className={clsx(styles["blob"], styles["corner-tl"])}
                    />
                    <div
                        className={clsx(styles["blob"], styles["corner-tr"])}
                    />
                    <div
                        className={clsx(styles["blob"], styles["corner-bl"])}
                    />
                    <div
                        className={clsx(styles["blob"], styles["corner-br"])}
                    />
                </>
            )}
            {variant === "aurora" && (
                <>
                    <div className={clsx(styles["blob"], styles["aurora-1"])} />
                    <div className={clsx(styles["blob"], styles["aurora-2"])} />
                    <div className={clsx(styles["blob"], styles["aurora-3"])} />
                    <div className={clsx(styles["blob"], styles["aurora-4"])} />
                </>
            )}
            {variant === "spotlight" && (
                <>
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["spotlight-primary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["spotlight-secondary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["spotlight-tertiary"]
                        )}
                    />
                </>
            )}
            {variant === "nebula" && (
                <>
                    <div className={clsx(styles["blob"], styles["nebula-1"])} />
                    <div className={clsx(styles["blob"], styles["nebula-2"])} />
                    <div className={clsx(styles["blob"], styles["nebula-3"])} />
                    <div className={clsx(styles["blob"], styles["nebula-4"])} />
                </>
            )}
            {variant === "horizon" && (
                <>
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["horizon-primary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["horizon-secondary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["horizon-tertiary"]
                        )}
                    />
                </>
            )}
            {variant === "spiral" && (
                <>
                    <div className={clsx(styles["blob"], styles["spiral-1"])} />
                    <div className={clsx(styles["blob"], styles["spiral-2"])} />
                    <div className={clsx(styles["blob"], styles["spiral-3"])} />
                </>
            )}
        </div>
    );
};
