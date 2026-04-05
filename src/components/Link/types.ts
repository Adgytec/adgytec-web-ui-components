import type { LinkProps as AriaLinkProps } from "react-aria-components";
import type { ButtonShape, ButtonVariant } from "@/utils/button/types";
import type { ColorTheme } from "@/utils/types";

export type LinkVisual = "link" | "button";

export interface LinkProps extends AriaLinkProps {
    visual?: LinkVisual;
    theme?: ColorTheme;
    description?: string;
    underline?: boolean;

    // these values are only used when visual is button
    variant?: ButtonVariant;
    shape?: ButtonShape;
}
