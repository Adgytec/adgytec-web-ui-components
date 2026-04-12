import clsx from "clsx";
import type { ReactNode } from "react";
import { Switch as AriaSwitch, type SwitchProps } from "react-aria-components";
import styles from "./switch.module.css";

export const Switch: React.FC<
    Omit<SwitchProps, "children"> & {
        children: ReactNode;
        icon?: "none" | "selected" | "both";
    }
> = ({ className, children, icon = "none", ...props }) => {
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
                const dataAttributes = {
                    "data-selected": isSelected,
                    "data-hovered": isHovered,
                    "data-disabled": isDisabled,
                    "data-focused": isFocused,
                    "data-focus-visible": isFocusVisible,
                    "data-pressed": isPressed,
                    "data-readonly": isReadOnly,
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
                                ></div>
                            </div>
                        </div>
                    </>
                );
            }}
        </AriaSwitch>
    );
};
