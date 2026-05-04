import clsx from "clsx";
import { Checkbox as AriaCheckbox } from "react-aria-components";
import { TapTarget } from "@/utils/tapTarget";
import styles from "./checkbox.module.css";
import type { CheckboxProps } from "./types";
import { useContext } from "react";
import { CheckboxGroupContext } from "./context";

export const Checkbox: React.FC<CheckboxProps> = ({
    children,
    className,
    labelPlacement,
    ...props
}) => {
    const { labelPlacement: groupLabelPlacement } =
        useContext(CheckboxGroupContext);
    const placement = labelPlacement ?? groupLabelPlacement ?? "end";

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
            {(renderProps) => {
                const {
                    isSelected,
                    isHovered,
                    isDisabled,
                    isFocused,
                    isFocusVisible,
                    isPressed,
                    isInvalid,
                    isIndeterminate,
                } = renderProps;

                const dataAttrs = {
                    "data-selected": isSelected || undefined,
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-invalid": isInvalid || undefined,
                    "data-indeterminate": isIndeterminate || undefined,
                };

                const label =
                    typeof children === "function"
                        ? children(renderProps)
                        : children;
                return (
                    <>
                        {placement === "start" && label}

                        <span
                            className={clsx(styles["indicator"], TapTarget)}
                            {...dataAttrs}
                        >
                            <svg
                                viewBox="0 0 18 18"
                                aria-hidden="true"
                                key={
                                    isIndeterminate ? "indeterminate" : "check"
                                }
                                className={styles["svg"]}
                                {...dataAttrs}
                            >
                                {isIndeterminate ? (
                                    <rect x={1} y={7.5} width={16} height={3} />
                                ) : (
                                    <polyline points="2 9 7 14 16 4" />
                                )}
                            </svg>
                        </span>

                        {placement === "end" && label}
                    </>
                );
            }}
        </AriaCheckbox>
    );
};
