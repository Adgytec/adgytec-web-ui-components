import type { SineWaveBaseProps } from "../core";

export interface SineCircularProps extends SineWaveBaseProps {
    size?: number;
    /** space reserved for the wave; defaults to `amplitude` */
    maxAmplitude?: number;
    /** arc start, in turns (0 = 12 o'clock, 1 = full circle) */
    start?: number;
    /** arc end, in turns */
    end?: number;
}
