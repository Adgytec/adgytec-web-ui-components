import clsx from "clsx";
import { GridListItem } from "react-aria-components";
import { Splash, useSplash } from "@/components/Splash";
import styles from "./card.module.css";
import type { CardProps } from "./types";

/**
 * A card container component implementing Material Design 3 Card guidelines.
 *
 * Cards contain content and actions about a single subject. They present information
 * in a structured format and support three visual variants (`"filled"`, `"elevated"`, `"outlined"`),
 * interactive press states with touch ripple feedback via {@link Splash}, keyboard navigation,
 * and accessible focus management built on top of React Aria's `GridListItem`.
 *
 * @example
 * ```tsx
 * import { Card, CardIcon } from '@adgytec/web-ui-components';
 * import { Bell } from 'lucide-react';
 *
 * <Card variant="elevated" onPress={() => console.log('Card clicked')}>
 *     <CardIcon icon={Bell} />
 *     <h3>Notifications</h3>
 *     <p>Manage your alert preferences.</p>
 * </Card>
 * ```
 */
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
