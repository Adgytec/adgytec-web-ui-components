import { useLayoutEffect, useRef, useState } from "react";

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
