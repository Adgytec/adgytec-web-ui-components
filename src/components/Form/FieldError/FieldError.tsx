import {
  FieldError as UnstyledFieldError,
  type FieldErrorProps,
} from "react-aria-components";
import styles from "./fieldError.module.css";

export const FieldError = (props: FieldErrorProps) => {
  return (
    <UnstyledFieldError
      {...props}
      className={props.className ?? styles["error"]}
    />
  );
};
