import { Button as AriaButton } from "react-aria-components";
import type { IconButtonProps } from "./types";

export const IconButton: React.FC<IconButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    width = "default",
    ...props
}) => {
    return <AriaButton {...props} />;
};
