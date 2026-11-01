import clsx from "clsx";
import { useContext } from "react";
import { CheckboxButton, CheckboxField } from "react-aria-components";
import { TapTarget } from "@/utils/tapTarget";
import styles from "./checkbox.module.css";
import { CheckboxGroupContext } from "./context";
import type { CheckboxProps } from "./types";

/**
 * A checkbox control implementing Material Design 3 Checkbox guidelines.
 *
 * Supports unchecked, checked, and indeterminate states with animated SVG paths,
 * accessible keyboard activation, state layers, and flexible label positioning.
 * Built on React Aria's `CheckboxField` and `CheckboxButton` components.
 *
 * @example
 * ```tsx
 * import { Checkbox } from "@adgytec/web-ui-components";
 *
 * <Checkbox isSelected={agree} onChange={setAgree}>
 *     I accept the terms and conditions
 * </Checkbox>
 * ```
 *
 * @example
 * ```tsx
 * // Indeterminate checkbox with start label placement
 * import { Checkbox } from "@adgytec/web-ui-components";
 *
 * <Checkbox isIndeterminate labelPlacement="start">
 *     Select all items
 * </Checkbox>
 * ```
 */
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
        <CheckboxField {...props} data-checkbox>
            {(renderProps) => {
                const label =
                    typeof children === "function"
                        ? children(renderProps)
                        : children;

                return (
                    <CheckboxButton className={clsx(styles["checkbox"])}>
                        {(buttonRenderProps) => {
                            const {
                                isSelected,
                                isHovered,
                                isDisabled,
                                isFocused,
                                isFocusVisible,
                                isPressed,
                                isInvalid,
                                isIndeterminate,
                            } = buttonRenderProps;

                            const dataAttrs = {
                                "data-selected": isSelected || undefined,
                                "data-hovered": isHovered || undefined,
                                "data-disabled": isDisabled || undefined,
                                "data-focused": isFocused || undefined,
                                "data-focus-visible":
                                    isFocusVisible || undefined,
                                "data-pressed": isPressed || undefined,
                                "data-invalid": isInvalid || undefined,
                                "data-indeterminate":
                                    isIndeterminate || undefined,
                                "data-filled":
                                    isSelected || isIndeterminate || undefined,
                            };

                            return (
                                <>
                                    {placement === "start" && label}

                                    <span
                                        className={clsx(
                                            styles["indicator"],
                                            TapTarget
                                        )}
                                        {...dataAttrs}
                                    >
                                        <svg
                                            viewBox="0 0 18 18"
                                            aria-hidden="true"
                                            key={
                                                isIndeterminate
                                                    ? "indeterminate"
                                                    : "check"
                                            }
                                            className={styles["svg"]}
                                            {...dataAttrs}
                                        >
                                            {isIndeterminate ? (
                                                <rect
                                                    x={1}
                                                    y={7.5}
                                                    width={16}
                                                    height={3}
                                                />
                                            ) : (
                                                <polyline points="2 9 7 14 16 4" />
                                            )}
                                        </svg>
                                    </span>

                                    {placement === "end" && label}
                                </>
                            );
                        }}
                    </CheckboxButton>
                );
            }}
        </CheckboxField>
    );
};
