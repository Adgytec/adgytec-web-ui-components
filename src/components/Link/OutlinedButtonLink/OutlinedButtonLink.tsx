// TODO: will be removed, there will be better impl to define link which are visually styled as buttons

import { ButtonLink } from "@/components/Button/ButtonBase/ButtonLink";
import type { LinkProps } from "@/components/Link/LinkBase/types";

export const OutlinedButtonLink = (props: LinkProps) => {
    return <ButtonLink {...props} variant="outlined" />;
};
