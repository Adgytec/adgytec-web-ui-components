import clsx from "clsx";
import { Check, ChevronRight } from "lucide-react";
import { MenuItem as AriaMenuItem } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { typography } from "@/utils/typography";
import {
    MenuItemIconSize,
    menuItemBaseColor,
    menuItemLabelColor,
} from "../core";
import styles from "../styles/menu.module.css";
import type { MenuItemProps } from "./types";

export const MenuItem: React.FC<MenuItemProps> = ({
    leadingIcon,
    children,
    supportingText,
    trailingText,
    badge,
    className,
    ...props
}) => {
    return (
        <AriaMenuItem
            className={(renderProps) =>
                clsx(
                    menuItemBaseColor,
                    styles["menu-item"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-multi-line={supportingText ? true : undefined}
        >
            {({ hasSubmenu, isSelected }) => {
                return (
                    <>
                        {/* leading comps */}
                        <div className={clsx(styles["menu-item-leading"])}>
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
                                    {children}
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
                        <div className={clsx(styles["menu-item-trailing"])}>
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
