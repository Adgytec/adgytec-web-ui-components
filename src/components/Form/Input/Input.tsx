import { TextField, Input as AriaInput } from "react-aria-components";
import type { InputProps } from "./types";
import { Label } from "@/components/Form/Label/Label";
import styles from "./input.module.css";
import { FieldError } from "@/components/Form/FieldError/FieldError.tsx";
import clsx from "clsx";

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
