import { clsx } from "clsx";
import { Button as UnstyledButton } from "react-aria-components";
import { Splash } from "@/components/Splash/Splash.tsx";
import { useSplash } from "@/components/Splash/useSplash.ts";
import { Tooltip } from "@/components/Tooltip";
import styles from "./button.module.css";
import type { ButtonProps } from "./types.ts";

export const Button = ({
    variant,
    theme = "primary",
    shape = "default",
    description,
    children,
    ...props
}: ButtonProps) => {
    const { coords, handlePress } = useSplash(props.onPress);
    const isChildFunc = typeof children === "function";

    return (
        <Tooltip theme={theme} description={description}>
            <UnstyledButton
                {...props}
                className={clsx(
                    styles["button"],
                    styles[variant],
                    styles[theme],
                    styles[shape],
                    props.className
                )}
                onPress={handlePress}
            >
                {isChildFunc ? (
                    (values) => (
                        <>
                            {coords && <Splash {...coords} />}
                            {children(values)}
                        </>
                    )
                ) : (
                    <>
                        {coords && <Splash {...coords} />}
                        {children}
                    </>
                )}
            </UnstyledButton>
        </Tooltip>
    );
};
