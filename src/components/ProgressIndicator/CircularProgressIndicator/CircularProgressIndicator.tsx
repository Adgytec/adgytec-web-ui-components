import clsx from "clsx";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-aria-components";
import { getUsableIndicatorSize } from "@/components/LoadingIndicator";
import { SineCircular } from "@/components/Wave";
import type { ProgressIndicatorThickness } from "../core/thickness";
import styles from "./circularProgressIndicator.module.css";
import type { CircularProgressIndicatorProps } from "./types";
import { CircularProgressIndicatorSineWaveProps } from "./types"; // wherever it lives

const CYCLE = 1333; // ms per grow + shrink
const MIN_LEN = 0.12; // shortest arc, in turns
const MAX_LEN = 0.75; // longest arc, in turns
const SPIN = 0.625; // constant rotation, turns per second

const ease = (u: number) =>
    u < 0.5 ? 4 * u * u * u : 1 - (-2 * u + 2) ** 3 / 2;

// tail and head of the indeterminate arc, in turns
function useIndeterminateArc(enabled: boolean) {
    const [arc, setArc] = useState({ tail: 0, head: MIN_LEN });

    useEffect(() => {
        if (!enabled) return;

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
    }, [enabled]);

    return arc;
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

    const activeProps = isIndeterminate
        ? {
              ...active,
              start: arc.tail + gapTurns / 2,
              end: arc.head - gapTurns / 2,
          }
        : active;

    const trackProps = isIndeterminate
        ? {
              ...track,
              start: arc.head + gapTurns / 2,
              end: arc.tail + 1 - gapTurns / 2,
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

export const CircularProgressIndicator: React.FC<
    CircularProgressIndicatorProps
> = ({
    thickness = "default",
    wavy = true,
    size = 48,
    children,
    className,
    ...props
}) => {
    const usableSize = getUsableIndicatorSize(size);

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
