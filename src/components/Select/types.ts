import type { Key } from "react-aria-components";
import type { ButtonVariant } from "../Button/types";

export type SelectOptions = {
  key: string;
  displayValue: string;
  description?: string;
  disabled?: boolean;
};

export interface SelectProps {
  options: SelectOptions[];
  isRequired?: boolean;
  label?: string;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  description?: string;
  triggerVariant?: ButtonVariant;
  selectedKey?: Key;
  onSelectionChange?: (key: Key | null) => void;
}
