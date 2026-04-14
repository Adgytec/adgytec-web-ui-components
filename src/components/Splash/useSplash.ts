import { useRef, useState } from "react";
import type { PressEvent } from "react-aria-components";
import type { SplashState } from "./types";

export const useSplash = (onPress?: (e: PressEvent) => void) => {
    const [splashInfo, setSplashInfo] = useState<SplashState | null>(null);
    const idRef = useRef(0);

    const handlePress = (e: PressEvent) => {
        setSplashInfo({
            id: idRef.current++,
            x: e.x,
            y: e.y,
            onAnimationEnd: handleAnimationEnd,
        });
        onPress?.(e);
    };

    const handleAnimationEnd = () => {
        setSplashInfo(null);
    };

    return { coords: splashInfo, handlePress };
};
