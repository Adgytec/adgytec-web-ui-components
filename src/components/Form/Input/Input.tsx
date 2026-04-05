// TODO: will export individual fields
// TextField, Label, FieldError, Input, TextArea

import clsx from "clsx";
import { Input as AriaInput, TextField } from "react-aria-components";
import { FieldError } from "@/components/Form/FieldError/FieldError.tsx";
import { Label } from "@/components/Form/Label/Label";
import styles from "./input.module.css";
import type { InputProps } from "./types";

export const Input = ({
    label,
    textFieldProps,
    inputProps,
    labelProps,
    fieldErrorProps,
}: InputProps) => {
    return (
        <TextField
            {...textFieldProps}
            className={clsx(styles["input"], textFieldProps?.className)}
        >
            {label && <Label {...labelProps}>{label}</Label>}
            <AriaInput
                {...inputProps}
                className={clsx(styles["editor"], inputProps?.className)}
            />
            <FieldError {...fieldErrorProps} />
        </TextField>
    );
};
