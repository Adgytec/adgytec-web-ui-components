import type { FormProps as AriaFormProps } from "react-aria-components";
import * as z from "zod";

export type FormReset = () => void;

// this submit handler can optionally return field level errors
// success is handled by parent component and form level error also
export type SubmitHandler<T> = (
  values: T,
  reset: FormReset,
) => void | Promise<void | Partial<Record<keyof T, string | string[]>>>;

export interface FormProps<T extends z.ZodObject<any>>
  extends Omit<AriaFormProps, "onSubmit" | "validationErrors"> {
  schema: T;
  onSubmit: SubmitHandler<z.infer<T>>;
}
