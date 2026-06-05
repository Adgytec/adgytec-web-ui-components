import clsx from "clsx";
import { Button } from "react-aria-components";
import {
    ButtonReset,
    buttonColorBase,
    buttonColorConfig,
} from "@/components/Button";
import { Splash, useSplash } from "@/components/Splash";
import { TapTarget, typography } from "@/utils";
import styles from "./appBarAvatar.module.css";

export const AppBarAvatar: React.FC<
    React.ComponentPropsWithRef<typeof Button>
> = ({ className, children, onPress, ...props }) => {
    const { splashInfo, handlePress } = useSplash(onPress);

    return (
        <Button
            onPress={handlePress}
            className={(renderProps) =>
                clsx(
                    ButtonReset,
                    styles["avatar"],
                    typography.labelLarge,
                    TapTarget,
                    buttonColorConfig("filled"),
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-button
        >
            {(renderProps) => {
                const {
                    isDisabled,
                    isFocusVisible,
                    isFocused,
                    isPressed,
                    isHovered,
                } = renderProps;

                const dataAttrs = {
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-visual-button": true,
                };

                return (
                    <span className={clsx(buttonColorBase)} {...dataAttrs}>
                        {splashInfo && <Splash {...splashInfo} />}

                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                    </span>
                );
            }}
        </Button>
    );
};
