import type { ColorTheme } from "../../utils/types";
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
  colorTheme?: ColorTheme;
  description?: string;
  triggerVariant?: ButtonVariant;
}
