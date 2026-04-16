// TODO: will be updated in next pr
import clsx from "clsx";
import { ToggleButton as UnstyledToggleButton } from "react-aria-components";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import styles from "@/utils/button/button.module.css";
import type { ToggleButtonProps } from "./types";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
    description,
    theme = "primary",
    className,
    children,
    variant = "outlined",
    shape = "default",
    onPress,
    ...props
}) => {
    const { splashInfo: coords, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    return (
        <UnstyledToggleButton
            onPress={handlePress}
            className={(renderProps) =>
                clsx(
                    styles["button"],
                    theme,
                    styles[variant],
                    styles[shape],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
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
        </UnstyledToggleButton>
    );
};
