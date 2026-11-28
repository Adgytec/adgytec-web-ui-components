import type { BufferRange } from "@/components/ProgressSlider";

export interface MediaPlaybackState {
    buffered: BufferRange[];
    currentTime: number;
    duration: number;
    ended: boolean;
    muted: boolean;
    paused: boolean;
    playbackRate: number;
    volume: number;
    status: "idle" | "loading" | "ready" | "buffering" | "error";
}

export interface MediaPlaybackActions {
    pause(): void;
    play(): Promise<void>;
    togglePlayPause(): Promise<void>;

    seekTo(time: number): void;
    setPlaybackRate(rate: number): void;

    mute(): void;
    unmute(): void;
    toggleMuteUnmute(): void;

    setVolume(value: number): void;
}

export interface MediaPlayback
    extends MediaPlaybackState,
        MediaPlaybackActions {}
