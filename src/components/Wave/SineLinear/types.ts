import type { SineWaveBaseProps } from "../core";

export interface SineLinearProps extends SineWaveBaseProps {
    width: number; // full track width in px
    maxAmplitude?: number; // reserved height, defaults to amplitude
    start?: number; // fraction 0..1 of the track
    end?: number;
}
