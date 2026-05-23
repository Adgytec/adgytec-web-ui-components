import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { TapTarget } from "@/utils/tapTarget";
import {
    ButtonCore,
    ButtonReset,
    buttonColorBase,
    withTooltip,
} from "../../core";
import {
    SplitButtonTriggerBase,
    SplitButtonTriggerIconSize,
    SplitButtonVariantBase,
} from "../core";
import { useSplitButtonContext } from "../SplitButtonContext";
import styles from "./splitButtonTrigger.module.css";
import type { SplitButtonTriggerProps } from "./types";

export const SplitButtonTrigger: React.FC<SplitButtonTriggerProps> = ({
    tooltip,
    onPress,
    isDisabled,
    isPending,
    className,
    ...props
}) => {
    const splitButtonState = useSplitButtonContext();

    const { splashInfo, handlePress } = useSplash(onPress);

    const pending = isPending || splitButtonState.isPending;
    const disabled = isDisabled || splitButtonState.isDisabled;

    return withTooltip(
        <AriaButton
            onPress={handlePress}
            isDisabled={disabled}
            isPending={pending}
            className={(renderProps) =>
                clsx(
                    ButtonReset,
                    TapTarget,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-button
            data-split-button-trigger
        >
            {({
                isDisabled,
                isFocusVisible,
                isFocused,
                isPressed,
                isHovered,
            }) => {
                const dataAttrs = {
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-visual-button": true,
                };

                return (
                    <span
                        className={clsx(
                            ButtonCore,
                            buttonColorBase,
                            styles["trigger"],
                            SplitButtonVariantBase,
                            SplitButtonTriggerBase
                        )}
                        {...dataAttrs}
                    >
                        {splashInfo && <Splash {...splashInfo} />}
                        <Icon
                            icon={ChevronDown}
                            size={
                                SplitButtonTriggerIconSize[
                                    splitButtonState.size
                                ]
                            }
                        />
                    </span>
                );
            }}
        </AriaButton>,
        tooltip
    );
};
