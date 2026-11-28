# Media

The `Media` module provides audio and multimedia playback components, hooks, and utilities implementing Material Design 3 styling with reactive playback synchronization.

## Components

- [AudioPlayer](./AudioPlayer/audio-player.md): An all-in-one audio playback interface featuring track metadata, play/pause controls, wavy scrub slider with buffered ranges, duration displays, speed popover, and volume control.

---

## Hooks & Utilities

### `useHTMLMediaPlayback`

A custom React hook that connects to an HTML `<audio>` or `<video>` element via a React `RefObject`. It subscribes to native media events and exposes a unified reactive state and stable controller actions.

```tsx
import { useRef } from "react";
import { useHTMLMediaPlayback, formatTime } from "@adgytec/web-ui-components";

export function CustomMediaComponent() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const playback = useHTMLMediaPlayback(audioRef);

    return (
        <div>
            <audio ref={audioRef} src="/media/sample.mp3" preload="metadata" />
            <button type="button" onClick={() => playback.togglePlayPause()}>
                {playback.paused ? "Play" : "Pause"}
            </button>
            <span>
                {formatTime(playback.currentTime)} /{" "}
                {formatTime(playback.duration)}
            </span>
        </div>
    );
}
```

### `formatTime`

Converts a duration in seconds into a standard clock timestamp string (`mm:ss` or `hh:mm:ss` when duration exceeds 1 hour). Non-finite, negative, or `NaN` inputs safely default to `"00:00"`.

```ts
import { formatTime } from "@adgytec/web-ui-components";

formatTime(45); // "00:45"
formatTime(125); // "02:05"
formatTime(3665); // "01:01:05"
formatTime(NaN); // "00:00"
```

### `timeRangesToArray`

Converts a DOM `TimeRanges` snapshot into an array of plain `BufferRange` objects `{ start: number, end: number }`, automatically merging fragments separated by tiny gaps (e.g. for MSE streaming playback).

```ts
import { timeRangesToArray } from "@adgytec/web-ui-components";

const bufferRanges = timeRangesToArray(audioElement.buffered);
```

### `showProgressIndicator`

Returns `true` when a `MediaPlaybackState["status"]` is `"loading"` or `"buffering"`.

---

## Interfaces & Types

### `MediaPlaybackState`

| Field          | Type                                                       | Description                                                       |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------------------------- |
| `buffered`     | `BufferRange[]`                                            | Array of loaded/buffered time ranges.                             |
| `currentTime`  | `number`                                                   | Current playback position in seconds.                             |
| `duration`     | `number`                                                   | Total duration of the media in seconds.                           |
| `ended`        | `boolean`                                                  | Whether playback reached the end of the media track.              |
| `muted`        | `boolean`                                                  | Whether audio output is currently muted.                          |
| `paused`       | `boolean`                                                  | Whether media playback is currently paused.                       |
| `playbackRate` | `number`                                                   | Current playback speed multiplier.                                |
| `volume`       | `number`                                                   | Current audio volume level from 0.0 (silent) to 1.0 (maximum).    |
| `status`       | `"idle" \| "loading" \| "ready" \| "buffering" \| "error"` | High-level playback status indicating readiness or network state. |

### `MediaPlaybackActions`

| Method                  | Type                      | Description                                                                |
| ----------------------- | ------------------------- | -------------------------------------------------------------------------- |
| `play()`                | `() => Promise<void>`     | Initiates playback. Resolves when playback successfully begins.            |
| `pause()`               | `() => void`              | Pauses media playback.                                                     |
| `togglePlayPause()`     | `() => Promise<void>`     | Toggles between playback and paused states.                                |
| `seekTo(time)`          | `(time: number) => void`  | Seeks playback to the specified timestamp in seconds.                      |
| `setPlaybackRate(rate)` | `(rate: number) => void`  | Sets playback speed multiplier.                                            |
| `mute()`                | `() => void`              | Mutes audio output.                                                        |
| `unmute()`              | `() => void`              | Unmutes audio output and restores an audible volume level if previously 0. |
| `toggleMuteUnmute()`    | `() => void`              | Toggles audio between muted and unmuted states.                            |
| `setVolume(value)`      | `(value: number) => void` | Sets audio volume level between 0.0 and 1.0.                               |

### `MediaPlayback`

Combined interface extending both `MediaPlaybackState` and `MediaPlaybackActions`.
