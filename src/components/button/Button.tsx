import styles from "./button.module.css";
import {
  Button as UnstyledButton,
  type PressEvent,
} from "react-aria-components";

import type { ButtonProps } from "./types.ts";
import { useEffect, useRef, useState } from "react";

const Button = ({
  onPress,
  variant,
  theme,
  children,
  disabled,
}: ButtonProps) => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  let timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  let handleOnPress = (e: PressEvent) => {
    setCoords({ x: e.x, y: e.y });
    if (e.x !== -1 && e.y !== -1) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCoords(null), 600);
    }
    onPress();
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <UnstyledButton
      className={`${styles["button"]} ${disabled && styles["disabled"]} ${styles[variant]} ${styles[theme]}`}
      onPress={handleOnPress}
      isDisabled={disabled}
    >
      {coords && (
        <div
          key={`${coords.x},${coords.y}`}
          className={`${styles["splash"]}`}
          style={{
            left: coords.x - 15,
            top: coords.y - 15,
          }}
        />
      )}
      {children}
    </UnstyledButton>
  );
};

export default Button;
