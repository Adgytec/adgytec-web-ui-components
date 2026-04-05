// TODO: better client api
// also way to update errors from client
// this is required to update error message if user language is changed and error is currently displayed

import { clsx } from "clsx";
import { type SyntheticEvent, useState } from "react";
import { Form as UnstyledForm } from "react-aria-components";
import type * as z from "zod";
import { validateAndGetFormValues } from "@/utils/form";
import styles from "./form.module.css";
import type { FormProps } from "./types";

export const Form = <T extends z.ZodTypeAny>({
    schema,
    onSubmit,
    children,
    ...props
}: FormProps<T>) => {
    const [errors, setErrors] = useState({});

    const handleFormSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        const formElement = e.currentTarget;

        const values = validateAndGetFormValues(formElement, schema);
        if (!values.success) {
            setErrors(values.errors);
            return;
        }

        const submitErrors = await onSubmit(values.data, () =>
            formElement.reset()
        );
        if (submitErrors) {
            setErrors(submitErrors);
            return;
        }
    };

    return (
        <UnstyledForm
            {...props}
            validationErrors={errors}
            onSubmit={handleFormSubmit}
            className={clsx(styles["form"], props.className)}
        >
            {children}
        </UnstyledForm>
    );
};
