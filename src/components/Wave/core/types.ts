/**
 * Shared base configuration props for sine wave components (both linear and circular).
 */
export interface SineWaveBaseProps {
    /**
     * Peak deviation (height/radial offset) of the wave crest from its baseline in pixels.
     * Higher values produce taller wave oscillations.
     *
     * @default 3 (linear) / 1.6 (circular)
     */
    amplitude?: number;

    /**
     * Distance or spatial period over which the wave pattern repeats in pixels.
     * Larger values produce wider, more stretched-out waves.
     *
     * @default 40 (linear) / 15 (circular)
     */
    wavelength?: number;

    /**
     * Thickness of the SVG wave stroke line in pixels.
     *
     * @default 4
     */
    strokeWidth?: number;

    /**
     * SVG stroke color applied to the wave path.
     * Accepts any valid CSS color string (e.g. hex, rgb, CSS variable, or keyword).
     *
     * @default "currentColor"
     */
    strokeColor?: string;

    /**
     * Animation propagation speed of the wave in units per second.
     * Positive values animate the wave forward. Set to `0` to keep the wave static and disable the animation loop.
     *
     * @default wavelength (linear) / 10 * wavelength (circular)
     */
    speed?: number;
}
