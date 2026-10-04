import clsx from "clsx";
import { Check } from "lucide-react";
import { ListBoxItem } from "react-aria-components";
import { Icon } from "@/components/Icon";
import {
    MenuItemIconSize,
    MenuItemLeadingStyles,
    MenuItemStyles,
    MenuItemTrailingStyles,
    menuItemBaseColor,
    menuItemLabelColor,
} from "@/components/Menu";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { typography } from "@/utils";
import type { SelectItemProps } from "./types";

/**
 * An individual option item within a {@link SelectList}.
 *
 * Implements Material Design 3 selection list item styling, featuring automatic checkmark
 * display upon selection, optional leading and trailing icons, and multi-line supporting text.
 *
 * @example
 * ```tsx
 * import { SelectItem } from '@adgytec/web-ui-components';
 * import { User } from 'lucide-react';
 *
 * <SelectItem
 *     id="user-1"
 *     label="Alex Smith"
 *     supportingText="Administrator"
 *     leadingIcon={User}
 * />
 * ```
 */
export const SelectItem: React.FC<SelectItemProps> = ({
    leadingIcon,
    label,
    supportingText,
    trailingText,
    trailingIcon,
    className,
    onPress,
    textValue = label,
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
            textValue={textValue}
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
