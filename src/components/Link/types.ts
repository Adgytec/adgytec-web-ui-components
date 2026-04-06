import type { LinkProps as AriaLinkProps } from "react-aria-components";
import type { ButtonShape, ButtonVariant } from "@/utils/button/types";
import type { ColorTheme } from "@/utils/types";

type ButtonVisual = {
    type: "button";
    variant?: ButtonVariant;
    shape?: ButtonShape;
};

export type Visual = "link" | ButtonVisual;

export interface LinkProps extends AriaLinkProps {
    visual?: Visual;
    theme?: ColorTheme;
    description?: string;
    underline?: boolean;
}

export type ButtonLinkProps = LinkProps & {
    visual: ButtonVisual;
};
