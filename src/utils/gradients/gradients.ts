import styles from "./gradients.module.css";

export const gradientStyles = {
    // 1. Ambient Diagonal Gradients (Very Low Opacity)
    AmbientPrimary: styles["gradient-ambient-primary"],
    AmbientSecondary: styles["gradient-ambient-secondary"],
    AmbientTertiary: styles["gradient-ambient-tertiary"],
    AmbientAlt: styles["gradient-ambient-alt"],

    // 2. Split Tint Top-Glow (Vertical Accent)
    GlowPrimary: styles["gradient-glow-primary"],
    GlowSecondary: styles["gradient-glow-secondary"],
    GlowTertiary: styles["gradient-glow-tertiary"],
    GlowAlt: styles["gradient-glow-alt"],

    // 3. Subtle Corner Radial Glows
    CornerPrimary: styles["gradient-corner-primary"],
    CornerSecondary: styles["gradient-corner-secondary"],
    CornerTertiary: styles["gradient-corner-tertiary"],
    CornerAlt: styles["gradient-corner-alt"],

    // 4. Monochromatic Surface Lusters (Colorless)
    LusterSoft: styles["gradient-luster-soft"],
    LusterMetallic: styles["gradient-luster-metallic"],
    LusterDeep: styles["gradient-luster-deep"],
} as const;
