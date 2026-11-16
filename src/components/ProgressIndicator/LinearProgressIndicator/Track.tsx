import { SineLinear } from "@/components/Wave";
import type { ProgressIndicatorThickness } from "../core";
import styles from "./linearProgressIndicator.module.css";
import { LinearProgressIndicatorSineWaveProps } from "./types";
import {
    clamp01,
    useIndeterminateBars,
    useWidth,
} from "./useIndeterminateBars";

const GAP = 4; // px, match --md-sys-layout-space-4
const TRACK_COLOR = "var(--_md-linear-progress-indicator-track-color)";

interface Layer {
    key: string;
    flat: boolean;
    start: number; // fractions of the track
    end: number;
}

interface TrackProps {
    thickness: ProgressIndicatorThickness;
    wavy: boolean;
}

// half the gap (plus the caps) as a fraction of the track, shrinking to 0 at the edges
const gapFractions = (width: number, strokeWidth: number) => {
    const half = (GAP + strokeWidth) / 2 / Math.max(1, width - strokeWidth);
    return {
        inL: (f: number) => f + Math.min(half, f),
        inR: (f: number) => f - Math.min(half, 1 - f),
    };
};

interface WaveLayersProps {
    width: number;
    wave: ReturnType<typeof LinearProgressIndicatorSineWaveProps>;
    layers: Layer[];
}

const WaveLayers: React.FC<WaveLayersProps> = ({ width, wave, layers }) => {
    const wavy = { ...wave, width };
    const flat = { ...wavy, amplitude: 0, speed: 0, strokeColor: TRACK_COLOR };

    return (
        <>
            {layers.map(({ key, flat: isFlat, start, end }) => (
                <div key={key} className={styles["layer"]}>
                    <SineLinear
                        {...(isFlat ? flat : wavy)}
                        start={start}
                        end={end}
                    />
                </div>
            ))}
        </>
    );
};

export const DeterminateTrack: React.FC<
    TrackProps & { percentage: number }
> = ({ percentage, thickness, wavy }) => {
    const { ref, w } = useWidth();
    const wave = LinearProgressIndicatorSineWaveProps(
        percentage,
        thickness,
        false,
        wavy
    );
    const { inL, inR } = gapFractions(w, wave.strokeWidth ?? 4);
    const p = clamp01(percentage / 100);

    return (
        <div ref={ref} className={styles["track"]} data-thickness={thickness}>
            {w > 0 && (
                <WaveLayers
                    width={w}
                    wave={wave}
                    layers={[
                        { key: "track", flat: true, start: inL(p), end: 1 },
                        { key: "active", flat: false, start: 0, end: inR(p) },
                    ]}
                />
            )}
        </div>
    );
};

export const IndeterminateTrack: React.FC<TrackProps> = ({
    thickness,
    wavy,
}) => {
    const { b1, b2 } = useIndeterminateBars();
    const { ref, w } = useWidth();
    const wave = LinearProgressIndicatorSineWaveProps(0, thickness, true, wavy);
    const { inL, inR } = gapFractions(w, wave.strokeWidth ?? 4);

    // whichever bar has the smaller tail is the left one
    const [left, right] = [b1, b2].sort((a, b) => a[0] - b[0]);

    return (
        <div
            ref={ref}
            className={styles["track"]}
            data-thickness={thickness}
            data-indeterminate
        >
            {w > 0 && (
                <WaveLayers
                    width={w}
                    wave={wave}
                    layers={[
                        { key: "t1", flat: true, start: 0, end: inR(left[0]) },
                        {
                            key: "bar-a",
                            flat: false,
                            start: inL(left[0]),
                            end: inR(left[1]),
                        },
                        {
                            key: "t2",
                            flat: true,
                            start: inL(left[1]),
                            end: inR(right[0]),
                        },
                        {
                            key: "bar-b",
                            flat: false,
                            start: inL(right[0]),
                            end: inR(right[1]),
                        },
                        { key: "t3", flat: true, start: inL(right[1]), end: 1 },
                    ]}
                />
            )}
        </div>
    );
};
