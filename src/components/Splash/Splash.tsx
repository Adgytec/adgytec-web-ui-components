import type { SplashProps } from "./types";
import styles from "./splash.module.css";

const Splash = ({ id, x, y }: SplashProps) => {
  return (
    <div
      key={`${id}`}
      className={`${styles["splash"]}`}
      style={{
        left: x,
        top: y,
        translate: "-50% -50%",
      }}
    />
  );
};

export default Splash;
