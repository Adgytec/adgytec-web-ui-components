import clsx from "clsx";
import { useContext } from "react";
import { Checkbox as AriaCheckbox } from "react-aria-components";
import { typography } from "@/utils";
import { TapTarget } from "@/utils/tapTarget";
import styles from "./checkbox.module.css";
import { CheckboxGroupContext } from "./context";
import type { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = ({
    children,
    className,
    labelPlacement,
    containerStateLayer,
    ...props
}) => {
    const {
        labelPlacement: groupLabelPlacement,
        containerStateLayer: groupContainerStateLayer,
    } = useContext(CheckboxGroupContext);
    const placement = labelPlacement ?? groupLabelPlacement ?? "end";
    const stateLayer = containerStateLayer ?? groupContainerStateLayer ?? false;

    return (
        <AriaCheckbox
            className={(renderProps) =>
                clsx(
                    styles["checkbox"],
                    stateLayer && styles["state-layer"],
                    typography.labelLarge,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-checkbox
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
                    "data-show-state-layer": !stateLayer || undefined,
                    "data-filled": isSelected || isIndeterminate || undefined,
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
