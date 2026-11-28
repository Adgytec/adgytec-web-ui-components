import type { ReactNode } from "react";

export type AudioPlayerChildren = (
    ref: React.RefObject<HTMLAudioElement | null>
) => ReactNode;

export interface AudioPlayerControlLabels {
    /** Play/pause toggle */
    playPause?: string;
    /** Same button when playback has ended; falls back to playPause */
    replay?: string;
    /** Mute toggle */
    muteUnmute?: string;
    /** Speed popover trigger (also names the speed group) */
    playbackRate?: string;
    /** Seek slider */
    seek?: string;
    /** Volume slider */
    volume?: string;
    /** Indeterminate loading/buffering indicator */
    loading?: string;
    /** Error icon */
    error?: string;
}

export interface AudioPlayerProps {
    label?: string;
    description?: string;
    controlLabels?: AudioPlayerControlLabels;
    children: AudioPlayerChildren;
    playbackRates?: number[];
}

export const DEFAULT_PLAYBACK_RATES = [0.5, 0.75, 1, 1.25, 1.5];

export const NO_LABELS: AudioPlayerControlLabels = {};
