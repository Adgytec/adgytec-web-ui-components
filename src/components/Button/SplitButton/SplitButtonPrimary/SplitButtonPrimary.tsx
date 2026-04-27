import { useContext } from "react";
import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { ButtonIconSizeMapping, withTooltip } from "../../core";
import { SplitButtonContext } from "../SplitButtonContext";
import type { SplitButtonPrimaryProps } from "./types";

export const SplitButtonPrimary: React.FC<SplitButtonPrimaryProps> = ({
    tooltip,
    icon,
    children,
    onPress,
    isDisabled,
    isPending,
    ...props
}) => {
    const splitButtonState = useContext(SplitButtonContext);

    const { splashInfo, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    const pending = isPending || splitButtonState.isPending;
    const disabled = isDisabled || splitButtonState.isDisabled;

    return withTooltip(
        <AriaButton
            onPress={handlePress}
            isDisabled={disabled}
            isPending={pending}
            {...props}
        >
            {(renderProps) => (
                <>
                    {splashInfo && <Splash {...splashInfo} />}

                    {icon && (
                        <Icon
                            icon={icon}
                            size={ButtonIconSizeMapping[splitButtonState.size]}
                        />
                    )}

                    {isChildFunc ? children(renderProps) : children}
                </>
            )}
        </AriaButton>,
        tooltip
    );
};
