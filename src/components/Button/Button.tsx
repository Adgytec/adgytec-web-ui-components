// TODO: impl will be updated

import { clsx } from "clsx";
import { Button as UnstyledButton } from "react-aria-components";
import { Splash } from "@/components/Splash/Splash.tsx";
import { useSplash } from "@/components/Splash/useSplash.ts";
import styles from "@/utils/button/button.module.css";
import type { ButtonProps } from "./types.ts";

export const Button: React.FC<ButtonProps> = ({
    variant = "filled",
    theme = "primary",
    shape = "default",
    description,
    children,
    onPress,
    className,
    ...props
}) => {
    const { coords, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    return (
        <UnstyledButton
            className={(renderProps) =>
                clsx(
                    styles["button"],
                    styles[variant],
                    theme,
                    styles[shape],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            onPress={handlePress}
            {...props}
        >
            {isChildFunc ? (
                (buttonState) => (
                    <>
                        {coords && <Splash {...coords} />}
                        {children(buttonState)}
                    </>
                )
            ) : (
                <>
                    {coords && <Splash {...coords} />}
                    {children}
                </>
            )}
        </UnstyledButton>
    );
};
