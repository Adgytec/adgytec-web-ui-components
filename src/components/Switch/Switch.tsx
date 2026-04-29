import clsx from "clsx";
import { Check, type LucideIcon, X } from "lucide-react";
import type { ReactNode } from "react";
import { Switch as AriaSwitch, type SwitchProps } from "react-aria-components";
import { TapTarget } from "@/utils/tapTarget";
import { Icon } from "../Icon";
import styles from "./switch.module.css";

export const Switch: React.FC<
    Omit<SwitchProps, "children"> & {
        children: ReactNode;
        icon?: "none" | "selected" | "both";
    }
> = ({ className, children, icon = "selected", ...props }) => {
    return (
        <AriaSwitch
            className={(renderProps) =>
                clsx(
                    styles["switch"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {({
                isSelected,
                isHovered,
                isDisabled,
                isFocused,
                isFocusVisible,
                isPressed,
                isReadOnly,
            }) => {
                let iconValue: LucideIcon | undefined;
                if (icon !== "none" && isSelected) {
                    iconValue = Check;
                }

                if (icon === "both" && !isSelected) {
                    iconValue = X;
                }

                const dataAttrs = {
                    "data-selected": isSelected || undefined,
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
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
                        {children}

                        <div
                            {...dataAttrs}
                            className={clsx(styles["track"], TapTarget)}
                        >
                            <div
                                {...dataAttrs}
                                className={clsx(styles["handle"])}
                            >
                                {iconElement}
                            </div>
                        </div>
                    </>
                );
            }}
        </AriaSwitch>
    );
};
