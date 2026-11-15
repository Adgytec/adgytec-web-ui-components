import clsx from "clsx";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-aria-components";
import { Sine } from "@/components/Wave";
import type { ProgressIndicatorThickness } from "../core/thickness";
import styles from "./linearProgressIndicator.module.css";
import {
    type LinearProgressIndicatorProps,
    LinearProgressIndicatorSineWaveProps,
} from "./types";

// ---------- indeterminate motion ----------

function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
    const cx = 3 * x1,
        bx = 3 * (x2 - x1) - cx,
        ax = 1 - cx - bx;
    const cy = 3 * y1,
        by = 3 * (y2 - y1) - cy,
        ay = 1 - cy - by;
    const xx = (s: number) => ((ax * s + bx) * s + cx) * s;
    const yy = (s: number) => ((ay * s + by) * s + cy) * s;

    return (x: number) => {
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        let lo = 0,
            hi = 1,
            s = x;
        for (let i = 0; i < 20; i++) {
            s = (lo + hi) / 2;
            if (xx(s) < x) lo = s;
            else hi = s;
        }
        return yy(s);
    };
}

const CYCLE = 1750; // ms, raise for slower
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const e1Head = cubicBezier(0.2, 0, 0.8, 1);
const e1Tail = cubicBezier(0.4, 0, 0.6, 1);
const e2Head = cubicBezier(0, 0, 0.65, 1);
const e2Tail = cubicBezier(0.3, 0, 0.5, 1);

const seg = (
    t: number,
    delay: number,
    dur: number,
    ease: (x: number) => number
) => ease(clamp01((t - delay) / dur));

// [tail, head] of each bar, as fractions 0..1 of the track
type Bars = { b1: [number, number]; b2: [number, number] };

function useIndeterminateBars(): Bars {
    const [bars, setBars] = useState<Bars>({ b1: [0, 0], b2: [0, 0] });

    useEffect(() => {
        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            // scaled so a longer CYCLE slows everything down proportionally
            const t = (((now - start) % CYCLE) / CYCLE) * 1750;
            setBars({
                b1: [seg(t, 333, 750, e1Tail), seg(t, 0, 750, e1Head)],
                b2: [seg(t, 1267, 533, e2Tail), seg(t, 1000, 567, e2Head)],
            });
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    return bars;
}

// gap is half on each side of a bar, shrinking to 0 when a bar is at the edge
const HALF_GAP = "calc(var(--md-sys-layout-space-4) / 2)";
const leftOf = (f: number) =>
    `calc(${f * 100}% + min(${HALF_GAP}, ${f * 100}%))`;
const rightOf = (f: number) =>
    `calc(${(1 - f) * 100}% + min(${HALF_GAP}, ${(1 - f) * 100}%))`;

const piece = (left: string, right: string): React.CSSProperties => ({
    position: "absolute",
    insetBlock: 0,
    insetInlineStart: left,
    insetInlineEnd: right,
});

interface IndeterminateTrackProps {
    wavy: boolean;
    thickness: ProgressIndicatorThickness;
}

// order is always: track, bar 2, track, bar 1, track
const IndeterminateTrack: React.FC<IndeterminateTrackProps> = ({
    wavy,
    thickness,
}) => {
    const { b1, b2 } = useIndeterminateBars();
    const sineProps = LinearProgressIndicatorSineWaveProps(0, true, thickness);

    return (
        <>
            <div
                className={styles["in-active"]}
                style={piece("0px", rightOf(b2[0]))}
            />

            <div
                className={styles["active"]}
                data-wavy={wavy}
                style={piece(leftOf(b2[0]), rightOf(b2[1]))}
            >
                {wavy && <Sine {...sineProps} />}
            </div>

            <div
                className={styles["in-active"]}
                style={piece(leftOf(b2[1]), rightOf(b1[0]))}
            />

            <div
                className={styles["active"]}
                data-wavy={wavy}
                style={piece(leftOf(b1[0]), rightOf(b1[1]))}
            >
                {wavy && <Sine {...sineProps} />}
            </div>

            <div
                className={styles["in-active"]}
                style={piece(leftOf(b1[1]), "0px")}
            />
        </>
    );
};

// ---------- component ----------

export const LinearProgressIndicator: React.FC<
    LinearProgressIndicatorProps
> = ({ thickness = "default", wavy = true, children, className, ...props }) => {
    return (
        <ProgressBar
            className={(renderProps) =>
                clsx(
                    styles["indicator"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-thickness={thickness}
        >
            {(renderProps) => {
                const { percentage = 0, isIndeterminate } = renderProps;

                return (
                    <>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}

                        <div
                            className={clsx(styles["track"])}
                            data-thickness={thickness}
                            data-indeterminate={isIndeterminate || undefined}
                        >
                            {isIndeterminate ? (
                                <IndeterminateTrack
                                    wavy={wavy}
                                    thickness={thickness}
                                />
                            ) : (
                                <>
                                    {percentage > 0 && (
                                        <div
                                            style={{
                                                inlineSize: `${percentage}%`,
                                            }}
                                            className={clsx(styles["active"])}
                                            data-wavy={wavy}
                                        >
                                            {wavy && (
                                                <Sine
                                                    {...LinearProgressIndicatorSineWaveProps(
                                                        percentage,
                                                        isIndeterminate,
                                                        thickness
                                                    )}
                                                />
                                            )}
                                        </div>
                                    )}

                                    {percentage < 100 && (
                                        <div
                                            className={clsx(
                                                styles["in-active"]
                                            )}
                                        />
                                    )}
                                </>
                            )}
                        </div>
                    </>
                );
            }}
        </ProgressBar>
    );
};
