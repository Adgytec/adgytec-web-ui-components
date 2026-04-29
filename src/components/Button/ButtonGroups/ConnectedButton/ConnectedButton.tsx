import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { ButtonIconSizeMapping } from "../../core";
import { useConnectedButtonGroupContext } from "../ButtonGroupContext";
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
        <AriaToggleButton onPress={handlePress} {...props}>
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
                    <div {...dataAttrs}>
                        {splashInfo && <Splash {...splashInfo} />}

                        {iconToRender && (
                            <Icon icon={iconToRender} size={iconSize} />
                        )}

                        {isChildFunc ? children(renderProps) : children}
                    </div>
                );
            }}
        </AriaToggleButton>
    );
};
