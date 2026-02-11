import styles from "./button.module.css";
import { Link as UnstyledLink } from "react-aria-components";
import { Tooltip } from "@/components/Tooltip/Tooltip.tsx";
import type { ButtonLinkProps, ButtonShape } from "./types.ts";
import { Splash } from "@/components/Splash/Splash.tsx";
import { useSplash } from "@/components/Splash/useSplash.ts";
import clsx from "clsx";

export const ButtonLink = ({
    variant = "filled",
    theme = "primary",
    description,
    underline = true,
    children,
    ...props
}: ButtonLinkProps) => {
    const buttonShape: ButtonShape = "default";
    const { coords, handlePress } = useSplash(props.onPress);
    const isChildFunc = typeof children === "function";

    return (
        <Tooltip theme={theme} description={description}>
            <UnstyledLink
                {...props}
                {...(underline && { "data-underline": true })}
                onPress={handlePress}
                className={clsx(
                    styles["button"],
                    styles["button-link"],
                    styles[variant],
                    styles[theme],
                    styles[buttonShape]
                )}
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
            </UnstyledLink>
        </Tooltip>
    );
};
