import type { SplashProps } from "./types";
import styles from "./splash.module.css";

export const Splash = ({ id, x, y }: SplashProps) => {
  return (
    <div
      key={`${id}`}
      className={`${styles["splash"]}`}
      style={{
        insetInlineStart: x,
        insetBlockStart: y,
        translate: "-50% -50%",
      }}
    />
  );
};
