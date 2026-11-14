import { FloatingActionButton } from "../../FloatingActionButton";
import { useFABMenuVariant } from "../context";
import type { FABMenuButtonProps } from "./types";

export const FABMenuButton: React.FC<FABMenuButtonProps> = ({ ...props }) => {
    const variant = useFABMenuVariant();
    return (
        <FloatingActionButton
            variant={variant}
            {...props}
            data-fab-menu-button
        />
    );
};
