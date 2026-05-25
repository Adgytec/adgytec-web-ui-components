import { clsx } from "clsx";
import { useContext } from "react";
import { Radio as AriaRadio } from "react-aria-components";
import { typography } from "@/utils";
import { TapTarget } from "@/utils/tapTarget";
import { RadioGroupContext } from "./context";
import styles from "./radio.module.css";
import type { RadioProps } from "./types";

export const Radio: React.FC<RadioProps> = ({
    className,
    children,
    labelPlacement,
    containerStateLayer,
    ...props
}) => {
    const {
        labelPlacement: groupLabelPlacement,
        containerStateLayer: groupContainerStateLayer,
    } = useContext(RadioGroupContext);
    const placement = labelPlacement ?? groupLabelPlacement ?? "end";
    const stateLayer = containerStateLayer ?? groupContainerStateLayer ?? false;

    return (
        <AriaRadio
            className={(renderProps) =>
                clsx(
                    styles["radio"],
                    stateLayer && styles["state-layer"],
                    typography.labelLarge,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-radio
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
                } = renderProps;

                const dataAttrs = {
                    "data-selected": isSelected || undefined,
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-show-state-layer": !stateLayer || undefined,
                    "data-invalid": isInvalid || undefined,
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
                            <span
                                className={clsx(styles["indicator-icon"])}
                                {...dataAttrs}
                            ></span>
                        </span>

                        {placement === "end" && label}
                    </>
                );
            }}
        </AriaRadio>
    );
};
