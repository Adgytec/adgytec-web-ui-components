import type {
  ToggleButtonGroupProps as AriaToggleButtonGroupProps,
  Key,
} from "react-aria-components";
import type { ColorTheme } from "../../utils/types";

export interface ToggleButtonGroupItem {
  id: Key;
  value: string;
  description?: string;
  isDisabled?: boolean;
}

export interface ToggleButtonGroupProps extends AriaToggleButtonGroupProps {
  items: ToggleButtonGroupItem[];
  theme?: ColorTheme;
}
