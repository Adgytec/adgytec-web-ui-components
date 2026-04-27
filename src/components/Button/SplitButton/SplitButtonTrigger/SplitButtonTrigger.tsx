import { ChevronDown, ChevronUp } from "lucide-react";
import { useContext } from "react";
import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { withTooltip } from "../../core";
import { SplitButtonTriggerIconSize } from "../core";
import { SplitButtonContext } from "../SplitButtonContext";
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
            {...props}
        >
            {({ isPressed }) => (
                <>
                    {splashInfo && <Splash {...splashInfo} />}
                    {isPressed ? (
                        <Icon
                            icon={ChevronUp}
                            size={
                                SplitButtonTriggerIconSize[
                                    splitButtonState.size
                                ]
                            }
                        />
                    ) : (
                        <Icon
                            icon={ChevronDown}
                            size={
                                SplitButtonTriggerIconSize[
                                    splitButtonState.size
                                ]
                            }
                        />
                    )}
                </>
            )}
        </AriaButton>,
        tooltip
    );
};
