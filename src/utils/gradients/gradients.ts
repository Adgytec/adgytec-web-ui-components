import styles from "./gradients.module.css";

/**
 * A curated set of subtle card background gradient CSS class names that automatically
 * adapt to light and dark theme modes using Material You CSS Custom Properties.
 *
 * Designed specifically for surface containers and cards to provide visual depth
 * without affecting text readability or distracting the user.
 *
 * Gradients are grouped into four categories:
 * - **Ambient Diagonal Gradients**: Soft, low-opacity diagonal blends between theme colors.
 * - **Split Tint Top-Glow**: Vertical accent glows concentrated along the top edge.
 * - **Subtle Corner Radial Glows**: Dual-corner radial glow accents.
 * - **Monochromatic Surface Lusters**: Colorless lusters leveraging surface container elevation levels.
 *
 * @example
 * ```tsx
 * import { gradientStyles } from '@adgytec/web-ui-components';
 * import clsx from 'clsx';
 *
 * function CardComponent() {
 *     return (
 *         <div className={clsx('card-base', gradientStyles.AmbientPrimary)}>
 *             <h3>Card Title</h3>
 *             <p>This card background uses a soft, ambient primary-to-secondary gradient.</p>
 *         </div>
 *     );
 * }
 * ```
 */
export const gradientStyles = {
    // 1. Ambient Diagonal Gradients (Very Low Opacity)

    /**
     * Soft, diagonal Primary (10%) to Secondary (7%) color blend.
     *
     * Linear gradient at 135deg with surface container fallback and theme color contrast.
     */
    AmbientPrimary: styles["gradient-ambient-primary"],

    /**
     * Soft, diagonal Secondary (10%) to Tertiary (7%) color blend.
     *
     * Linear gradient at 135deg with surface container fallback and theme color contrast.
     */
    AmbientSecondary: styles["gradient-ambient-secondary"],

    /**
     * Soft, diagonal Tertiary (10%) to Primary-Alt (7%) color blend.
     *
     * Linear gradient at 135deg with surface container fallback and theme color contrast.
     */
    AmbientTertiary: styles["gradient-ambient-tertiary"],

    /**
     * Soft, diagonal Primary-Alt (10%) to Primary (7%) color blend.
     *
     * Linear gradient at 135deg with surface container fallback and theme color contrast.
     */
    AmbientAlt: styles["gradient-ambient-alt"],

    // 2. Split Tint Top-Glow (Vertical Accent)

    /**
     * Vertical accent glow concentrating Primary (12% to 3%) color at the top edge.
     *
     * Linear gradient at 180deg providing a subtle backlit header effect.
     */
    GlowPrimary: styles["gradient-glow-primary"],

    /**
     * Vertical accent glow concentrating Secondary (12% to 3%) color at the top edge.
     *
     * Linear gradient at 180deg providing a subtle backlit header effect.
     */
    GlowSecondary: styles["gradient-glow-secondary"],

    /**
     * Vertical accent glow concentrating Tertiary (12% to 3%) color at the top edge.
     *
     * Linear gradient at 180deg providing a subtle backlit header effect.
     */
    GlowTertiary: styles["gradient-glow-tertiary"],

    /**
     * Vertical accent glow concentrating Primary-Alt (12% to 3%) color at the top edge.
     *
     * Linear gradient at 180deg providing a subtle backlit header effect.
     */
    GlowAlt: styles["gradient-glow-alt"],

    // 3. Subtle Corner Radial Glows

    /**
     * Subtle dual corner radial glow with top-left Primary (11%) and bottom-right Secondary (8%).
     */
    CornerPrimary: styles["gradient-corner-primary"],

    /**
     * Subtle dual corner radial glow with top-left Secondary (11%) and bottom-right Tertiary (8%).
     */
    CornerSecondary: styles["gradient-corner-secondary"],

    /**
     * Subtle dual corner radial glow with top-left Tertiary (11%) and bottom-right Primary-Alt (8%).
     */
    CornerTertiary: styles["gradient-corner-tertiary"],

    /**
     * Subtle dual corner radial glow with top-left Primary-Alt (11%) and bottom-right Primary (8%).
     */
    CornerAlt: styles["gradient-corner-alt"],

    // 4. Monochromatic Surface Lusters (Colorless)

    /**
     * Subtle top-to-bottom surface container monochromatic gradient.
     */
    LusterSoft: styles["gradient-luster-soft"],

    /**
     * Sleek diagonal surface container metallic-like monochromatic luster gradient.
     */
    LusterMetallic: styles["gradient-luster-metallic"],

    /**
     * Deeper monochromatic luster gradient transitioning from high to lowest surface container levels.
     */
    LusterDeep: styles["gradient-luster-deep"],
} as const;

/**
 * Union of all gradient style variant keys in {@link gradientStyles}.
 */
export type GradientStyleKey = keyof typeof gradientStyles;

/**
 * Union of all gradient style CSS class name values in {@link gradientStyles}.
 */
export type GradientStyleClass = (typeof gradientStyles)[GradientStyleKey];
