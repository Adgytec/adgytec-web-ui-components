import { useRef, useState, useEffect } from "react";
import type { SetTimeoutReturnType, SplashState } from "./types";
import type { PressEvent } from "react-aria-components";

export const useSplash = (onPress?: (e: PressEvent) => void) => {
  const [coords, setCoords] = useState<SplashState | null>(null);
  const idRef = useRef(0);
  let timeout = useRef<SetTimeoutReturnType | undefined>(undefined);

  let handlePress = (e: PressEvent) => {
    setCoords({ id: idRef.current++, x: e.x, y: e.y });
    if (e.x !== -1 && e.y !== -1) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCoords(null), 500);
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
