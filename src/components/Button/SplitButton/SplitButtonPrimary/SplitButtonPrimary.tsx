import { clsx } from "clsx";
import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Loader } from "@/components/Loader";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { TapTarget } from "@/utils/tapTarget";
import {
    ButtonCore,
    ButtonIconSizeMapping,
    ButtonLabelTextMapping,
    ButtonReset,
    buttonColorBase,
    buttonColorConfig,
    withTooltip,
} from "../../core";
import { SplitButtonPrimaryBase, SplitButtonVariantBase } from "../core";
import { useSplitButtonContext } from "../SplitButtonContext";
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
    const splitButtonState = useSplitButtonContext();

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
            className={clsx(ButtonReset, TapTarget)}
        >
            {(renderProps) => {
                const {
                    isDisabled,
                    isFocusVisible,
                    isFocused,
                    isPressed,
                    isHovered,
                } = renderProps;

                const dataAttrs = {
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                };

                const iconSize = ButtonIconSizeMapping[splitButtonState.size];
                return (
                    <div
                        className={clsx(
                            ButtonCore,
                            buttonColorBase,
                            buttonColorConfig(splitButtonState.color),
                            ButtonLabelTextMapping[splitButtonState.size],
                            SplitButtonPrimaryBase,
                            SplitButtonVariantBase
                        )}
                        {...dataAttrs}
                    >
                        {splashInfo && <Splash {...splashInfo} />}

                        {renderProps.isPending ? (
                            <Loader size={iconSize} />
                        ) : (
                            icon && <Icon icon={icon} size={iconSize} />
                        )}

                        {isChildFunc ? children(renderProps) : children}
                    </div>
                );
            }}
        </AriaButton>,
        tooltip
    );
};
