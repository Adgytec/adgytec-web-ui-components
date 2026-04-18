import { ChevronRight } from "lucide-react";
import { MenuItem as AriaMenuItem } from "react-aria-components";
import { Icon } from "@/components/Icon";
import type { MenuItemProps } from "./types";

export const MenuItem: React.FC<MenuItemProps> = ({
    leadingIcon,
    label,
    supportingText,
    trailingText,
    badge,
    ...props
}) => {
    return (
        <AriaMenuItem {...props}>
            {({ hasSubmenu }) => {
                return (
                    <>
                        {leadingIcon && <Icon icon={leadingIcon} />}

                        <div>
                            <p>{label}</p>

                            {supportingText && <p>{supportingText}</p>}
                        </div>

                        {badge && { badge }}

                        {trailingText && { trailingText }}

                        {hasSubmenu && <Icon icon={ChevronRight} />}
                    </>
                );
            }}
        </AriaMenuItem>
    );
};
