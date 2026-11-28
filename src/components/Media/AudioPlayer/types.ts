import type { ReactNode } from "react";

/**
 * Render prop function providing a React ref to attach to the consumer's `<audio>` media element.
 *
 * @param ref - Ref to be passed to the `<audio>` JSX element.
 * @returns The audio element or fragment containing the audio element.
 */
export type AudioPlayerChildren = (
    ref: React.RefObject<HTMLAudioElement | null>
) => ReactNode;

/**
 * Accessible labels and tooltips for interactive controls in the {@link AudioPlayer}.
 */
export interface AudioPlayerControlLabels {
    /** Accessible label for the play/pause button when audio is paused or playing. */
    playPause?: string;
    /** Accessible label for the play button when playback has ended (replay state). Falls back to `playPause`. */
    replay?: string;
    /** Accessible label for the mute/unmute toggle button. */
    muteUnmute?: string;
    /** Accessible label for the playback speed trigger button and popover options. */
    playbackRate?: string;
    /** Accessible label for the scrub/seek slider. */
    seek?: string;
    /** Accessible label for the volume level slider. */
    volume?: string;
    /** Accessible label for the indeterminate loading/buffering indicator. */
    loading?: string;
    /** Accessible label for the error state icon. */
    error?: string;
}

/**
 * Props for the {@link AudioPlayer} component.
 */
export interface AudioPlayerProps {
    /** Optional title or track name displayed in the player header. */
    label?: string;
    /** Optional secondary subtitle or description displayed below the label. */
    description?: string;
    /** Optional localized accessible labels for controls and screen reader cues. */
    controlLabels?: AudioPlayerControlLabels;
    /** Render prop function providing the ref to attach to the underlying `<audio>` element. */
    children: AudioPlayerChildren;
    /**
     * Available playback speed multiplier options displayed in the rate selector popover.
     * @default [0.5, 0.75, 1, 1.25, 1.5]
     */
    playbackRates?: number[];
}

/**
 * Default playback speed multiplier options for the speed popover selector.
 */
export const DEFAULT_PLAYBACK_RATES = [0.5, 0.75, 1, 1.25, 1.5];

/**
 * Fallback empty control labels object.
 */
export const NO_LABELS: AudioPlayerControlLabels = {};
