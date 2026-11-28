import { type RefObject, useEffect, useMemo, useState } from "react";
// adjust these import paths to your repo
import type { BufferRange } from "@/components/ProgressSlider";
import type {
    MediaPlayback,
    MediaPlaybackActions,
    MediaPlaybackState,
} from "./media";

const DEFAULT_UNMUTE_VOLUME = 0.1;

/* ------------------------------------------------------------------ */
/* TimeRanges -> BufferRange[]                                         */
/* ------------------------------------------------------------------ */

/**
 * Converts a DOM `TimeRanges` snapshot into plain {@link BufferRange} objects,
 * fusing ranges separated by tiny gaps (MSE-based playback often reports many fragments).
 *
 * @param ranges - The DOM `TimeRanges` collection from a media element.
 * @param mergeGap - Maximum distance in seconds between consecutive ranges to be merged. Defaults to 0.3s.
 * @returns An array of merged {@link BufferRange} intervals.
 */
export function timeRangesToArray(
    ranges: TimeRanges,
    mergeGap = 0.3 // seconds
): BufferRange[] {
    const out: BufferRange[] = [];
    for (let i = 0; i < ranges.length; i++) {
        const start = ranges.start(i);
        const end = ranges.end(i);
        const last = out.at(-1);
        if (last && start - last.end <= mergeGap) {
            last.end = Math.max(last.end, end);
        } else {
            out.push({ start, end });
        }
    }
    return out;
}

/**
 * Compares two {@link BufferRange} lists to check if they have identical intervals.
 */
function sameRanges(a: BufferRange[], b: BufferRange[]) {
    return (
        a.length === b.length &&
        a.every((r, i) => r.start === b[i].start && r.end === b[i].end)
    );
}

/* ------------------------------------------------------------------ */
/* State reading                                                       */
/* ------------------------------------------------------------------ */

const EVENTS = [
    "loadstart",
    "emptied",
    "loadedmetadata",
    "durationchange",
    "canplay",
    "playing",
    "waiting",
    "play",
    "pause",
    "ended",
    "timeupdate",
    "seeking",
    "seeked",
    "progress",
    "ratechange",
    "volumechange",
    "error",
] as const;

const INITIAL_STATE: MediaPlaybackState = {
    buffered: [],
    currentTime: 0,
    duration: 0,
    ended: false,
    muted: false,
    paused: true,
    playbackRate: 1,
    volume: 1,
    status: "idle",
};

/**
 * Derives the high-level {@link MediaPlaybackState.status} from an HTML media element's ready and network states.
 */
function readStatus(el: HTMLMediaElement): MediaPlaybackState["status"] {
    if (el.error) return "error";
    if (
        el.networkState === HTMLMediaElement.NETWORK_EMPTY ||
        el.networkState === HTMLMediaElement.NETWORK_NO_SOURCE
    ) {
        return "idle";
    }
    if (el.readyState === HTMLMediaElement.HAVE_NOTHING) return "loading";
    if (
        !el.paused &&
        !el.ended &&
        el.readyState < HTMLMediaElement.HAVE_FUTURE_DATA
    ) {
        return "buffering";
    }
    return "ready";
}

/**
 * Reads the element into a new state, reusing the previous object when nothing
 * changed (so React bails out) and the previous `buffered` array when the
 * ranges are identical (so memoized children don't re-render).
 */
function reconcile(
    prev: MediaPlaybackState,
    el: HTMLMediaElement
): MediaPlaybackState {
    const ranges = timeRangesToArray(el.buffered);

    const next: MediaPlaybackState = {
        buffered: sameRanges(prev.buffered, ranges) ? prev.buffered : ranges,
        currentTime: el.currentTime,
        // NaN before metadata loads
        duration: Number.isNaN(el.duration) ? 0 : el.duration,
        ended: el.ended,
        muted: el.muted,
        paused: el.paused,
        playbackRate: el.playbackRate,
        volume: el.volume,
        status: readStatus(el),
    };

    const unchanged = (Object.keys(next) as (keyof MediaPlaybackState)[]).every(
        (key) => Object.is(next[key], prev[key])
    );
    return unchanged ? prev : next;
}

/* ------------------------------------------------------------------ */
/* Hook                                                                */
/* ------------------------------------------------------------------ */

/**
 * React hook that connects to a native `<audio>` or `<video>` HTML media element ref,
 * providing reactive {@link MediaPlaybackState} and stable {@link MediaPlaybackActions}.
 *
 * Note: The media element must be rendered on the component's initial mount (not conditionally
 * mounted later), because event listeners are attached once on mount.
 *
 * @param ref - Ref object pointing to the HTML media element.
 * @returns Unified {@link MediaPlayback} state and controller actions.
 *
 * @example
 * ```tsx
 * const audioRef = useRef<HTMLAudioElement>(null);
 * const playback = useHTMLMediaPlayback(audioRef);
 *
 * return (
 *     <div>
 *         <audio ref={audioRef} src="/audio.mp3" />
 *         <button onClick={() => playback.togglePlayPause()}>
 *             {playback.paused ? "Play" : "Pause"}
 *         </button>
 *         <span>{playback.currentTime} / {playback.duration}</span>
 *     </div>
 * );
 * ```
 */
export function useHTMLMediaPlayback(
    ref: RefObject<HTMLMediaElement | null>
): MediaPlayback {
    const [state, setState] = useState<MediaPlaybackState>(INITIAL_STATE);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const sync = () => {
            setState((prev) => reconcile(prev, el));
        };

        sync(); // pick up whatever the element already has (cached, autoplay, etc.)

        for (const e of EVENTS) el.addEventListener(e, sync);

        return () => {
            for (const e of EVENTS) el.removeEventListener(e, sync);
        };
    }, [ref]);

    // Actions read ref.current when called, so they are stable and null-safe
    const actions = useMemo<MediaPlaybackActions>(() => {
        // play() rejects on AbortError (interrupted by pause()) or when autoplay
        // is blocked. Element events already reflect the real state, so swallow it.
        const play = async () => {
            try {
                await ref.current?.play();
            } catch {
                /* noop */
            }
        };

        const pause = () => ref.current?.pause();

        const mute = () => {
            const el = ref.current;
            if (el) el.muted = true;
        };

        const unmute = () => {
            const el = ref.current;
            if (!el) return;

            el.muted = false;
            if (el.volume === 0) {
                el.volume = DEFAULT_UNMUTE_VOLUME;
            }
        };

        return {
            play,
            pause,
            togglePlayPause: async () => {
                const el = ref.current;
                if (!el) return;

                if (el.paused) await play();
                else el.pause();
            },

            seekTo: (time) => {
                const el = ref.current;
                if (!el || Number.isNaN(time)) return;

                const max = Number.isFinite(el.duration) ? el.duration : time;
                el.currentTime = Math.min(Math.max(0, time), max);
                // `seeking` fires asynchronously; commit now so a scrubbing
                // slider doesn't flash back to the old position
                setState((prev) => reconcile(prev, el));
            },
            setPlaybackRate: (rate) => {
                const el = ref.current;
                if (el) el.playbackRate = rate;
            },

            mute,
            unmute,
            toggleMuteUnmute: () => (ref.current?.muted ? unmute() : mute()),

            setVolume: (value) => {
                const el = ref.current;
                if (!el || Number.isNaN(value)) return;

                el.volume = Math.min(1, Math.max(0, value));
            },
        };
    }, [ref]);

    return useMemo(() => ({ ...state, ...actions }), [state, actions]);
}
