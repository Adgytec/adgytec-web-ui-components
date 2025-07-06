import ButtonLink from "../Button/ButtonLink";
import { ButtonVariant } from "../Button/types";
import type { LinkProps } from "./types";

const FilledButtonLink = (props: LinkProps) => {
  return <ButtonLink {...props} variant={ButtonVariant.filled} />;
};

export default FilledButtonLink;
