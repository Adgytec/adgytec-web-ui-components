import clsx from "clsx";
import { Check, type LucideIcon, X } from "lucide-react";
import type { ReactNode } from "react";
import {
    SwitchField as AriaSwitchField,
    SwitchButton,
} from "react-aria-components";
import { Icon } from "@/components/Icon";
import { TapTarget } from "@/utils";
import styles from "./switch.module.css";
import type { SwitchProps } from "./types";

/**
 * A toggle switch control implementing Material Design 3 Switch specifications.
 *
 * Toggles a binary on/off setting with an animated sliding thumb indicator, support for optional
 * handle icons (such as checkmark and cross), and configurable label placement. Built on React Aria's
 * `SwitchField` and `SwitchButton` components for robust accessibility, keyboard navigation, and form integration.
 *
 * @example
 * ```tsx
 * import { Switch } from "@adgytec/web-ui-components";
 *
 * <Switch isSelected={airplaneMode} onChange={setAirplaneMode}>
 *     Airplane Mode
 * </Switch>
 * ```
 *
 * @example
 * ```tsx
 * // With custom icons in both on/off states and label placed after switch
 * import { Switch } from "@adgytec/web-ui-components";
 * import { Wifi, WifiOff } from "lucide-react";
 *
 * <Switch
 *     icon="both"
 *     selectedIcon={Wifi}
 *     unselectedIcon={WifiOff}
 *     labelPlacement="end"
 * >
 *     Wi-Fi
 * </Switch>
 * ```
 */
export const Switch: React.FC<SwitchProps> = ({
    children,
    icon = "selected",
    labelPlacement = "start",
    unselectedIcon = X,
    selectedIcon = Check,
    ...props
}) => {
    return (
        <AriaSwitchField {...props}>
            {(renderProps) => {
                const label =
                    typeof children === "function"
                        ? children(renderProps)
                        : children;

                return (
                    <SwitchButton className={clsx(styles["switch"])}>
                        {(renderProps) => {
                            const {
                                isSelected,
                                isHovered,
                                isDisabled,
                                isFocused,
                                isFocusVisible,
                                isPressed,
                                isReadOnly,
                            } = renderProps;

                            let iconValue: LucideIcon | undefined;
                            if (icon !== "none" && isSelected) {
                                iconValue = selectedIcon;
                            }

                            if (icon === "both" && !isSelected) {
                                iconValue = unselectedIcon;
                            }

                            const dataAttrs = {
                                "data-selected": isSelected || undefined,
                                "data-hovered": isHovered || undefined,
                                "data-disabled": isDisabled || undefined,
                                "data-focused": isFocused || undefined,
                                "data-focus-visible":
                                    isFocusVisible || undefined,
                                "data-pressed": isPressed || undefined,
                                "data-readonly": isReadOnly || undefined,
                                "data-icon": iconValue ? true : undefined,
                            };

                            let iconElement: ReactNode;
                            if (iconValue) {
                                iconElement = (
                                    <Icon
                                        icon={iconValue}
                                        size={16}
                                        className={clsx(styles["icon"])}
                                        {...dataAttrs}
                                    />
                                );
                            }

                            return (
                                <>
                                    {labelPlacement === "start" && label}

                                    <span
                                        {...dataAttrs}
                                        className={clsx(
                                            styles["track"],
                                            TapTarget
                                        )}
                                    >
                                        <span
                                            {...dataAttrs}
                                            className={clsx(styles["handle"])}
                                        >
                                            {iconElement}
                                        </span>
                                    </span>

                                    {labelPlacement === "end" && label}
                                </>
                            );
                        }}
                    </SwitchButton>
                );
            }}
        </AriaSwitchField>
    );
};
