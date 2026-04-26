import clsx from "clsx";
import { Check, ChevronRight } from "lucide-react";
import { MenuItem as AriaMenuItem } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { typography } from "@/utils/typography";
import { MenuItemIconSize } from "../core";
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
        <AriaMenuItem
            {...props}
            data-supporting-text={supportingText ? true : undefined}
        >
            {({ hasSubmenu, isSelected }) => {
                return (
                    <>
                        {/* leading comps */}
                        <div>
                            {isSelected ? (
                                <Icon icon={Check} size={MenuItemIconSize} />
                            ) : (
                                leadingIcon && (
                                    <Icon
                                        icon={leadingIcon}
                                        size={MenuItemIconSize}
                                    />
                                )
                            )}

                            <div>
                                <p
                                    slot="label"
                                    className={clsx(typography.labelLarge)}
                                >
                                    {label}
                                </p>

                                {supportingText && (
                                    <p
                                        slot="description"
                                        className={clsx(typography.bodySmall)}
                                    >
                                        {supportingText}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* trailing comps */}
                        <div>
                            {badge && badge}

                            {trailingText && trailingText}

                            {hasSubmenu && (
                                <Icon
                                    icon={ChevronRight}
                                    size={MenuItemIconSize}
                                />
                            )}
                        </div>
                    </>
                );
            }}
        </AriaMenuItem>
    );
};
