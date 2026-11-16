import type { SineWaveBaseProps } from "../core";

/**
 * Props for the {@link SineLinear} component.
 *
 * Inherits shared wave properties (amplitude, wavelength, strokeWidth, strokeColor, speed)
 * from {@link SineWaveBaseProps} and adds track sizing and segment windowing controls.
 */
export interface SineLinearProps extends SineWaveBaseProps {
    /**
     * Total width of the track container in pixels.
     * Used to compute segment boundaries and coordinate mapping.
     */
    width: number;

    /**
     * Reserved maximum wave amplitude (peak height) in pixels.
     * Keeps the SVG bounding box constant (`2 * maxAmplitude + strokeWidth`) even when
     * `amplitude` dynamically fades or modulates (e.g. near track boundaries).
     *
     * @default amplitude
     */
    maxAmplitude?: number;

    /**
     * Normalized start position of the visible wave segment along the track (fraction from `0` to `1`).
     *
     * @default 0
     */
    start?: number;

    /**
     * Normalized end position of the visible wave segment along the track (fraction from `0` to `1`).
     *
     * @default 1
     */
    end?: number;
}
