import clsx from "clsx";
import { Link as UnstyledLink } from "react-aria-components";
import { Splash } from "@/components/Splash/Splash.tsx";
import { useSplash } from "@/components/Splash/useSplash.ts";
import { Tooltip } from "@/components/Tooltip/Tooltip.tsx";
import styles from "@/utils/button/button.module.css";
import type { ButtonLinkProps } from "./types";

export const ButtonLink: React.FC<ButtonLinkProps> = ({
    visual,
    theme = "primary",
    description,
    underline,
    onPress,
    children,
    className,
    ...props
}) => {
    const { coords, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    const { variant = "filled", shape = "default" } = visual;

    return (
        <Tooltip theme={theme} description={description}>
            <UnstyledLink
                {...(underline && { "data-underline": true })}
                onPress={handlePress}
                className={(renderProps) =>
                    clsx(
                        styles["button"],
                        styles["button-link"],
                        styles[variant],
                        theme,
                        styles[shape],
                        typeof className === "function"
                            ? className(renderProps)
                            : className
                    )
                }
                {...props}
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
