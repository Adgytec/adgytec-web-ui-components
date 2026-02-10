import type { TextAreaProps } from "./types";
import { TextField, TextArea as AriaTextArea } from "react-aria-components";
import { Label } from "@/components/Form/Label/Label";
import { FieldError } from "@/components/Form/FieldError/FieldError";
import styles from "./textArea.module.css";
import clsx from "clsx";

export const TextArea = ({
    label,
    textFieldProps,
    textAreaProps,
    labelProps,
    fieldErrorProps,
}: TextAreaProps) => {
    return (
        <TextField
            {...textFieldProps}
            className={clsx(styles["textarea"], textFieldProps?.className)}
        >
            {label && <Label {...labelProps}>{label}</Label>}
            <AriaTextArea
                {...textAreaProps}
                className={clsx(styles["editor"], textFieldProps?.className)}
            />
            <FieldError {...fieldErrorProps} />
        </TextField>
    );
};
