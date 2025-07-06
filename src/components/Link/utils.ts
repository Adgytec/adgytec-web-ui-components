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
    case LinkTheme.tertiary:
      return ButtonTheme.tertiary;
    case LinkTheme.error:
      return ButtonTheme.error;
  }
};
