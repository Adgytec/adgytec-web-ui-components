import { ButtonLink } from "@/components/Button/ButtonBase/ButtonLink";
import type { LinkProps } from "@/components/Link/LinkBase/types";

export const FilledButtonLink = (props: LinkProps) => {
  return <ButtonLink {...props} variant="filled" />;
};
