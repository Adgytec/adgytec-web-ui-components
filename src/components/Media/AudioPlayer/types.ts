import type { ReactNode } from "react";

export type AudioPlayerChildren = (
    ref: React.RefObject<HTMLAudioElement | null>
) => ReactNode;

export interface AudioPlayerProps {
    label: string;
    description?: string;
    children: AudioPlayerChildren;
    playbackRates?: number[];
}

export const DEFAULT_PLAYBACK_RATES = [0.5, 0.75, 1, 1.25, 1.5];
