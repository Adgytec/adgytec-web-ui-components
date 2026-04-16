import { Button as AriaButton } from "react-aria-components";
import type { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    ...props
}) => {
    return <AriaButton {...props} />;
};
