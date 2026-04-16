import { ToggleButton as AriaToggleButton } from "react-aria-components";
import type { ToggleButtonProps } from "./types";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    ...props
}) => {
    return <AriaToggleButton {...props} />;
};
