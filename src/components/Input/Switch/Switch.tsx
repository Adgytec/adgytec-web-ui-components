import clsx from "clsx";
import { Check, type LucideIcon, X } from "lucide-react";
import type { ReactNode } from "react";
import { Switch as AriaSwitch } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { typography } from "@/utils";
import { TapTarget } from "@/utils/tapTarget";
import styles from "./switch.module.css";
import type { SwitchProps } from "./types";

export const Switch: React.FC<SwitchProps> = ({
    className,
    children,
    icon = "selected",
    labelPlacement = "start",
    containerStateLayer = false,
    ...props
}) => {
    return (
        <AriaSwitch
            className={(renderProps) =>
                clsx(
                    styles["switch"],
                    containerStateLayer && styles["state-layer"],
                    typography.labelLarge,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-switch
        >
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
                    "data-show-state-layer": !containerStateLayer || undefined,
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

                const label =
                    typeof children === "function"
                        ? children(renderProps)
                        : children;

                return (
                    <>
                        {labelPlacement === "start" && label}

                        <span
                            {...dataAttrs}
                            className={clsx(styles["track"], TapTarget)}
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
        </AriaSwitch>
    );
};
