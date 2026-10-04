import { useCallback, useRef, useState } from "react";
import type { PressEvent } from "react-aria-components";
import type { SplashState } from "./types";

/**
 * Custom hook that coordinates Material Design ripple splash animation state on pointer press.
 *
 * Captures press coordinates from React Aria's {@link PressEvent} and generates active {@link SplashState},
 * automatically cleaning up the ripple element once the CSS expansion animation finishes.
 *
 * @param onPress - Optional consumer press handler invoked alongside splash creation.
 * @returns Object containing `splashInfo` (active ripple data or `null`) and stable `handlePress` callback.
 *
 * @example
 * ```tsx
 * const { splashInfo, handlePress } = useSplash(onPress);
 *
 * return (
 *     <AriaButton onPress={handlePress}>
 *         {splashInfo && <Splash {...splashInfo} />}
 *         Label
 *     </AriaButton>
 * );
 * ```
 */
export const useSplash = (onPress?: (e: PressEvent) => void) => {
    const [splashInfo, setSplashInfo] = useState<SplashState | null>(null);
    const idRef = useRef(0);

    const handleAnimationEnd = useCallback(() => {
        setSplashInfo(null);
    }, []);

    const handlePress = useCallback(
        (e: PressEvent) => {
            setSplashInfo({
                id: idRef.current++,
                x: e.x,
                y: e.y,
                onAnimationEnd: handleAnimationEnd,
            });
            onPress?.(e);
        },
        [onPress, handleAnimationEnd]
    );

    return { splashInfo, handlePress };
};
