import clsx from "clsx";
import { Check, type LucideIcon, X } from "lucide-react";
import type { ReactNode } from "react";
import { Switch as AriaSwitch, type SwitchProps } from "react-aria-components";
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

                const dataAttributes = {
                    "data-selected": isSelected,
                    "data-hovered": isHovered,
                    "data-disabled": isDisabled,
                    "data-focused": isFocused,
                    "data-focus-visible": isFocusVisible,
                    "data-pressed": isPressed,
                    "data-readonly": isReadOnly,
                    "data-icon": iconValue !== undefined,
                };

                // remove false values (so they don't render)
                const filteredDataAttrs = Object.fromEntries(
                    Object.entries(dataAttributes).filter(([_, v]) => v)
                );

                let iconElement: ReactNode;
                if (iconValue) {
                    iconElement = (
                        <Icon
                            icon={iconValue}
                            size={16}
                            className={clsx(styles["icon"])}
                            {...filteredDataAttrs}
                        />
                    );
                }
                return (
                    <>
                        {children}

                        <div
                            {...filteredDataAttrs}
                            className={styles["target"]}
                        >
                            <div
                                {...filteredDataAttrs}
                                className={clsx(styles["track"])}
                            >
                                <div
                                    {...filteredDataAttrs}
                                    className={clsx(styles["handle"])}
                                >
                                    {iconElement}
                                </div>
                            </div>
                        </div>
                    </>
                );
            }}
        </AriaSwitch>
    );
};
