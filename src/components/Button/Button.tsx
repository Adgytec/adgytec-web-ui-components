// used splash from react-aria library example splash

import styles from "./button.module.css";
import {
  Button as UnstyledButton,
  type PressEvent,
} from "react-aria-components";

import type { ButtonProps, Splash } from "./types.ts";
import { useEffect, useRef, useState } from "react";

const Button = ({
  onPress,
  variant,
  theme,
  children,
  disabled,
}: ButtonProps) => {
  const [coords, setCoords] = useState<Splash | null>(null);
  const idRef = useRef(0);
  let timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  let handleOnPress = (e: PressEvent) => {
    setCoords({ id: idRef.current++, x: e.x, y: e.y });
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
      className={`${styles["button"]} ${styles[variant]} ${styles[theme]}`}
      onPress={handleOnPress}
      isDisabled={disabled}
    >
      {coords && (
        <div
          key={`${coords.id}`}
          className={`${styles["splash"]}`}
          style={{
            left: coords.x,
            top: coords.y,
            translate: "-50% -50%",
          }}
        />
      )}
      {children}
    </UnstyledButton>
  );
};

export default Button;
