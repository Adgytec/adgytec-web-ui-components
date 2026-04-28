import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import {
    ButtonCore,
    ButtonReset,
    buttonColorBase,
    buttonColorConfig,
    withTooltip,
} from "../../core";
import {
    SplitButtonTriggerBase,
    SplitButtonTriggerIconSize,
    SplitButtonVariantBase,
} from "../core";
import { SplitButtonContext } from "../SplitButtonContext";
import styles from "./splitButtonTrigger.module.css";
import type { SplitButtonTriggerProps } from "./types";

export const SplitButtonTrigger: React.FC<SplitButtonTriggerProps> = ({
    tooltip,
    onPress,
    isDisabled,
    isPending,
    ...props
}) => {
    const splitButtonState = useContext(SplitButtonContext);

    const { splashInfo, handlePress } = useSplash(onPress);

    const pending = isPending || splitButtonState.isPending;
    const disabled = isDisabled || splitButtonState.isDisabled;

    return withTooltip(
        <AriaButton
            onPress={handlePress}
            isDisabled={disabled}
            isPending={pending}
            className={clsx(
                ButtonReset,
                ButtonCore,
                buttonColorBase,
                buttonColorConfig(splitButtonState.color),
                styles["trigger"],
                SplitButtonVariantBase,
                SplitButtonTriggerBase
            )}
            {...props}
        >
            {splashInfo && <Splash {...splashInfo} />}
            <Icon
                icon={ChevronDown}
                size={SplitButtonTriggerIconSize[splitButtonState.size]}
            />
        </AriaButton>,
        tooltip
    );
};
