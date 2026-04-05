import clsx from "clsx";
import { Link as UnstyledLink } from "react-aria-components";
import { Splash } from "@/components/Splash/Splash.tsx";
import { useSplash } from "@/components/Splash/useSplash.ts";
import { Tooltip } from "@/components/Tooltip/Tooltip.tsx";
import styles from "@/utils/button/button.module.css";
import type { LinkProps } from "./types";

export const ButtonLink: React.FC<LinkProps> = ({
    theme = "primary",
    description,
    underline,
    variant = "filled",
    shape = "default",
    children,
    ...props
}) => {
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
                    theme,
                    styles[shape]
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
