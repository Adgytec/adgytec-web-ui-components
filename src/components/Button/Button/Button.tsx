import { Button as AriaButton } from "react-aria-components";
import { withTooltip } from "../core";
import type { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    tooltip,
    icon,
    ...props
}) => {
    return withTooltip(<AriaButton {...props} />, tooltip);
};
