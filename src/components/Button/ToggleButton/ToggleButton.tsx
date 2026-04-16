import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { withTooltip } from "../core";
import type { ToggleButtonProps } from "./types";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    tooltip,
    icon,
    ...props
}) => {
    return withTooltip(<AriaToggleButton {...props} />, tooltip);
};
