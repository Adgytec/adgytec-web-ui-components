import { ButtonLink } from "@/components/Button/ButtonBase/ButtonLink";
import type { LinkProps } from "@/components/Link/LinkBase/types";

export const OutlinedButtonLink = (props: LinkProps) => {
  return <ButtonLink {...props} variant="outlined" />;
};
