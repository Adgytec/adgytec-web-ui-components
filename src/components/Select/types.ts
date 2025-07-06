import type { ButtonTheme, ButtonVariant } from "../Button/types";

export type SelectOptions = {
  key: string;
  displayValue: string;
};

export interface SelectProps {
  options: SelectOptions[];
  label?: string;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  triggerTheme: ButtonTheme;
  triggerVariant: ButtonVariant;
}
