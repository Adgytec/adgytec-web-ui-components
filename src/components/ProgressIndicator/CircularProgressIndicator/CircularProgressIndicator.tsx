import clsx from "clsx";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-aria-components";
import { useMediaQuery } from "usehooks-ts";
import { SineCircular } from "@/components/Wave";
import {
    DefaultProgressIndicatorSize,
    getUsableProgressIndicatorSize,
    type ProgressIndicatorThickness,
} from "../core";
import styles from "./circularProgressIndicator.module.css";
import {
    type CircularProgressIndicatorProps,
    CircularProgressIndicatorSineWaveProps,
} from "./types";

const CYCLE = 1333; // ms per grow + shrink
const MIN_LEN = 0.12; // shortest arc, in turns
const MAX_LEN = 0.75; // longest arc, in turns
const SPIN = 0.625; // constant rotation, turns per second

const ease = (u: number) =>
    u < 0.5 ? 4 * u * u * u : 1 - (-2 * u + 2) ** 3 / 2;

// tail and head of the indeterminate arc, in turns
function useIndeterminateArc(enabled: boolean) {
    const prefersReducedMotion = useMediaQuery(
        "(prefers-reduced-motion: reduce)"
    );
    const [arc, setArc] = useState({ tail: 0, head: MIN_LEN });

    useEffect(() => {
        if (!enabled || prefersReducedMotion) return;

        let raf = 0;
        const start = performance.now();
        const step = MAX_LEN - MIN_LEN;

        const tick = (now: number) => {
            const ms = now - start;
            const k = Math.floor(ms / CYCLE);
            const u = (ms % CYCLE) / CYCLE;
            const t0 = k * step;

            let tailT: number;
            let headT: number;
            if (u < 0.5) {
                tailT = t0;
                headT = t0 + MIN_LEN + step * ease(u / 0.5);
            } else {
                tailT = t0 + step * ease((u - 0.5) / 0.5);
                headT = t0 + MAX_LEN;
            }

            const rot = (ms / 1000) * SPIN;
            setArc({ tail: rot + tailT, head: rot + headT });
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [enabled, prefersReducedMotion]);

    return prefersReducedMotion ? { tail: 0, head: MAX_LEN } : arc;
}

interface RingProps {
    percentage: number;
    isIndeterminate: boolean;
    thickness: ProgressIndicatorThickness;
    size: number;
    wavy: boolean;
}

const Ring: React.FC<RingProps> = ({
    percentage,
    isIndeterminate,
    thickness,
    size,
    wavy,
}) => {
    const { active, track, gapTurns } = CircularProgressIndicatorSineWaveProps(
        percentage,
        isIndeterminate,
        thickness,
        size,
        wavy
    );
    const arc = useIndeterminateArc(isIndeterminate);

    // Clamp gap so it never exceeds half the arc length of either active or track segment
    const activeArcLen = arc.head - arc.tail;
    const activeGap = Math.min(gapTurns, activeArcLen * 0.5);

    const trackArcLen = arc.tail + 1 - arc.head;
    const trackGap = Math.min(gapTurns, trackArcLen * 0.5);

    const activeProps = isIndeterminate
        ? {
              ...active,
              start: arc.tail + activeGap / 2,
              end: arc.head - activeGap / 2,
          }
        : active;

    const trackProps = isIndeterminate
        ? {
              ...track,
              start: arc.head + trackGap / 2,
              end: arc.tail + 1 - trackGap / 2,
          }
        : track;

    const showTrack = isIndeterminate || percentage < 100;
    const showActive = isIndeterminate || percentage > 0;

    return (
        <div className={styles["ring"]} style={{ width: size, height: size }}>
            {showTrack && (
                <div className={styles["layer"]}>
                    <SineCircular {...trackProps} />
                </div>
            )}
            {showActive && (
                <div className={styles["layer"]}>
                    <SineCircular {...activeProps} />
                </div>
            )}
        </div>
    );
};

/**
 * Circular progress indicator inspired by Material 3 design specifications with support for animated wavy paths.
 *
 * Displays either a determinate progress arc (0–100%) or an indeterminate animated spinning and expanding/contracting arc.
 * The active track can optionally display an animated sine wave (`wavy={true}`).
 *
 * @example
 * ```tsx
 * import { CircularProgressIndicator } from "@adgytec/web-ui-components";
 *
 * // Determinate progress (e.g. 60%)
 * <CircularProgressIndicator value={60} aria-label="Loading files" />
 *
 * // Flat determinate progress (no waves)
 * <CircularProgressIndicator value={60} wavy={false} />
 *
 * // Indeterminate loading spinner
 * <CircularProgressIndicator isIndeterminate aria-label="Loading..." />
 *
 * // Thick variant with custom size and label
 * <CircularProgressIndicator value={75} thickness="thick" size={64}>
 *     {({ percentage }) => <span>{percentage}%</span>}
 * </CircularProgressIndicator>
 * ```
 */
export const CircularProgressIndicator: React.FC<
    CircularProgressIndicatorProps
> = ({
    thickness = "default",
    wavy = true,
    size = DefaultProgressIndicatorSize,
    children,
    className,
    ...props
}) => {
    const usableSize = getUsableProgressIndicatorSize(size);

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
                        <Ring
                            percentage={percentage}
                            isIndeterminate={isIndeterminate}
                            thickness={thickness}
                            size={usableSize}
                            wavy={wavy}
                        />
                        {children && (
                            <div className={styles["label"]}>
                                {typeof children === "function"
                                    ? children(renderProps)
                                    : children}
                            </div>
                        )}
                    </>
                );
            }}
        </ProgressBar>
    );
};
