import type { BufferRange } from "@/components/ProgressSlider";

/**
 * Reactive playback state of an audio or video media element.
 */
export interface MediaPlaybackState {
    /** Array of buffered time ranges loaded by the media element. */
    buffered: BufferRange[];
    /** Current playback position in seconds. */
    currentTime: number;
    /** Total duration of the media in seconds (0 when unavailable or before metadata loads). */
    duration: number;
    /** Whether playback has reached the end of the media track. */
    ended: boolean;
    /** Whether audio output is currently muted. */
    muted: boolean;
    /** Whether media playback is currently paused. */
    paused: boolean;
    /** Current playback speed multiplier (e.g. 1 for normal speed). */
    playbackRate: number;
    /** Current audio volume level ranging from 0.0 (silent) to 1.0 (maximum). */
    volume: number;
    /**
     * High-level playback status:
     * - `idle`: No media source loaded or network empty.
     * - `loading`: Media source is loading initial metadata.
     * - `ready`: Media is loaded and ready to play.
     * - `buffering`: Media playback is actively waiting for more buffered data.
     * - `error`: An error occurred loading or playing the media source.
     */
    status: "idle" | "loading" | "ready" | "buffering" | "error";
}

/**
 * Controller actions for manipulating media playback.
 */
export interface MediaPlaybackActions {
    /** Pauses media playback. */
    pause(): void;
    /** Initiates playback. Resolves when playback successfully starts. */
    play(): Promise<void>;
    /** Toggles between playback and pause states. */
    togglePlayPause(): Promise<void>;

    /**
     * Seeks playback to a specific timestamp in seconds.
     * Clamped between 0 and total duration.
     *
     * @param time - Destination time position in seconds.
     */
    seekTo(time: number): void;
    /**
     * Sets the playback rate multiplier.
     *
     * @param rate - Speed multiplier (e.g. 0.5, 1, 1.5, 2).
     */
    setPlaybackRate(rate: number): void;

    /** Mutes the audio output. */
    mute(): void;
    /** Unmutes audio output, restoring volume to an audible level if previously 0. */
    unmute(): void;
    /** Toggles between muted and unmuted audio states. */
    toggleMuteUnmute(): void;

    /**
     * Sets the audio volume level.
     *
     * @param value - Volume level from 0.0 (silence) to 1.0 (maximum).
     */
    setVolume(value: number): void;
}

/**
 * Unified interface combining reactive media playback state and control actions.
 */
export interface MediaPlayback
    extends MediaPlaybackState,
        MediaPlaybackActions {}

/**
 * Determines whether a progress indicator (spinner) should be displayed
 * given the current media playback status.
 *
 * @param status - Current media playback status.
 * @returns `true` if media is loading or actively buffering; otherwise `false`.
 */
export const showProgressIndicator = (status: MediaPlaybackState["status"]) => {
    switch (status) {
        case "loading":
        case "buffering":
            return true;
        default:
            return false;
    }
};
