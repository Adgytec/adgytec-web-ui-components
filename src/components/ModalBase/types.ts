import type { ReactElement, ReactNode } from "react";
import type { ButtonVariantProps } from "../Button/types";
import type { DialogRenderProps } from "react-aria-components";
import type { ColorTheme } from "../../utils/types";

export interface ModalBaseProps {
  theme?: ColorTheme;
  trigger: ReactElement<ButtonVariantProps>;
  children: ReactNode | ((opts: DialogRenderProps) => ReactNode);
  isDismissable?: boolean;
  isKeyboardDismissableDisabled?: boolean;
}
