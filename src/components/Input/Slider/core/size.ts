import styles from "./size.module.css";

/**
 * Size presets for slider track height and thumb diameter.
 */
export type SliderSize =
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large";

/** Base CSS class for the slider container. */
export const SliderStyles = styles["slider"];

/** CSS class for the track wrapper container. */
export const TrackContainerStyles = styles["track-container"];

/** CSS class for the interactive slider track. */
export const TrackStyles = styles["track"];

/**
 * Resolves the CSS module class for a given slider size preset.
 *
 * @param size - The desired slider size preset.
 * @returns The corresponding CSS class name.
 */
export function SliderSizeStyles(size: SliderSize) {
    return styles[size];
}
