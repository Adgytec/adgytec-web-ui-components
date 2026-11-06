import { clsx } from "clsx";
import { useContext } from "react";
import { RadioButton, RadioField } from "react-aria-components";
import { typography } from "@/utils";
import { TapTarget } from "@/utils/tapTarget";
import { RadioGroupContext } from "./context";
import styles from "./radio.module.css";
import type { RadioProps } from "./types";

/**
 * A radio button control implementing Material Design 3 Radio guidelines.
 *
 * Designed for single-choice options within a [`RadioGroup`](src/components/Input/Radio/RadioGroup.tsx).
 * Features animated selection dot scaling, an accessible touch target, interaction state layers,
 * and configurable label positioning. Built on React Aria's `RadioField` and `RadioButton`.
 *
 * @example
 * ```tsx
 * import { RadioGroup, Radio } from "@adgytec/web-ui-components";
 *
 * <RadioGroup label="Select an option">
 *     <Radio value="1">Option One</Radio>
 *     <Radio value="2" labelPlacement="start">Option Two</Radio>
 * </RadioGroup>
 * ```
 */
export const Radio: React.FC<RadioProps> = ({
    children,
    labelPlacement,
    ...props
}) => {
    const { labelPlacement: groupLabelPlacement } =
        useContext(RadioGroupContext);
    const placement = labelPlacement ?? groupLabelPlacement ?? "end";

    return (
        <RadioField {...props}>
            {(renderProps) => {
                const label =
                    typeof children === "function"
                        ? children(renderProps)
                        : children;
                return (
                    <RadioButton
                        className={clsx(styles["radio"], typography.labelLarge)}
                    >
                        {(buttonRenderProps) => {
                            const {
                                isSelected,
                                isHovered,
                                isDisabled,
                                isFocused,
                                isFocusVisible,
                                isPressed,
                                isInvalid,
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
                                        <span
                                            className={clsx(
                                                styles["indicator-icon"]
                                            )}
                                            {...dataAttrs}
                                        ></span>
                                    </span>

                                    {placement === "end" && label}
                                </>
                            );
                        }}
                    </RadioButton>
                );
            }}
        </RadioField>
    );
};
