import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { withTooltip } from "../core";
import type { ToggleIconButtonProps } from "./types";

export const ToggleIconButton: React.FC<ToggleIconButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    width = "default",
    tooltip,
    selectedIcon,
    icon,
    ...props
}) => {
    return withTooltip(
        <AriaToggleButton {...props}>
            {({ isSelected }) =>
                isSelected && selectedIcon ? (
                    <Icon icon={selectedIcon} />
                ) : (
                    <Icon icon={icon} />
                )
            }
        </AriaToggleButton>,
        tooltip
    );
};
