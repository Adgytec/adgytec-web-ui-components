import {
    FieldError as UnstyledFieldError,
    type FieldErrorProps,
} from "react-aria-components";
import styles from "./fieldError.module.css";
import { clsx } from "clsx";

export const FieldError = (props: FieldErrorProps) => {
    return (
        <UnstyledFieldError
            {...props}
            className={clsx(styles["error"], props.className)}
        />
    );
};
