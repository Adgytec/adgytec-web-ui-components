import { ButtonTheme } from "../Button/types";
import { LinkTheme } from "./types";

export const getButtonThemeFromLinkTheme = (theme: LinkTheme) => {
  switch (theme) {
    case LinkTheme.primary:
      return ButtonTheme.primary;
    case LinkTheme.primaryVariant:
      return ButtonTheme.primaryVariant;
    case LinkTheme.secondary:
      return ButtonTheme.secondary;
  }
};
