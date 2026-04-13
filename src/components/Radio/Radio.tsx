import { clsx } from "clsx";
import { Radio as AriaRadio, type RadioProps } from "react-aria-components";
import { Target } from "../Target";
import styles from "./radio.module.css";

export const Radio: React.FC<RadioProps> = ({
    className,
    children,
    ...props
}) => {
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
        </AriaRadio>
    );
};
