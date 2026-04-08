import clsx from "clsx";
import { TextArea as AriaTextArea, TextField } from "react-aria-components";
import styles from "@/utils/textField/textField.module.css";
import type { TextFieldProps } from "@/utils/textField/types";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";

export const TextArea: React.FC<TextFieldProps> = ({
    label,
    description,
    placeholder,
    validationBehavior = "aria",
    className,
    errorMessage,
    ...props
}) => {
    return (
        <TextField
            validationBehavior={validationBehavior}
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
            <AriaTextArea
                placeholder={placeholder}
                className={clsx(styles["editor"], styles["textarea"])}
            />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </TextField>
    );
};
