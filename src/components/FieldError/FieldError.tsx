import { clsx } from "clsx";
import {
    FieldError as AriaFieldError,
    type FieldErrorProps,
} from "react-aria-components";
import styles from "./fieldError.module.css";

export const FieldError: React.FC<FieldErrorProps> = ({
    className,
    ...props
}) => {
    return (
        <AriaFieldError
            className={(renderProps) =>
                clsx(
                    styles["error"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
