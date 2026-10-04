import styles from "./variant.module.css";

/**
 * Functional slider track variants.
 *
 * - `"standard"`: Single thumb sliding from minimum to maximum.
 * - `"centered"`: Single thumb sliding bidirectional deviations from center (zero/neutral point).
 * - `"range"`: Two thumbs selecting a range interval between lower and upper bounds.
 */
export type SliderVariant = "standard" | "centered" | "range";

/** CSS class for visual track background. */
export const VisualTrackStyles = styles["visual-track"];

/** CSS class for the active/highlighted portion of the slider track. */
export const ActiveTrackStyles = styles["active-track"];

/** CSS class for the inactive/unselected portion of the slider track. */
export const InactiveTrackStyles = styles["inactive-track"];
