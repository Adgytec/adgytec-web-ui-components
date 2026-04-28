import { clsx } from "clsx";
import { useContext } from "react";
import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import {
    ButtonCore,
    ButtonIconSizeMapping,
    ButtonLabelTextMapping,
    ButtonReset,
    buttonColorBase,
    buttonColorConfig,
    withTooltip,
} from "../../core";
import { SplitButtonContext } from "../SplitButtonContext";
import type { SplitButtonPrimaryProps } from "./types";
import { SplitButtonPrimaryBase, SplitButtonVariantBase } from "../core";
import { Loader } from "@/components/Loader";

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
            className={clsx(
                ButtonReset,
                ButtonCore,
                buttonColorBase,
                buttonColorConfig(splitButtonState.color),
                ButtonLabelTextMapping[splitButtonState.size],
                SplitButtonPrimaryBase,
                SplitButtonVariantBase
            )}
        >
            {(renderProps) => {
                const iconSize = ButtonIconSizeMapping[splitButtonState.size];
                return (
                    <>
                        {splashInfo && <Splash {...splashInfo} />}

                        {renderProps.isPending ? (
                            <Loader size={iconSize} />
                        ) : (
                            icon && <Icon icon={icon} size={iconSize} />
                        )}

                        {isChildFunc ? children(renderProps) : children}
                    </>
                );
            }}
        </AriaButton>,
        tooltip
    );
};
