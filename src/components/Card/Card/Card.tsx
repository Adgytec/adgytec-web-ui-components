import clsx from "clsx";
import { GridListItem } from "react-aria-components";
import { Splash, useSplash } from "@/components/Splash";
import styles from "./card.module.css";
import type { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
    variant = "filled",
    className,
    onPress,
    children,
    ...props
}) => {
    const { handlePress, splashInfo } = useSplash(onPress);

    return (
        <GridListItem
            className={(renderProps) =>
                clsx(
                    styles["card"],
                    styles[variant],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            onPress={handlePress}
            {...props}
        >
            {(renderProps) => {
                return (
                    <>
                        {splashInfo && <Splash {...splashInfo} />}
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                    </>
                );
            }}
        </GridListItem>
    );
};
