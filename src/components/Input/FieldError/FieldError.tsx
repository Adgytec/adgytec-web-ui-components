import { clsx } from "clsx";
import { FieldError as AriaFieldError } from "react-aria-components";
import { typography } from "@/utils/typography";
import styles from "./fieldError.module.css";

/**
 * Props for the {@link FieldError} component.
 * Extends React Aria's {@link AriaFieldError} props.
 */
export interface FieldErrorProps
    extends React.ComponentPropsWithRef<typeof AriaFieldError> {}

/**
 * Renders error messages when an input component fails validation.
 *
 * Automatically displays validation feedback according to Material Design 3 error styles.
 */
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
