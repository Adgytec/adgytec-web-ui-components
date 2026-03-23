import type { FormProps as AriaFormProps } from "react-aria-components";
import type * as z from "zod";

export type FormReset = () => void;

type SubmitResult<T> = Partial<Record<keyof T, string | string[]>> | undefined;

// this submit handler can optionally return field level errors
// success is handled by parent component and form level error also
export type SubmitHandler<T> = (
    values: T,
    reset: FormReset
) => SubmitResult<T> | Promise<SubmitResult<T>>;

export interface FormProps<T extends z.ZodTypeAny>
    extends Omit<AriaFormProps, "onSubmit" | "validationErrors"> {
    schema: T;
    onSubmit: SubmitHandler<z.infer<T>>;
}
