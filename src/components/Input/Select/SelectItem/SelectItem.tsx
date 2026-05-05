import { ListBoxItem } from "react-aria-components";
import type { SelectItemProps } from "./types";
import { useSplash } from "@/components/Splash/useSplash";
import clsx from "clsx";
import {
    menuItemBaseColor,
    MenuItemIconSize,
    menuItemLabelColor,
    MenuItemLeadingStyles,
    MenuItemStyles,
    MenuItemTrailingStyles,
} from "@/components/Menu";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { typography } from "@/utils";
import { Check } from "lucide-react";

export const SelectItem: React.FC<SelectItemProps> = ({
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
        <ListBoxItem
            className={(renderProps) =>
                clsx(
                    menuItemBaseColor,
                    MenuItemStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            textValue={label}
            onPress={handlePress}
            {...props}
            data-multi-line={supportingText ? true : undefined}
        >
            {({ isSelected }) => (
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

                        {trailingIcon && (
                            <Icon icon={trailingIcon} size={MenuItemIconSize} />
                        )}
                    </div>
                </>
            )}
        </ListBoxItem>
    );
};
