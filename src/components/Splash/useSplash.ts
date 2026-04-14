import { useRef, useState } from "react";
import type { PressEvent } from "react-aria-components";
import type { SplashState } from "./types";

export const useSplash = (onPress?: (e: PressEvent) => void) => {
    const [coords, setCoords] = useState<SplashState | null>(null);
    const idRef = useRef(0);

    const handlePress = (e: PressEvent) => {
        setCoords({ id: idRef.current++, x: e.x, y: e.y });
        onPress?.(e);
    };

    const handleAnimationEnd = () => {
        setCoords(null);
    };

    return { coords, handlePress, handleAnimationEnd };
};
