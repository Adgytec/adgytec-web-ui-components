import { useLayoutEffect, useRef, useState } from "react";

/**
 * Hook that tracks the rendered client width of a container element via `ResizeObserver`.
 *
 * Returns a React `ref` to attach to the container element and the measured width `w` in pixels.
 *
 * @example
 * ```tsx
 * const { ref, w } = useWidth();
 *
 * return (
 *     <div ref={ref}>
 *         {w > 0 && <SineLinear width={w} />}
 *     </div>
 * );
 * ```
 */
export function useWidth() {
    const ref = useRef<HTMLDivElement>(null);
    const [w, setW] = useState(0);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        setW(el.clientWidth);
        const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return { ref, w };
}
