import { clsx } from "clsx";
import { useContext } from "react";
import { Radio as AriaRadio } from "react-aria-components";
import { TapTarget } from "@/utils/tapTarget";
import { RadioGroupContext } from "./context";
import styles from "./radio.module.css";
import type { RadioProps } from "./types";

export const Radio: React.FC<RadioProps> = ({
    className,
    children,
    labelPlacement,
    ...props
}) => {
    const { labelPlacement: groupLabelPlacement } =
        useContext(RadioGroupContext);
    const placement = labelPlacement ?? groupLabelPlacement ?? "end";

    return (
        <AriaRadio
            className={(renderProps) =>
                clsx(
                    styles["radio"],
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
                } = renderProps;

                const dataAttrs = {
                    "data-selected": isSelected || undefined,
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
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
