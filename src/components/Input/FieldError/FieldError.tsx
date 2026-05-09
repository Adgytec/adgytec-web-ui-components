import { clsx } from "clsx";
import { FieldError as AriaFieldError } from "react-aria-components";
import { typography } from "@/utils/typography";
import styles from "./fieldError.module.css";

export const FieldError: React.FC<
    React.ComponentPropsWithRef<typeof AriaFieldError>
> = ({ className, ...props }) => {
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
