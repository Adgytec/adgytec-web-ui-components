import clsx from "clsx";
import type React from "react";
import styles from "./radialGlowDecorator.module.css";

/**
 * Predefined layout and motion variants for the {@link RadialGlowDecorator} component.
 *
 * - `"default"`: Soft ambient multi-accent glow spread across the viewport.
 * - `"split"`: Dual glows separated across left and right screen edges.
 * - `"top-bar"`: Top-aligned header radiance flowing downward.
 * - `"corners"`: Four-corner ambient glows radiating inward.
 * - `"spotlight"`: Centered hero glow radiating from the upper center with subtle pulsation.
 * - `"horizon"`: Bottom-aligned radiance flowing upward for footers and page bottoms.
 * - `"aurora"`: Organic floating aurora radiance with continuous atmospheric drift.
 * - `"nebula"`: Cosmic orbiting radiance with gentle multi-stop drift.
 * - `"spiral"`: Orbiting fluid radiance following a circular path.
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
 * Color palette options for {@link RadialGlowDecorator}.
 *
 * - `"multi"`: Dynamically mixes primary, secondary, and tertiary theme tokens (default).
 * - `"primary"`: Uses only primary theme color tokens.
 * - `"secondary"`: Uses only secondary theme color tokens.
 * - `"tertiary"`: Uses only tertiary theme color tokens.
 */
export type RadialGlowDecoratorColor =
    | "multi"
    | "primary"
    | "secondary"
    | "tertiary";

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
     * Predefined layout and motion variant.
     *
     * @default "default"
     */
    variant?: RadialGlowDecoratorVariant;

    /**
     * Color palette mode for the glow gradients.
     *
     * @default "multi"
     */
    color?: RadialGlowDecoratorColor;
}

/**
 * A non-blocking decorative background component that renders smooth, theme-aware radial glow gradients.
 *
 * Renders hardware-accelerated CSS radial gradients derived from current Material Design 3 theme tokens
 * (`--md-sys-color-primary`, `--md-sys-color-secondary`, `--md-sys-color-tertiary`).
 * Automatically scales opacities between light and dark modes to ensure optimal visual contrast.
 * Spans the full viewport with `pointer-events: none` and `aria-hidden="true"`, ensuring no interference
 * with user interactions or accessibility trees.
 *
 * @example
 * ```tsx
 * import { RadialGlowDecorator } from '@adgytec/web-ui-components';
 *
 * // Ambient multi-color radial gradient
 * <RadialGlowDecorator variant="default" />
 *
 * // Centered spotlight in primary theme color
 * <RadialGlowDecorator variant="spotlight" color="primary" />
 *
 * // Continuous floating aurora animation
 * <RadialGlowDecorator variant="aurora" zIndex={-20} />
 * ```
 */
export const RadialGlowDecorator: React.FC<RadialGlowDecoratorProps> = ({
    zIndex = -10,
    className,
    style,
    variant = "default",
    color = "multi",
}) => {
    return (
        <div
            className={clsx(styles["container"], className)}
            aria-hidden="true"
            data-variant={variant}
            data-color={color}
            style={{ zIndex, ...style }}
        />
    );
};
