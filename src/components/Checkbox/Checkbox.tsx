import clsx from "clsx";
import { Checkbox as AriaCheckbox } from "react-aria-components";
import { Target } from "../Target";
import styles from "./checkbox.module.css";
import type { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <AriaCheckbox
            className={(renderProps) =>
                clsx(
                    styles["checkbox"],
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
            }) => {
                const dataAttrs = {
                    "data-selected": isSelected || undefined,
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                };

                return (
                    <>
                        <Target>
                            <div
                                className={styles["indicator"]}
                                {...dataAttrs}
                            ></div>
                        </Target>
                        {children}
                    </>
                );
            }}
        </AriaCheckbox>
    );
};
