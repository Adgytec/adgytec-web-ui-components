export interface MediaState {
    buffered: TimeRanges;
    currentTime: number;
    duration: number;
    ended: boolean;
    muted: boolean;
    paused: boolean;
    playbackRate: number;
    volume: number;
}

export interface MediaActions {
    pause(): void;
    play(): void;
    togglePlayPause(): void;

    seekTo(time: number): void;
    setPlaybackRate(rate: number): void;

    mute(): void;
    unmute(): void;
    toggleMuteUnmute(): void;

    setVolume(value: number): void;
}

export interface Media extends MediaState, MediaActions {}
