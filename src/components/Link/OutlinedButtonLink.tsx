import { ButtonLink } from "../Button/ButtonLink";
import { ButtonVariant } from "../Button/types";
import type { LinkProps } from "./types";

export const OutlinedButtonLink = (props: LinkProps) => {
  return <ButtonLink {...props} variant={ButtonVariant.outlined} />;
};
