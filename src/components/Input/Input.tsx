import clsx from "clsx";
import { Input as AriaInput, TextField } from "react-aria-components";
import styles from "@/utils/textField/textField.module.css";
import type { TextFieldProps } from "@/utils/textField/types";
import { typography } from "@/utils/typography";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";

export const Input: React.FC<TextFieldProps> = ({
    label,
    description,
    placeholder,
    className,
    errorMessage,
    ...props
}) => {
    return (
        <TextField
            className={(renderProps) =>
                clsx(
                    styles["text-field"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {label && <Label>{label}</Label>}
            <AriaInput
                placeholder={placeholder}
                className={clsx(styles["editor"], typography.bodyLarge)}
            />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </TextField>
    );
};
