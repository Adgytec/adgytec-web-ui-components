import { ToggleButton as AriaToggleButton } from "react-aria-components";
import type { ToggleIconButtonProps } from "./types";

export const ToggleIconButton: React.FC<ToggleIconButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    width = "default",
    ...props
}) => {
    return <AriaToggleButton {...props} />;
};
