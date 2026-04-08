import { clsx } from "clsx";
import {
    type FieldErrorProps,
    FieldError as UnstyledFieldError,
} from "react-aria-components";
import styles from "./fieldError.module.css";

export const FieldError: React.FC<FieldErrorProps> = ({
    className,
    ...props
}) => {
    return (
        <UnstyledFieldError
            className={clsx(styles["error"], className)}
            {...props}
        />
    );
};
