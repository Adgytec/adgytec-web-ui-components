import { MenuTrigger } from "react-aria-components";
import { FABMenuVariantContext } from "../context";
import type { FABMenuTriggerProps } from "./types";

export const FABMenuTrigger: React.FC<FABMenuTriggerProps> = ({
    variant = "primary",
    ...props
}) => {
    return (
        <FABMenuVariantContext value={{ variant }}>
            <MenuTrigger {...props} />
        </FABMenuVariantContext>
    );
};
