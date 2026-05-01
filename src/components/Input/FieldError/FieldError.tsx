import { clsx } from "clsx";
import {
    FieldError as AriaFieldError,
    type FieldErrorProps,
} from "react-aria-components";
import { typography } from "@/utils/typography";
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
                    typography.labelMedium,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
