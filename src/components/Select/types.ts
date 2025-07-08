import type { ButtonVariant } from "../Button/types";

export type SelectOptions = {
  key: string;
  displayValue: string;
  description?: string;
  disabled?: boolean;
};

export interface SelectProps {
  options: SelectOptions[];
  required?: boolean;
  label?: string;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  description?: string;
  triggerVariant?: ButtonVariant;
}
