import { clsx } from "clsx";
import {
    type FieldErrorProps,
    FieldError as UnstyledFieldError,
} from "react-aria-components";
import styles from "./fieldError.module.css";

export const FieldError = (props: FieldErrorProps) => {
    return (
        <UnstyledFieldError
            {...props}
            className={clsx(styles["error"], props.className)}
        />
    );
};
