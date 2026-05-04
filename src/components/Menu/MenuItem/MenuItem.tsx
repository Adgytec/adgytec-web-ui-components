import clsx from "clsx";
import { Check, ChevronRight } from "lucide-react";
import { MenuItem as AriaMenuItem } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { typography } from "@/utils/typography";
import {
    MenuItemIconSize,
    MenuItemLeadingStyles,
    MenuItemStyles,
    MenuItemTrailingStyles,
    menuItemBaseColor,
    menuItemLabelColor,
} from "../core";
import type { MenuItemProps } from "./types";

export const MenuItem: React.FC<MenuItemProps> = ({
    leadingIcon,
    label,
    supportingText,
    trailingText,
    trailingIcon,
    className,
    onPress,
    ...props
}) => {
    const { splashInfo, handlePress } = useSplash(onPress);

    return (
        <AriaMenuItem
            className={(renderProps) =>
                clsx(
                    menuItemBaseColor,
                    MenuItemStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            onPress={handlePress}
            {...props}
            data-multi-line={supportingText ? true : undefined}
        >
            {({ hasSubmenu, isSelected }) => {
                return (
                    <>
                        {splashInfo && <Splash {...splashInfo} />}

                        {/* leading comps */}
                        <div className={clsx(MenuItemLeadingStyles)}>
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
                                    className={clsx(
                                        typography.labelLarge,
                                        menuItemLabelColor
                                    )}
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
                        <div className={clsx(MenuItemTrailingStyles)}>
                            {trailingText && trailingText}

                            {hasSubmenu ? (
                                <Icon
                                    icon={ChevronRight}
                                    size={MenuItemIconSize}
                                />
                            ) : (
                                trailingIcon && (
                                    <Icon
                                        icon={trailingIcon}
                                        size={MenuItemIconSize}
                                    />
                                )
                            )}
                        </div>
                    </>
                );
            }}
        </AriaMenuItem>
    );
};
