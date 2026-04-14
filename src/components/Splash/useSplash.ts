import { useEffect, useRef, useState } from "react";
import type { PressEvent } from "react-aria-components";
import type { SetTimeoutReturnType, SplashState } from "./types";

export const useSplash = (onPress?: (e: PressEvent) => void) => {
    const [coords, setCoords] = useState<SplashState | null>(null);
    const idRef = useRef(0);
    const timeout = useRef<SetTimeoutReturnType | undefined>(undefined);

    const handlePress = (e: PressEvent) => {
        setCoords({ id: idRef.current++, x: e.x, y: e.y });
        if (e.x !== -1 && e.y !== -1) {
            clearTimeout(timeout.current);
            // INFO: css animation timeout + 50ms buffer
            timeout.current = setTimeout(() => setCoords(null), 700);
        }
        onPress?.(e);
    };

    useEffect(() => {
        return () => {
            clearTimeout(timeout.current);
        };
    }, []);

    return { coords, handlePress };
};
