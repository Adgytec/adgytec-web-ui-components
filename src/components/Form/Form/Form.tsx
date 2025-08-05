import * as z from "zod";
import type { FormProps } from "./types";
import { Form as UnstyledForm } from "react-aria-components";
import styles from "./form.module.css";
import { useState, type FormEvent } from "react";
import { validateAndGetFormValues } from "@/utils/form";

export const Form = <T extends z.ZodObject<any>>({
  schema,
  onSubmit,
  children,
  ...props
}: FormProps<T>) => {
  const [errors, setErrors] = useState({});

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formElement = e.currentTarget;

    const values = validateAndGetFormValues(formElement, schema);
    if (!values.success) {
      setErrors(values.errors);
      return;
    }

    const submitErrors = await onSubmit(values.data, () => formElement.reset());
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
      className={props.className ?? styles["form"]}
    >
      {children}
    </UnstyledForm>
  );
};
