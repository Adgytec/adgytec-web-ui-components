import * as z from "zod";

interface FormValidateSuccessResult<T> {
  success: true;
  data: T;
}

interface FormValidateFailureResult<T> {
  success: false;
  errors: Partial<Record<keyof T, string | string[]>>;
}

type FormValidateResult<T> =
  | FormValidateSuccessResult<T>
  | FormValidateFailureResult<T>;

export type ValidateAndGetFormValues = <T extends z.ZodObject<any>>(
  formElement: HTMLFormElement,
  schema: T,
) => FormValidateResult<z.infer<T>>;

export const validateAndGetFormValues: ValidateAndGetFormValues = (
  formElement,
  schema,
) => {
  const valueObject = Object.fromEntries(new FormData(formElement));
  const result = schema.safeParse(valueObject);
  if (result.success) {
    return {
      success: true,
      data: result.data,
    };
  }

  return {
    success: false,
    errors: z.flattenError(result.error).fieldErrors,
  };
};
