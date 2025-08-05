import type { ReactNode } from "react";
import { ButtonState, type ButtonChildProps } from "./types";
import styles from "./buttonChild.module.css";
import { Loader } from "@/components/Loader/Loader";
import { Check, TriangleAlert } from "lucide-react";

export const ButtonChild = ({ buttonState, value }: ButtonChildProps) => {
  const {
    enabled,
    disabled = enabled,
    pending = enabled,
    completed = enabled,
    error = "Try again",
  } = value;

  let child: ReactNode;
  switch (buttonState) {
    case ButtonState.enabled:
      child = enabled;
      break;
    case ButtonState.disabled:
      child = disabled;
      break;

    case ButtonState.pending:
      child = (
        <span className={styles["with-icon"]}>
          <Loader /> {pending}
        </span>
      );
      break;

    case ButtonState.completed:
      child = (
        <span className={styles["with-icon"]}>
          <Check /> {completed}
        </span>
      );
      break;

    case ButtonState.error:
      child = (
        <span className={styles["with-icon"]}>
          <TriangleAlert /> {error}
        </span>
      );
      break;
  }

  return <>{child}</>;
};
