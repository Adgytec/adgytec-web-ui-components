import clsx from "clsx";
import { TextArea as AriaTextArea, TextField } from "react-aria-components";
import type { TextFieldProps } from "@/utils/textField/types";
import { typography } from "@/utils/typography";
import { EditorStyles, TextareaStyles, TextFieldStyles } from "../core";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";

export const TextArea: React.FC<TextFieldProps & { rows?: number }> = ({
    label,
    description,
    placeholder,
    className,
    errorMessage,
    rows,
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
            <AriaTextArea
                rows={rows}
                placeholder={placeholder}
                className={clsx(
                    EditorStyles,
                    TextareaStyles,
                    typography.bodyLarge
                )}
            />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </TextField>
    );
};
