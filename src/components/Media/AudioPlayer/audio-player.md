# AudioPlayer

## Configurable CSS Tokens

| Token                           | Default Value                            | Description                                                     |
| ------------------------------- | ---------------------------------------- | --------------------------------------------------------------- |
| `--md-audio-player-background`  | `var(--md-sys-color-surface-container)`  | Background color of the player header and actions cards.        |
| `--md-audio-player-label-color` | `var(--md-sys-color-on-surface)`         | Text color of the audio track label/title.                      |
| `--md-audio-player-color`       | `var(--md-sys-color-on-surface-variant)` | Text color of secondary descriptions, timestamps, and controls. |

The `AudioPlayer` component is an expressive, fully-featured audio playback widget adhering to Material Design 3 guidelines. It integrates playback control, track metadata, interactive scrubbing with buffered ranges, duration displays, variable playback speeds, volume control, and network loading/buffering indicators into a cohesive surface.

### Features

- **Inversion of Control**: Uses a render-prop child `(ref) => ReactNode` to bind directly to a native `<audio>` element, giving full control over media sources, formats, preloading, and track elements.
- **Reactive Playback State**: Automatically stays synchronized with native HTML media events through the [`useHTMLMediaPlayback`](../media.md) hook.
- **Wavy Progress Seeker**: Incorporates the expressive [`ProgressSlider`](../../ProgressSlider/progress-slider.md) seeker, showcasing animated sine waves during playback and a solid flat bar when paused.
- **Buffered Range Visualization**: Displays loaded/buffered network data behind the active progress track.
- **Dynamic Time Readouts**: Displays elapsed and total duration in `mm:ss` or `hh:mm:ss` formatted via [`formatTime`](../media.md).
- **Speed Multiplier Popover**: Allows listeners to choose playback speeds (e.g. `0.5x`, `0.75x`, `1x`, `1.25x`, `1.5x`) inside an accessible popover using [`ConnectedButtonGroup`](../../Button/ButtonGroups/button-group.md).
- **Volume & Mute Control**: Provides an instant mute/unmute toggle alongside a granular percent volume slider.
- **Loading & Error Indication**: Displays an indeterminate [`CircularProgressIndicator`](../../ProgressIndicator/progress-indicator.md) during loading and buffering, and an error indicator when the source fails to load.
- **Accessibility & Custom Labels**: Includes customizable ARIA labels and tooltips via the `controlLabels` prop for screen reader and keyboard accessibility.

---

## Props

The `AudioPlayer` component accepts the following props:

| Prop            | Type                                                            | Default                     | Description                                                                         |
| --------------- | --------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------- |
| `children`      | `(ref: React.RefObject<HTMLAudioElement \| null>) => ReactNode` | —                           | Render prop that mounts the consumer `<audio>` element with the provided ref.       |
| `label`         | `string`                                                        | —                           | Optional title or track name displayed in the player header.                        |
| `description`   | `string`                                                        | —                           | Optional subtitle, artist name, or episode description displayed beneath the label. |
| `playbackRates` | `number[]`                                                      | `[0.5, 0.75, 1, 1.25, 1.5]` | List of playback speed multiplier values available in the speed popover.            |
| `controlLabels` | `AudioPlayerControlLabels`                                      | `{}`                        | Localized accessible labels and tooltips for player controls.                       |

### `AudioPlayerControlLabels`

| Field          | Type     | Description                                                                                           |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `playPause`    | `string` | Accessible label and tooltip for the Play/Pause toggle button.                                        |
| `replay`       | `string` | Accessible label and tooltip for the Play button when playback has ended (falls back to `playPause`). |
| `muteUnmute`   | `string` | Accessible label and tooltip for the mute/unmute toggle button.                                       |
| `playbackRate` | `string` | Accessible label and tooltip for the playback speed trigger button and group.                         |
| `seek`         | `string` | Accessible label for the scrubber slider.                                                             |
| `volume`       | `string` | Accessible label for the volume slider.                                                               |
| `loading`      | `string` | Accessible label for the indeterminate loading/buffering spinner.                                     |
| `error`        | `string` | Accessible label for the playback error icon.                                                         |

---

## Usage

### Basic Usage

```tsx
import { AudioPlayer } from "@adgytec/web-ui-components";

export function BasicAudioPlayer() {
    return (
        <AudioPlayer>
            {(ref) => (
                <audio
                    ref={ref}
                    src="https://www.w3schools.com/html/horse.mp3"
                    preload="metadata"
                />
            )}
        </AudioPlayer>
    );
}
```

### With Track Metadata (Label & Description)

```tsx
import { AudioPlayer } from "@adgytec/web-ui-components";

export function PodcastAudioPlayer() {
    return (
        <AudioPlayer
            label="Design Systems Deep Dive"
            description="Episode 12: Expressive Motion & Fluid Scrubbing"
        >
            {(ref) => (
                <audio
                    ref={ref}
                    src="/media/podcast-ep12.mp3"
                    preload="metadata"
                />
            )}
        </AudioPlayer>
    );
}
```

### Custom Playback Speeds & Accessible Labels

```tsx
import { AudioPlayer } from "@adgytec/web-ui-components";

export function CustomAudioPlayer() {
    return (
        <AudioPlayer
            label="Audiobook Chapter 1"
            playbackRates={[0.75, 1, 1.25, 1.5, 1.75, 2]}
            controlLabels={{
                playPause: "Play / Pause",
                replay: "Replay track",
                muteUnmute: "Toggle audio output",
                playbackRate: "Playback speed",
                seek: "Seek position",
                volume: "Volume level",
                loading: "Buffering audio...",
                error: "Failed to load audio stream",
            }}
        >
            {(ref) => (
                <audio
                    ref={ref}
                    src="/media/audiobook-ch1.mp3"
                    preload="metadata"
                />
            )}
        </AudioPlayer>
    );
}
```

### Custom Styling

```css
.custom-audio-player {
    --md-audio-player-background: var(--md-sys-color-surface-container-high);
    --md-audio-player-label-color: var(--md-sys-color-primary);
    --md-audio-player-color: var(--md-sys-color-on-surface-variant);
}
```
