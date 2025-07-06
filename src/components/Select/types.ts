import type { ColorTheme } from "../../utils/types";
import type { ButtonVariant } from "../Button/types";

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
  triggerTheme: ColorTheme;
  triggerVariant: ButtonVariant;
}
