import clsx from "clsx";
import { Input as AriaInput, TextField } from "react-aria-components";
import type { TextFieldProps } from "@/utils/textField/types";
import { typography } from "@/utils/typography";
import { EditorStyles, TextFieldStyles } from "../core";
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
                    TextFieldStyles,
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
                className={clsx(EditorStyles, typography.bodyLarge)}
            />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </TextField>
    );
};
