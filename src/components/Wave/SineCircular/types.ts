import type { SineWaveBaseProps } from "../core";

/**
 * Props for the circular {@link SineCircular} wave component.
 *
 * Configures an animated sine wave modulated along a circular arc or full closed loop.
 */
export interface SineWaveCircularProps extends SineWaveBaseProps {
    /**
     * Width and height of the circular SVG container in pixels.
     *
     * @default 48
     */
    size?: number;

    /**
     * Radial space reserved for the wave oscillation amplitude in pixels.
     * Keeps the base ring radius consistent even when amplitude dynamically varies or fades.
     * Defaults to `amplitude`.
     */
    maxAmplitude?: number;

    /**
     * Starting point of the circular arc measured in turns.
     * `0` corresponds to 12 o'clock (top), `0.25` to 3 o'clock, `0.5` to 6 o'clock, and `1` completes one full rotation.
     *
     * @default 0
     */
    start?: number;

    /**
     * Ending point of the circular arc measured in turns.
     * When `end - start >= 0.999`, the arc is closed into a complete circle.
     *
     * @default 1
     */
    end?: number;
}
