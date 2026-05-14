import styles from "./size.module.css";

export type SliderSize =
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large";

export const SliderStyles = styles["slider"];
export const TrackStyles = styles["track"];

export function SliderSizeStyles(size: SliderSize) {
    return styles[size];
}
