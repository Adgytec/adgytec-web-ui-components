import clsx from "clsx";
import { TextArea as AriaTextArea, TextField } from "react-aria-components";
import { FieldError } from "@/components/Form/FieldError/FieldError";
import { Label } from "@/components/Form/Label/Label";
import styles from "./textArea.module.css";
import type { TextAreaProps } from "./types";

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
                className={clsx(styles["editor"], textAreaProps?.className)}
            />
            <FieldError {...fieldErrorProps} />
        </TextField>
    );
};
