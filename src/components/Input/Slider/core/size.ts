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

/** Base CSS class for the slider container (`inline-size: 100%`, flex column layout). */
export const SliderStyles = styles["slider"];

/** CSS class for the track wrapper container. */
export const TrackContainerStyles = styles["track-container"];

/**
 * CSS class for the interactive slider track.
 * Enforces minimum track dimensions of 128px (`min-inline-size: 128px` for horizontal,
 * `min-block-size: 128px` for vertical) to prevent collapsing in dense layouts.
 */
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
