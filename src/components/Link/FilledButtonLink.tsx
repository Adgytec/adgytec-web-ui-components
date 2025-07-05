import ButtonLink from "../Button/ButtonLink";
import { ButtonVariant } from "../Button/types";
import type { LinkProps } from "./types";
import { getButtonThemeFromLinkTheme } from "./utils";

const FilledButtonLink = (props: LinkProps) => {
  return (
    <ButtonLink
      {...props}
      theme={getButtonThemeFromLinkTheme(props.theme)}
      variant={ButtonVariant.filled}
    />
  );
};

export default FilledButtonLink;
