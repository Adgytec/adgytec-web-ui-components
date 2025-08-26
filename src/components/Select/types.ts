import type { Key } from "react-aria-components";
import type { ButtonVariant } from "@/components/Button/ButtonBase/types";
import type { CardBackground } from "../Card/BaseCard";

export type SelectOptions = {
  key: string;
  displayValue: string;
  description?: string;
  disabled?: boolean;
};

export interface SelectProps {
  options: SelectOptions[];
  cardBackground?: CardBackground;
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
