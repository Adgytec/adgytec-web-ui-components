import clsx from "clsx";
import type { ReactNode } from "react";
import { Switch as AriaSwitch, type SwitchProps } from "react-aria-components";
import styles from "./switch.module.css";
import { Icon } from "../Icon";
import { Check, X } from "lucide-react";

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
                let iconElement: ReactNode;
                if (icon !== "none" && isSelected) {
                    iconElement = <Icon icon={Check} size={16} />;
                }

                if (icon === "both" && !isSelected) {
                    iconElement = <Icon icon={X} size={16} />;
                }

                const dataAttributes = {
                    "data-selected": isSelected,
                    "data-hovered": isHovered,
                    "data-disabled": isDisabled,
                    "data-focused": isFocused,
                    "data-focus-visible": isFocusVisible,
                    "data-pressed": isPressed,
                    "data-readonly": isReadOnly,
                    "data-icon": iconElement !== undefined,
                };

                // remove false values (so they don't render)
                const filteredDataAttrs = Object.fromEntries(
                    Object.entries(dataAttributes).filter(([_, v]) => v)
                );
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
