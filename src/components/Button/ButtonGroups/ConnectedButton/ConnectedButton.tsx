import clsx from "clsx";
import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
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
} from "../../core";
import { useConnectedButtonGroupContext } from "../ButtonGroupContext";
import styles from "./connectedButton.module.css";
import type { ConnectedButtonProps } from "./types";

export const ConnectedButton: React.FC<ConnectedButtonProps> = ({
    icon,
    selectedIcon,
    children,
    onPress,
    ...props
}) => {
    const { shape, size, color } = useConnectedButtonGroupContext();

    const { splashInfo, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    return (
        <AriaToggleButton
            onPress={handlePress}
            className={clsx(ButtonReset, TapTarget)}
            {...props}
            data-connected-button={true}
        >
            {(renderProps) => {
                const {
                    isSelected,
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
                    "data-selected": isSelected || undefined,
                    "data-toggle-button": true,
                    "data-shape": shape,
                    "data-visual": true,
                };

                let iconToRender = icon;
                if (isSelected && selectedIcon) iconToRender = selectedIcon;

                const iconSize = ButtonIconSizeMapping[size];
                return (
                    <span
                        {...dataAttrs}
                        className={clsx(
                            ButtonCore,
                            buttonColorBase,
                            buttonColorConfig(color),
                            ButtonLabelTextMapping[size],
                            styles["button"]
                        )}
                    >
                        {splashInfo && <Splash {...splashInfo} />}

                        {iconToRender && (
                            <Icon icon={iconToRender} size={iconSize} />
                        )}

                        {isChildFunc ? children(renderProps) : children}
                    </span>
                );
            }}
        </AriaToggleButton>
    );
};
